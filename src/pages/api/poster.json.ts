// ChatGPT was used to debug my initial code and provide a solution to the issues I was facing.

import { TMDB_API_KEY } from '../../utils/env';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const { title } = await request.json();
  const apiKey = TMDB_API_KEY;
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(title)}`);
  const data = await response.json();

  if (data.results && data.results.length > 0) {
    const movie = data.results[0];
    const posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/150';
    return new Response(JSON.stringify({ poster: posterPath }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response(JSON.stringify({ poster: 'https://via.placeholder.com/150' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
