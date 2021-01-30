let currentPage = 1
let numberOfPages = 0




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

        const results = document.querySelector('.resultados')
        const containerCards = document.querySelector('.contenedor-cards')
        containerCards.innerHTML = ''
        results.innerHTML = ''
        results.innerHTML = cover.info.count
        numberOfPages = cover.info.pages
        createCard(cover.results, containerCards);
    })
};

getInfo('https://rickandmortyapi.com/api/character');


const nextPage = document.querySelector('#btn-next')
const previousPage = document.querySelector('#btn-previous')
const doubleNextPage = document.querySelector('#btn-double-next')
const doublePreviousPage = document.querySelector('#btn-double-previous')

nextPage.onclick = () => {
    currentPage += 1
    getInfo(`https://rickandmortyapi.com/api/character?page=${currentPage}`)

}

previousPage.onclick = () => {
    currentPage -= 1
    if (currentPage) getInfo(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
}

doubleNextPage.onclick = () => {
    currentPage += 2
    if (currentPage <= numberOfPages) getInfo(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
}

doublePreviousPage.onclick = () => {
    currentPage -= 2
    if (currentPage) getInfo(`https://rickandmortyapi.com/api/character?page=${currentPage}`)

}
