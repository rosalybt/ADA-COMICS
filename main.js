let currentPage = 1




const createCard = (cover, HTML) => {

    cover.forEach((info) => {
        HTML.innerHTML += `
        <article class="card">
            <div class="imagen">
                <img src="${info.image}" alt="">
            </div>
            <div class="info">
                <h3 class="nombre">${info.name}</h3>
            </div>
        </article>
        `
    });

};



const getInfo = (url) => {
    fetch(url).then((data) => {
        return data.json();
    }).then((cover) => {
        console.log(cover.results)
        const results = document.querySelector('.resultados')
        const containerCards = document.querySelector('.contenedor-cards')
        containerCards.innerHTML = ''
        results.innerHTML = ''
        results.innerHTML = cover.info.count
        createCard(cover.results, containerCards);
    })
};

getInfo('https://rickandmortyapi.com/api/character');


const nextPage = document.querySelector('#btn-next')
const previousPage = document.querySelector('#btn-previous')

nextPage.onclick = () => {
    currentPage += 1
    getInfo(`https://rickandmortyapi.com/api/character?page=${currentPage}`)

}

previousPage.onclick = () => {
    currentPage -= 1
    if (currentPage) getInfo(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
}

