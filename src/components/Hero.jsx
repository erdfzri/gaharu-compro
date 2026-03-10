import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section className="hero">
            <div
                className="hero-background"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div className="hero-overlay" />
            <div className="container hero-content">
                <div className="hero-text-content">
                    <span className="hero-subtitle animate-fade-in">PT Gaharu Nusantara</span>
                    <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        Premium Agarwood Supplier from Indonesia
                    </h1>
                    <p className="hero-desc animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        We bring the world's finest and most sustainable agarwood products, straight from the lush plantations of Indonesia to the global market.
                    </p>
                    <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <Link to="/products" className="btn btn-secondary">
                            Discover Our Products <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                        <Link to="/about" className="btn btn-outline hero-btn-outline">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
