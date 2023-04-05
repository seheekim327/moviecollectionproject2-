async function getResponse() {

    const response = await fetch('./finalmovie2.json')
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
           
           <img src=${currentMovie.image}>
        
        </div>
                        
        <div class="details">
            <h2>${currentMovie.movie} (${currentMovie.when})
                <br><span>${currentMovie.where}</span>
            </h2>

            <div class="rating">
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <span>⭐️⭐️⭐️⭐️</span> 
                <span>${currentMovie.rate}</span>
            </div>

            <div class="tags">
                <span class="fantasy">${currentMovie.howmany}</span>
            </div>

            <div class="info">
                <p>
                <a href="${currentMovie.map}">🗺📍</a>
                </p>
            </div>
        </div>

       
        `

        cardContainer.appendChild(currentCard);
    }





}

getResponse();