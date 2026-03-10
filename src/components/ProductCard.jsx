import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ id, image, title, category, description }) => {
    return (
        <div className="product-card">
            <div className="product-image-wrap">
                <img src={image} alt={title} className="product-image" />
                <div className="product-category">{category}</div>
            </div>
            <div className="product-content">
                <h3 className="product-title">{title}</h3>
                <p className="product-desc">{description}</p>
                <Link to={`/products`} className="product-link">
                    Explore Product <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
