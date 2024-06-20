import React from 'react';
import '../App.css'; 

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <div className="contact__container container grid">
                <h2 className="section__title-1">
                    <span>Contact Me</span>
                </h2>
                <div className="contact__info">
                    <h3 className="contact__subtitle">Entre em contato</h3>
                    <p className="contact__description">Você pode me contatar através das redes sociais abaixo ou pelo formulário.</p>
                    <div className="contact__social">
                        <a href="https://instagram.com/jvlpaulino17?igshid=MzMyNGUyNmU2YQ==" target="_blank" className="contact__social-link">
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-lima-922a02296/" target="_blank" className="contact__social-link">
                            <i className="ri-linkedin-box-line"></i>
                        </a>
                        <a href="https://github.com/Jvl17" target="_blank" className="contact__social-link">
                            <i className="ri-github-fill"></i>
                        </a>
                    </div>
                </div>
                <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <input type="text" className="contact__form-input" placeholder="Nome" required />
                    </div>
                    <div className="contact__form-group">
                        <input type="email" className="contact__form-input" placeholder="Email" required />
                    </div>
                    <div className="contact__form-group">
                        <textarea className="contact__form-input" placeholder="Mensagem" required></textarea>
                    </div>
                    <button type="submit" className="button">Enviar</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
