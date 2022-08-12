const url_ryck_morty = 'https://rickandmortyapi.com/api/character';

const fetch_AsynAwait_ryck_morty = async()=>{
    const rick_morty = await fetch(url_ryck_morty);
    const rick_morty_json = await rick_morty.json();
    rick_morty_json.results.map(p =>crearCard(p));
}



fetch_AsynAwait_ryck_morty();


const crearCard = async(personaje) =>{
    const contenedor = document.querySelector('#container-cards');
    const card = document.createElement('div'); 
    card.classList.add('card');
    
    const cardTitle = document.createElement('h1'); 
    cardTitle.classList.add('card-titulo');
    cardTitle.textContent = personaje.name;

    const cardDescription= document.createElement('p');
    cardDescription.classList.add('card-cardDescription');


    //Hard-code la imagen porque no logre hacerlo desde la api.
    const image = document.createElement('img');
    image.src = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
    image.alt = "Ricky y Morty"; 

    card.appendChild(image);
    card.appendChild(cardTitle);
    contenedor.appendChild(card);

}

