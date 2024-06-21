import React, { useEffect, useState } from 'react';
import './country.css'

function App() {
    const [countries, setCountries] = useState([])
    const [favorites, setFavorites] = useState([])
    const [procPais, setProcPais] = useState('')
    const [procFavorites, setProcFavorites] = useState('')


    useEffect(() => {
        fetch('./paises.json')
            .then(response => response.json())
            .then(data => {
                const dataTransform = data.map(country => ({
                    name: country.name,
                    flag: country.flag,
                    population: country.population,
                    numericCode: country.numericCode
                }))

                const sortCountries = dataTransform.sort((a, b) => a.name.localeCompare(b.name))
                setCountries(sortCountries)
            })
            .catch(error => console.error('Erro ao Buscar Dados:', error))
    }, [])


    const addFavorites = (id) => {
        const addCountry = countries.find(country => country.numericCode === id)
        setFavorites([...favorites, addCountry])
        setCountries(countries.filter(country => country.numericCode !== id))
    }

    const removeFavorites = (id) => {
        const removeCountry = favorites.find(country => country.numericCode === id)
        setCountries([...countries, removeCountry].sort((a, b) => a.name.localeCompare(b.name)))
        setFavorites(favorites.filter(country => country.numericCode !== id))
    }

    const popTotal = (list) => list.reduce((acc, country) => acc + country.population, 0)

    const filterCountries = countries.filter(country =>
        country.name.toLowerCase().includes(procPais.toLowerCase())
        )

    const filterFavorites = favorites.filter(country =>
        country.name.toLowerCase().includes(procFavorites.toLowerCase())
        )

    return (
        <div className="App">
            <div className="list-container">
                <div className="list">
                    <h2>Paises</h2>
                    <input 
                    type="text" 
                    placeholder="Pesquisar País"
                    value={procPais}
                    onChange={(e) => setProcPais(e.target.value)}
                     />
                    <p>Total de Paises: {filterCountries.length}</p>
                    <p>População Total: {popTotal(filterCountries).toLocaleString()}</p>
                    <ul>
                        {filterCountries.map(country => (
                            <li key={country.numericCode}>
                                <img src={country.flag} alt={country.name} width="20" height="15" />
                                {country.name} - {country.population.toLocaleString()}
                                <button onClick={() => addFavorites(country.numericCode)}>Adicionar aos Favoritos</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="list">
                    <h2>Favoritos</h2>
                    <input 
                    type="text" 
                    placeholder="Pesquisar Favoritos"
                    value={procFavorites}
                    onChange={(e) => setProcFavorites(e.target.value)}
                     />
                    <p>Total de Paises: {filterFavorites.length}</p>
                    <p>População Total: {popTotal(filterFavorites).toLocaleString()}</p>
                    <ul>
                        {filterFavorites.map(country => (
                            <li key={country.numericCode}>
                                <img src={country.flag} alt={country.name} width="20" height="15" />
                                {country.name} - {country.population.toLocaleString()}
                                <button onClick={() => removeFavorites(country.numericCode)}>Remover dos Favoritos</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default App;