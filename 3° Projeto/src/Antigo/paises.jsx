import './Paises.css'
import { FaRegPlusSquare } from "react-icons/fa";

fetch('./paises.json').
    then(bra => bra.json()).
    then(data => mostraPais(data))

function mostraPais(data) {

    const table = document.querySelector('#table')

    data.forEach(itens => {

        table.innerHTML += `<tr><td></td><td>${itens.numericCode}</td><td>${itens.name}</td><td>${itens.population}</td><td><img src=${itens.flag}></td></tr>`

    })

}

function Paises() {
    return (
        <>
            <div className='text1'>
                <h1>
                    Paises Do Mundo
                </h1>
            </div>
            <div className='container'>
                <div className='part1'>
                    <table id='table'>
                        <tr>
                            <td>FAVORITAR: </td>
                            <td>ID: </td>
                            <td>NOME: </td>
                            <td>POPULAÇÃO: </td>
                            <td>BANDEIRA: </td>
                        </tr>
                    </table>
                </div>

                <div className='part2'>
                    <table id='table2'>
                        <tr>
                            <td>DESFAVORITAR:</td>
                            <td>ID:</td>
                            <td>NOME:</td>
                            <td>POPULAÇÃO:</td>
                            <td>BANDEIRA:</td>
                        </tr>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Paises