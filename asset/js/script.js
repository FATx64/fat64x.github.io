document.addEventListener('DOMContentLoaded', function () {
    // Load JSON data
    fetch('./asset/js/data/portfolio.json')
      .then(response => response.json())
      .then(data => {
        // Call a function to generate cards using the JSON data
        generateCards(data);
      })
      .catch(error => console.error('Error loading JSON:', error));
  
    // Function to generate cards
    function generateCards(data) {
      const cardContainer = document.getElementById('cardContainer');
    
      // Iterate over each object in the JSON data
      data.forEach(item => {
        // Create card elements
        const col = document.createElement('div');
        col.classList.add('col');
  
        const card = document.createElement('div');
        card.classList.add('card', 'h-100');
  
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = item.imageSrc;
        img.alt = item.cardTitle;
  
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
  
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = item.cardTitle;
  
        // Append elements to card
        cardBody.appendChild(title);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
  
        // Append card to cardContainer
        cardContainer.appendChild(col);
      });
    }
  });
  