import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            {/* Sección Hero */}
            <section className="hero">
                <h1 className="hero-brand">Tu Marca</h1>
                <p className="hero-subtitle">Buena comida, buenos momentos.</p>
                <p className="hero-subtitle">Un lugar para juntarse, compartir y disfrutar buena comida sin vueltas ideal para familias, amigos y celebraciones simples.</p>
                <a
                    href="https://wa.me/5491100000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary hero-btn"
                >
                    Reservar Mesa
                </a>
            </section>

            {/* Sección Historia */}
            <section className="section-history">
                <div className="section-content">
                    <h2 className="section-title">Nuestra Historia</h2>
                    <p className="history-text">
                        Desde nuestros inicios, nos dedicamos a crear experiencias gastronómicas únicas.
                        Nacimos con la idea de ofrecer algo distinto, apostando por sabores auténticos con un toque casero,&nbsp; único y familiar.
                        <br />
                        <br />
                        Fuimos pioneros en incorporar sabores nuevos sin dejar de lado los clásicos, armando una carta pensada para todos los gustos.
                        Nuestra cocina siempre fue la protagonista: la estrella que nos dio identidad,&nbsp; crecimiento y visión.
                        <br />
                        <br />
                        Hoy vamos más allá del producto.
                        Creemos en los momentos compartidos, en el encuentro y en la experiencia.
                        Trabajamos cada día para mejorar la calidad y el disfrute de quienes nos eligen.
                        <br />
                        <br />
                        Tu Marca. Sabor, momentos y ganas de volver. 🍽️❤️
                    </p>
                </div>
            </section>

            {/* Sección Servicios */}
            <section className="section-quality">
                <div className="section-content">
                    <h2 className="section-title">Nuestros Servicios</h2>
                    <p className="quality-text">
                        Disfruta de la experiencia donde prefieras.
                        Ya sea en nuestro restaurante, en la comodidad de tu hogar o pasando a retirar tu pedido.
                    </p>

                    <div className="dishes-grid">
                        <div className="dish-card">
                            <h3 className="dish-title">Experiencia en el Local</h3>
                            <p>Disfruta de nuestra atención personalizada, ambiente acogedor con la mejor música y servicio.</p>
                        </div>
                        <div className="dish-card">
                            <h3 className="dish-title">Delivery</h3>
                            <p>Llevamos el sabor directamente a tu puerta. Rápido, caliente y listo para disfrutar.</p>
                        </div>
                        <div className="dish-card">
                            <h3 className="dish-title">Take Away</h3>
                            <p>Pedí y retiralo para disfrutar donde quieras.
                                <br />
                                Precios especiales para llevar.💛
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección CTA Final */}
            <section className="cta-section">
                <h2 className="section-title cta-section-title">Viví la Experiencia</h2>
                <div className="cta-buttons">
                    <button
                        onClick={() => {
                            navigate('/menu');
                            window.scrollTo(0, 0);
                        }}
                        className="btn btn-cta btn-cta-outline"
                    >
                        Ver Menú
                    </button>
                    <a
                        href="https://wa.me/5491100000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-cta btn-cta-white"
                    >
                        Reservar Ahora
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
