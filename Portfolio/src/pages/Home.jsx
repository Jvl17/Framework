import React from "react";
import "../App.css";
import ImgJV from '../assets/imgs/ImgJV.jpg'
import Flechina from '../assets/imgs/Flechinha.svg'
import LinhasAleatorias from '../assets/imgs/linhas-aleatorias.svg'

const Home = () => {
    return (
        <main className="main">
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <h1 className="home__name">João Vitor</h1>
                    <div className="home__perfil">
                        <div className="home__image">
                            <img src={ImgJV} alt="" className="home__img" />
                            <div className="home__shadow"></div>
                            <img src={Flechina} alt="" className="home__arrow" />
                            <img src={LinhasAleatorias} alt="" className="home__line" />
                            <div className="geometric-box"></div>
                        </div>

                        <div className="home__social">
                            <a href="https://instagram.com/jvlpaulino17?igshid=MzMyNGUyNmU2YQ==" target="_blank" className="home__social-link">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-lima-922a02296/" target="_blank" className="home__social-link">
                                <i className="ri-linkedin-box-line"></i>
                            </a>
                            <a href="https://github.com/Jvl17" target="_blank" className="home__social-link">
                                <i className="ri-github-line"></i>
                            </a>
                        </div>
                    </div>

                    <div className="home__info">
                        <p className="home__description">
                            <b>Desenvolvedor de Sites</b> com pouca experiência mas que você pode ter certeza que sou um bom profissional.
                        </p>
                        <a href="#about" className="home__scroll">
                            <div className="home__scroll-box">
                                <i className="ri-arrow-down-s-line"></i>
                            </div>
                            <span className="home__scroll-text">Role Para Baixo</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home