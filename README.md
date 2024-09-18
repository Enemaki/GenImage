## GenImage - AI Image Generation Web App

This project is a web app for generating creative images using the powerful Stable Diffusion model from Stability AI ([stabilityai.com](https://stabilityai.com/)) hosted on Hugging Face ([huggingface.co](https://huggingface.co/)).

### Features

* Generate unique images based on user-provided text prompts.
* Leverage the power of Stable Diffusion for diverse and high-quality outputs.
* User-friendly interface with clear instructions and progress feedback.

### Technologies Used

* **Frontend:** HTML, CSS, Javascript (VITE framework)
* **Backend:** Hugging Face transformers library ([huggingface.co/transformers](https://huggingface.co/transformers))
* **Model:** stabilityai/stable-diffusion-xl-base-1.0 ([huggingface.co/stabilityai/stable-diffusion-xl-base-1.0](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0))

### Setup

1. **Clone the repository:**

```
git clone https://github.com/your-username/GenImage.git
```

2. **Install dependencies:**

```
npm install
```

3. **API Key:**

- Obtain a Hugging Face API key ([huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)) and store it securely in a `.env` file at the project root with the following format:

```
HUGGINGFACE_API_KEY="YOUR_API_KEY"
```

4. **Run the app:**

```
npm run dev
```

This will start a development server and open the app in your default browser at http://localhost:5173/.

### Usage

1. Visit http://localhost:5173/ in your browser.
2. Enter a clear and descriptive text prompt in the input field.
3. Click the "Generate Image" button.
4. The app will display a loading indicator and generate an image based on your prompt.

**Note:**

- GPU acceleration is recommended for faster image generation.
- The model has limitations on the type of content it can generate. Please refer to Hugging Face and Stability AI's guidelines for responsible use.

### Contributing

We welcome contributions to this project! Please create a pull request on GitHub if you have any improvements or suggestions.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
