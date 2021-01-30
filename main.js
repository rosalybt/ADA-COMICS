fetch('https://rickandmortyapi.com/api/character')
    .then((data) => {
        return data.json();
    })
    .then((info) => {
        console.log(info);
        const resultados = document.querySelector('.resultados')
        const contenedorCards = document.querySelector('.contenedor-cards')
        contenedorCards.innerHTML = ''
        resultados.innerHTML = ''
        resultados.innerHTML = info.info.count
        info.results.map((personaje) => {
            contenedorCards.innerHTML += `
        <article class="card">
            <div class="imagen">
                <img src="${personaje.image}" alt="">
            </div>
            <div class="info">
                <h3 class="nombre">${personaje.name}</h3>
            </div>
        </article>
        `
        })
    });
