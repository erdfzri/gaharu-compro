import ProductCard from '../components/ProductCard';
import { Leaf, Award, ShieldCheck } from 'lucide-react';
import prod1 from '../assets/product-1.png';
import prod2 from '../assets/product-2.png';
import prod3 from '../assets/product-3.png';
import gallery2 from '../assets/gallery-2.png';
import './Home.css';

const Products = () => {
    const products = [
        {
            id: 1,
            image: prod1,
            title: "Premium Agarwood Chips",
            category: "Raw Wood",
            description: "Carefully selected and naturally dark resinous agarwood pieces, suitable for high-end collections, burning, and display."
        },
        {
            id: 2,
            image: prod2,
            title: "Pure Agarwood Oil",
            category: "Essential Oil",
            description: "100% pure distilled Oud oil. Aged to perfection, it features a deep, rich, and long-lasting earthy aroma."
        },
        {
            id: 3,
            image: prod3,
            title: "Luxury Incense Sticks",
            category: "Processed",
            description: "Premium incense sticks formulated with high-quality agarwood powder for deep relaxation, meditation, and room scenting."
        },
        {
            id: 4,
            image: prod1, // Reusing image for demo
            title: "Agarwood Blocks",
            category: "Raw Wood",
            description: "Larger blocks of resinous agarwood, perfect for carving or producing premium grade chips and oils."
        },
        {
            id: 5,
            image: prod3,
            title: "Agarwood Powder",
            category: "Processed",
            description: "Finely ground agarwood powder from selected chunks. Ideal for making customized incense, bakhoor, or medicinal uses."
        },
        {
            id: 6,
            image: prod2,
            title: "Premium Hydrosol",
            category: "Essential Oil",
            description: "Agarwood floral water, a byproduct of the distillation process, offering a lighter, refreshing woody scent."
        }
    ];

    return (
        <div className="page-wrapper animate-fade-in">
            <div className="page-header" style={{ backgroundImage: `url(${gallery2})` }}>
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1 className="page-title">Our Products</h1>
                    <p className="page-subtitle">Nature's finest treasures, sustainably sourced and meticulously processed.</p>
                </div>
            </div>

            <section className="section bg-cream">
                <div className="container">
                    <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <h2 className="section-title">Quality Assurance</h2>
                        <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem' }}>
                            Every product from PT Gaharu Nusantara undergoes rigorous quality control to ensure you receive only the most authentic and premium agarwood.
                        </p>
                    </div>

                    <div className="about-preview-stats">
                        <div className="stat-card">
                            <div className="stat-icon"><ShieldCheck size={32} /></div>
                            <h4>100% Authentic</h4>
                            <p className="stat-label mt-2">Certified genuine Aquilaria resin</p>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon"><Award size={32} /></div>
                            <h4>Premium Grade</h4>
                            <p className="stat-label mt-2">Export-quality classification</p>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon"><Leaf size={32} /></div>
                            <h4>Chemical Free</h4>
                            <p className="stat-label mt-2">Naturally inoculated & processed</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="products-grid">
                        {products.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
