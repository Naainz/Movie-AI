// src/pages/api/recommend.js
import { OPENAI_API_KEY } from '../../utils/env';

export async function post({ request }) {
  try {
    const { categories } = await request.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant."
          },
          {
            role: "user",
            content: `Give me some movie recommendations for the following categories: ${categories}. The format I want you to include is: "Movie Title (Year) And a brief description of the movie." You should provide 3 recommendations correctly fitting the categories. How you should split the recommendations is by using: (split) for each movie.`
          }
        ],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch recommendations');
    }

    const data = await response.json();
    const rawResponse = data.choices[0].message.content;
    const recommendations = rawResponse.split('(split)').map(rec => rec.trim());

    return new Response(JSON.stringify({
      recommendations,
      rawResponse,
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: error.message,
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
