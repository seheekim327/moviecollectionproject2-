async function getResponse() {

    const response = await fetch('./moviefinal.json')
    const moviesList = await response.json();

    createCards(moviesList)
}

function createCards(movies) {
    const cardContainer = document.getElementById('card-container');

    for (let currentMovie of movies) {
        let currentCard = document.createElement('div');
        currentCard.classList.add('card');

        currentCard.innerHTML = `
        <div class="poster">
           <a href="${currentMovie.trailer}"> 
           <img src=${currentMovie.image}>
           </a>
        </div>
                        
        <div class="details">
            <h2>${currentMovie.title} (${currentMovie.releaseyear})
                <br><span>${currentMovie.productioncompany}</span>
            </h2>

            <div class="rating">
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <span>⭐️⭐️⭐️⭐️</span> 
                <span>${currentMovie.reviewpoint}</span>
            </div>

            <div class="tags">
                <span class="fantasy">${currentMovie.genres}</span>
            </div>

            <div class="info">
                <p>${currentMovie.info}</p>
            </div>

        </div>
        `

        cardContainer.appendChild(currentCard);
    }





}

getResponse();