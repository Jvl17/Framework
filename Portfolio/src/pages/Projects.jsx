import React, { useEffect, useState } from 'react';
import Card from '../componentes/Card';
import '../App.css'; // Importando o estilo geral do App.css

const Projects = () => {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const response = await fetch('https://api.github.com/users/Jvl17/repos');
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const data = await response.json();
                setRepositories(data);
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        };

        fetchRepositories();
    }, []);

    return (
        <div>
            <section className="services section">
                <h2 className="section__title-2">
                    <span>Serviços</span>
                </h2>
                <div className="services__container container grid">
                    <article className="services__card">
                        <div className="services__border"></div>
                        <div className="services__content">
                            <div className="services__icon">
                                <div className="services__box"></div>
                                <i className="ri-layout-4-line"></i>
                            </div>
                            <h2 className="services__title">Design de Sites</h2>
                            <p className="services__description">Sites Bonitos e elegantes com diversas opções de Design, com interfaces pensadas no melhor para o cliente.</p>
                        </div>
                    </article>
                    <article className="services__card">
                        <div className="services__border"></div>
                        <div className="services__content">
                            <div className="services__icon">
                                <div className="services__box"></div>
                                <i className="ri-code-box-line"></i>
                            </div>
                            <h2 className="services__title">Desenvolvimento</h2>
                            <p className="services__description">Sites desenvolvidos do jeito que você preferir, dentro de suas especificações e feito para uma experiência inesquecível.</p>
                        </div>
                    </article>
                    <article className="services__card">
                        <div className="services__border"></div>
                        <div className="services__content">
                            <div className="services__icon">
                                <div className="services__box"></div>
                                <i className="ri-database-line"></i>
                            </div>
                            <h2 className="services__title">Banco de Dados</h2>
                            <p className="services__description">Consigo te oferecer o melhor do Banco de Dados seja para você ou para uma empresa, o foco é deixar o cliente contente.</p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="projects section" id="projects">
                <h2 className="section__title-1">
                    <span>Projetos</span>
                </h2>
                <div className="projects__container container grid">
                    {repositories.map((repo) => (
                        <div className="projects__box" key={repo.id}>
                            <Card
                                name={repo.name}
                                description={repo.description}
                                html_url={repo.html_url}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
