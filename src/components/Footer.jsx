import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, TreePine } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col brand-col">
                        <Link to="/" className="footer-logo">
                            <TreePine size={32} />
                            <div>
                                <span>PT GAHARU</span>
                                <span className="footer-subtext">Nusantara</span>
                            </div>
                        </Link>
                        <p className="footer-desc">
                            Premium agarwood supplier from Indonesia. Dedicated to sustainable cultivation and trading of high-quality agarwood products for global markets.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" className="social-link" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" className="social-link" aria-label="Facebook"><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/products">Our Products</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Products</h4>
                        <ul className="footer-links">
                            <li><Link to="/products#premium-wood">Premium Agarwood</Link></li>
                            <li><Link to="/products#oil">Agarwood Oil</Link></li>
                            <li><Link to="/products#derivatives">Agarwood Derivatives</Link></li>
                            <li><Link to="/products#incense">Incense Sticks</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Contact Info</h4>
                        <ul className="footer-contact">
                            <li>
                                <MapPin size={18} className="contact-icon" />
                                <span>Jl. Cendana No. 12, Jakarta Selatan, Indonesia 12190</span>
                            </li>
                            <li>
                                <Phone size={18} className="contact-icon" />
                                <span>+62 812 3456 7890</span>
                            </li>
                            <li>
                                <Mail size={18} className="contact-icon" />
                                <span>info@gaharunusantara.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} PT Gaharu Nusantara. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
