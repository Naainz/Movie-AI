import { OPENAI_API_KEY } from '../../utils/env';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { categories } = await request.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant."
          },
          {
            role: "user",
            content: `Give me some movie recommendations for the following categories: ${categories}. The format I want you to include is: "Movie Title (Year) And a brief description of the movie." You should provide 3 recommendations correctly fitting the categories. How you should split the recommendations is by using: (split) for each movie. You must not say anything else other than the recommendations.`
          }
        ],
      }),
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          error: 'Failed to fetch recommendations',
        }),
        { status: 500 }
      );
    }

    const data = await response.json();
    const rawResponse = data.choices[0].message.content;
    const recommendations = rawResponse.split('(split)').map(rec => rec.trim());

    return new Response(
      JSON.stringify({
        recommendations,
        rawResponse,
      }),
      { status: 200 }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'An error occurred while processing your request',
      }),
      { status: 500 }
    );
  }
};
