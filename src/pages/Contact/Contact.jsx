import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page container">
            <div className="contact-brand-container">
                <h2 className="contact-brand-text">Tu Marca</h2>
            </div>
            <h1 className="text-center contact-title">Contacto y Ubicación</h1>

            <div className="contact-content">
                <div className="contact-info">
                    <div className="info-section">
                        <p className="info-text">Av. Principal 123</p>
                        <p className="info-text">Tu Ciudad,&nbsp; Tu Provincia</p>
                    </div>

                    <div className="info-section">
                        <h2 className="info-title">Horarios</h2>
                        <p className="text-muted">Martes a Domingo: 19:00 - 01:00</p>
                        <p className="text-muted">Lunes: Cerrado</p>
                    </div>

                    <div className="info-section">
                        <h2 className="info-title">Contactanos</h2>
                        <p className="subtitle">Para reservas,&nbsp; delivery o take away</p>
                        <a
                            href="https://wa.me/5491100000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary whatsapp-btn"
                        >
                            WhatsApp: +54 9 11 0000 0000
                        </a>
                    </div>

                    <div className="info-section">
                        <h2 className="info-title">¡Valóranos!</h2>
                        <p className="subtitle">Dejanos tu opinión en Google Maps</p>
                        <a
                            href="https://maps.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary contact-btn"
                        >
                            Reseñas ⭐
                        </a>
                    </div>
                </div>

                <div className="map-placeholder">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895464!2d-58.38375908477032!3d-34.60373888045973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb1a5a1c6d%3A0x8e219f72cd4637a7!2sObelisco!5e0!3m2!1ses-419!2sar!4v1708000000000!5m2!1ses-419!2sar"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación Tu Marca"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
