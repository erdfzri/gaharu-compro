import { Mail, Phone, MapPin, Send } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';
import './Contact.css';

const Contact = () => {
    return (
        <div className="page-wrapper animate-fade-in">
            <div className="page-header" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-subtitle">We would love to hear from you. Reach out for business inquiries or partnerships.</p>
                </div>
            </div>

            <section className="section bg-cream">
                <div className="container">
                    <div className="contact-grid">

                        <div className="contact-info">
                            <h2 className="section-title" style={{ textAlign: 'left' }}>Get In Touch</h2>
                            <p className="contact-desc">
                                Whether you're looking for wholesale agarwood supplies, customized oud distillation, or exploring investment opportunities, our team is ready to assist you.
                            </p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-icon-wrapper">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="contact-item-content">
                                        <h4>Head Office</h4>
                                        <p>Jl. Cendana No. 12, Jakarta Selatan<br />Indonesia 12190</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon-wrapper">
                                        <Phone size={24} />
                                    </div>
                                    <div className="contact-item-content">
                                        <h4>Phone</h4>
                                        <p>+62 812 3456 7890<br />+62 21 9876 5432</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon-wrapper">
                                        <Mail size={24} />
                                    </div>
                                    <div className="contact-item-content">
                                        <h4>Email</h4>
                                        <p>info@gaharunusantara.com<br />sales@gaharunusantara.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <h3 className="form-title">Send us a Message</h3>

                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" placeholder="John Doe" className="form-control" />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" placeholder="john@example.com" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" placeholder="+62..." className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" placeholder="Inquiry about..." className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows="5" placeholder="How can we help you?" className="form-control"></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-submit">
                                    Send Message <Send size={18} style={{ marginLeft: '8px' }} />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Section */}
            <div className="map-container">
                <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.03158957863!2d106.74549925244516!3d-6.284242940263677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a233ae5623%3A0x6b16d1ba5b10d0f!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta%2C%20Indonesia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
