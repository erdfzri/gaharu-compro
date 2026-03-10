import gallery1 from '../assets/gallery-1.png';
import gallery2 from '../assets/gallery-2.png';
import prod1 from '../assets/product-1.png';
import prod2 from '../assets/product-2.png';
import prod3 from '../assets/product-3.png';
import heroBg from '../assets/hero-bg.png';
import './Gallery.css';

const Gallery = () => {
    const images = [
        { src: heroBg, alt: "Plantation Landscape", category: "Plantation" },
        { src: prod1, alt: "Premium Agarwood", category: "Product" },
        { src: gallery2, alt: "Processing Facility", category: "Production" },
        { src: prod2, alt: "Oud Extraction", category: "Product" },
        { src: gallery1, alt: "Sustainable Farming", category: "Plantation" },
        { src: prod3, alt: "Incense Making", category: "Product" }
    ];

    return (
        <div className="page-wrapper animate-fade-in">
            <div className="page-header" style={{ backgroundImage: `url(${gallery1})` }}>
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1 className="page-title">Image Gallery</h1>
                    <p className="page-subtitle">A visual journey through our plantations, facilities, and products.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="gallery-grid">
                        {images.map((img, index) => (
                            <div className="gallery-item" key={index}>
                                <div className="gallery-image-wrapper">
                                    <img src={img.src} alt={img.alt} className="gallery-image" />
                                    <div className="gallery-overlay">
                                        <span className="gallery-category">{img.category}</span>
                                        <h4 className="gallery-title">{img.alt}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
