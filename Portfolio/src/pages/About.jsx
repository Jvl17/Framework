import React from 'react';
import "../App.css";
import ImgJV2 from '../assets/imgs/ImgJV2.jpg'
import LinhasAleatorias from '../assets/imgs/linhas-aleatorias.svg'


const About = () => {
    return (
        <section className="about section" id="about">
            <div className="about__container container grid">
                <h2 className="section__title-1">
                    <span>Sobre Mim.</span>
                </h2>
                <div className="about__perfil">
                    <div className="about__image">
                        <img src={ImgJV2} alt="image" className="about__img" />
                        <div className="about__shadow"></div> <div className="geometric-box"></div>
                        <img src={LinhasAleatorias} alt="" className="about__line" />
                        <div className="about__box"></div>
                    </div>
                </div>
                <div className="about__info">
                    <p className="about__description"> Paixão sobre criar <b>Páginas Web</b> com <b>UI/UX Interferencia do Úsuario</b>, Eu tenho anos de experiência e diversos projetos feitos desde a vida escolar. </p>
                    <ul className="about__list">
                        <li className="about__item">
                            <b>Minhas Habilidades são:</b> HTML, CSS, JavaScript, Figma, Excel, C#, Banco de Dados, Unity & Linux.
                        </li>
                    </ul>
                    <div className="about__buttons">
                        <a href="#contact" className="button">
                            <i className="ri-send-plane-line"></i> Contact Me
                        </a>
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-lima-922a02296/" target="_blank" className="button__ghost">
                            <i className="ri-linkedin-box-line"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;