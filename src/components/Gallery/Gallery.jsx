import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

// Las imágenes pueden venir como props o estar hardcodeadas
import photo1 from '../../assets/gallery/photo1.webp';
import photo2 from '../../assets/gallery/photo2.webp';
import photo3 from '../../assets/gallery/photo3.webp';
import photo4 from '../../assets/gallery/photo4.webp';
import photo5 from '../../assets/gallery/photo5.webp';
import photo6 from '../../assets/gallery/photo6.webp';

const photos = [
    { id: 1, src: photo1, alt: 'Interior del restaurante' },
    { id: 2, src: photo2, alt: 'Nuestros platos' },
    { id: 3, src: photo3, alt: 'Ambiente' },
    { id: 4, src: photo4, alt: 'Especialidades' },
    { id: 5, src: photo5, alt: 'Nuestra barra' },
    { id: 6, src: photo6, alt: 'Patio exterior' }
];

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setSelectedImg(photos[index]);
        document.body.style.overflow = 'hidden'; // Evita el scroll del body
    };

    const closeModal = () => {
        setSelectedImg(null);
        document.body.style.overflow = 'auto';
    };

    const nextImg = (e) => {
        e.stopPropagation();
        const nextIndex = (currentIndex + 1) % photos.length;
        setCurrentIndex(nextIndex);
        setSelectedImg(photos[nextIndex]);
    };

    const prevImg = (e) => {
        e.stopPropagation();
        const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
        setCurrentIndex(prevIndex);
        setSelectedImg(photos[prevIndex]);
    };

    // Para usar las flechitas del teclado
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImg) return;
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') nextImg(e);
            if (e.key === 'ArrowLeft') prevImg(e);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImg, currentIndex]);

    return (
        <section className="section-gallery">
            <div className="section-content">
                <h2 className="section-title">Conocenos</h2>
                <p className="gallery-subtitle">Mirá dónde sucede la magia y preparate para vivir la experiencia.</p>

                <div className="gallery-grid">
                    {photos.map((photo, index) => (
                        <div
                            key={photo.id}
                            className="gallery-item"
                            onClick={() => openModal(index)}
                        >
                            <img src={photo.src} alt={photo.alt} loading="lazy" />
                            <div className="gallery-overlay">
                                <span>Ampliar</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal / Carrousel (Lightbox) */}
            {selectedImg && (
                <div className="gallery-modal" onClick={closeModal}>
                    <button className="gallery-close" onClick={closeModal}>
                        <X size={32} />
                    </button>

                    <button className="gallery-nav prev" onClick={prevImg}>
                        <ChevronLeft size={40} />
                    </button>

                    <img
                        src={selectedImg.src}
                        alt={selectedImg.alt}
                        className="gallery-modal-img"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button className="gallery-nav next" onClick={nextImg}>
                        <ChevronRight size={40} />
                    </button>

                    <div className="gallery-counter">
                        {currentIndex + 1} / {photos.length}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
