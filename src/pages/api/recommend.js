// src/pages/api/recommend.js

import { OPENAI_API_KEY } from '../../utils/env';

export async function post({ request }) {
  const { category } = await request.json();

  const response = await fetch('https://api.openai.com/v1/engines/gpt-4/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      prompt: `Give me some movie recommendations for the following categories: ${category}. The format I want you to include is: "Movie Title (Year) And a brief description of the movie."`,
      max_tokens: 100,
    }),
  });

  if (!response.ok) {
    return {
      status: 500,
      body: {
        error: 'Failed to fetch recommendations',
      },
    };
  }

  const data = await response.json();
  const recommendations = data.choices[0].text.trim().split('\n');

  return {
    body: {
      recommendations,
    },
  };
}
