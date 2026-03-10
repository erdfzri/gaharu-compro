import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { Leaf, Award, Globe, ShieldCheck } from 'lucide-react';
import './Home.css';

// Import images
import prod1 from '../assets/product-1.png';
import prod2 from '../assets/product-2.png';
import prod3 from '../assets/product-3.png';

const Home = () => {
    const products = [
        {
            id: 1,
            image: prod1,
            title: "Premium Agarwood",
            category: "Raw Material",
            description: "Carefully selected and naturally dark resinous agarwood pieces, suitable for high-end collections."
        },
        {
            id: 2,
            image: prod2,
            title: "Agarwood Oil",
            category: "Essential Oil",
            description: "100% pure distilled Oud oil with deep, rich, and long-lasting aroma."
        },
        {
            id: 3,
            image: prod3,
            title: "Agarwood Derivatives",
            category: "Processed",
            description: "Premium incense sticks, powder, and other crafted materials for relaxation and spiritual uses."
        }
    ];

    const stats = [
        { icon: <Leaf size={32} />, value: "50+", label: "Hectares of Plantation" },
        { icon: <Award size={32} />, value: "Premium", label: "Quality Grade" },
        { icon: <Globe size={32} />, value: "15+", label: "Export Destinations" },
        { icon: <ShieldCheck size={32} />, value: "100%", label: "Sustainable Sourced" }
    ];

    return (
        <div className="home-page">
            <Hero />

            {/* About Section Preview */}
            <section className="section bg-cream">
                <div className="container about-preview">
                    <div className="about-preview-text">
                        <h2 className="section-title text-left">The Essence of Nature</h2>
                        <p className="lead-text">
                            PT Gaharu Nusantara is dedicated to the sustainable cultivation, meticulous processing, and global trading of premium agarwood.
                        </p>
                        <p>
                            With our deep roots in Indonesian forestry, we ensure every piece of agarwood we produce meets the highest standards of international luxury. Our commitment to sustainability preserves this magnificent species for future generations while delivering its mystical aroma to the world.
                        </p>
                        <Link to="/about" className="btn btn-primary mt-4">Discover Our Story</Link>
                    </div>
                    <div className="about-preview-stats">
                        {stats.map((stat, i) => (
                            <div className="stat-card" key={i}>
                                <div className="stat-icon">{stat.icon}</div>
                                <h3 className="stat-value">{stat.value}</h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Our Premium Selection</h2>
                    <div className="products-grid">
                        {products.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <Link to="/products" className="btn btn-outline">View All Products</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
