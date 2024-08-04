# Movie AI

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Movie AI is a project that uses AI to generate movie scripts. The model used is GPT-4o-mini, a smaller version of the GPT-4o model. The model is trained on a dataset of movie scripts from various genres and fine-tuned to generate movie scripts.

## Features

- Generate movie scripts based on different genres
- Use GPT-4o-mini model for script generation
- Fetch movie posters using TMDb API

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js and npm
- Astro framework
- OpenAI API key
- TMDb API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Naainz/Movie-AI.git
   cd Movie-AI
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenAI and TMDb API keys:

   ```plaintext
   OPENAI_API_KEY="your_openai_api_key"
   TMDB_API_KEY="your_tmdb_api_key"
   ```

### Running the Project

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` (or whichever link astro provides you.).

### Project Structure

- **src/pages/api**: API routes for fetching movie posters and recommendations.
- **src/components**: React components used in the project.
- **src/layouts**: Layout components.
- **src/pages**: Page components.

### API Routes

- **/api/recommend.json.ts**: Fetches movie recommendations.
- **/api/poster.json.ts**: Fetches movie posters from TMDb API.

### Example Usage

Select genres from the provided options and click "Send to Analyser" to get movie recommendations. The recommendations include movie titles and descriptions, and posters are fetched using the TMDb API.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenAI](https://openai.com) for the GPT-4o-mini model
- [TMDb](https://www.themoviedb.org) for the movie data
- [Astro](https://astro.build) for the framework

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

## Contact

For any questions or inquiries, please contact [Naainz](https://github.com/Naainz).

---

[Movie AI GitHub Repository](https://github.com/Naainz/Movie-AI)
