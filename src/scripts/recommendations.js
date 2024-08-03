// src/scripts/recommendations.js

document.getElementById('recommendationForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const category = document.getElementById('category').value;
    const recommendationsDiv = document.getElementById('recommendations');
    
    recommendationsDiv.innerHTML = '<p>Loading...</p>';
    
    const response = await fetch('/api/recommend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category }),
    });
  
    const data = await response.json();
  
    if (data.error) {
      recommendationsDiv.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
      recommendationsDiv.innerHTML = data.recommendations.map(movie => `<p>${movie}</p>`).join('');
    }
  });
  