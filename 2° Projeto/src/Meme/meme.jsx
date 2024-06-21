import '../Meme/Meme.css'

function troca() {
    fetch('https://api.imgflip.com/get_memes').
        then(vasco => vasco.json().
            then(dados => mostraDados(dados)))

    fetch('https://api.quotable.io/random').
        then(gelo => gelo.json().
            then(data => mostraLegenda(data)))

    function mostraLegenda(data) {
        const legendMeme = document.querySelector('#legend')
        legendMeme.textContent = data.content
    }


    function mostraDados(dados) {

        const position = Math.floor(Math.random() * 100)
        const nomeMeme = document.querySelector('#nome')
        const imgMeme = document.querySelector('#img')
        nomeMeme.textContent = dados.data.memes[position].name
        imgMeme.src = dados.data.memes[position].url


    }
}




function Meme() {

    return (
        <>
            <div className='divBody'>
                <button onClick={troca}>Randomizar</button>

                <h1 id="nome"></h1>

                <img src="" alt="" id="img" />

                <h1 id="legend"> </h1>
            </div>

        </>
    )
}

export default Meme