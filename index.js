import { HfInference } from "@huggingface/inference";
const HF_TOKEN = import.meta.env.VITE_HF_TOKEN

const inference = new HfInference(HF_TOKEN);

const form = document.querySelector("#posterForm");
const movieTitle = document.querySelector("#movie-title");
const posterOutput = document.querySelector("#poster-output");
const generateButton = document.querySelector("#generatePosterBtn")

async function imageGenerator(query) {
  const blob = await inference.textToImage({
    model: 'stabilityai/stable-diffusion-xl-base-1.0',
    inputs: `${query}`,
    parameters: {
        negative_prompt: "blurr"
    }
  })

  const blobToBase64 = blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  }

  blobToBase64(blob).then(res => {
    // do what you wanna do
   // res is base64 now

    posterOutput.innerHTML = `<img src="${res}" alt="query">`
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  posterOutput.innerHTML = "<h2>Loading Image<h2>"
  imageGenerator(movieTitle.value)
  form.reset();
  generateButton.textContent = "Reset"
  generateButton.addEventListener("click", function(event) {
    event.preventDefault()
    location.reload()
  })
});