import gallery1 from '../assets/gallery-1.png';
import './About.css';

const About = () => {
    return (
        <div className="page-wrapper animate-fade-in">
            {/* Page Header */}
            <div className="page-header" style={{ backgroundImage: `url(${gallery1})` }}>
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1 className="page-title">About Us</h1>
                    <p className="page-subtitle">The story of PT Gaharu Nusantara and our commitment to excellence.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image-col">
                            <img src={gallery1} alt="Agarwood Plantation" className="about-main-img" />
                            <div className="experience-badge">
                                <span className="exp-years">20+</span>
                                <span className="exp-text">Years of<br />Excellence</span>
                            </div>
                        </div>

                        <div className="about-text-col">
                            <h2 className="company-name">PT Gaharu Nusantara</h2>
                            <h3 className="section-subtitle">Preserving Nature's Most Precious Aroma</h3>

                            <div className="about-content">
                                <p>
                                    Founded in the heart of Indonesia's fertile lands, PT Gaharu Nusantara has grown into a premier supplier of high-grade agarwood (Aquilaria spp.). We specialize in the ethical cultivation, meticulous processing, and global distribution of agarwood commodities.
                                </p>
                                <p>
                                    Our journey began with a profound respect for nature and a vision to share Indonesia's finest olfactory treasures with the world. Today, we manage over 50 hectares of sustainably managed plantations, employing local farmers and combining traditional wisdom with modern silviculture techniques.
                                </p>

                                <div className="mission-vision-box">
                                    <div className="mv-item">
                                        <h4>Our Vision</h4>
                                        <p>To be the world's most trusted and sustainable provider of premium agarwood products, setting the gold standard for quality and ethical practices in the industry.</p>
                                    </div>
                                    <div className="mv-item">
                                        <h4>Our Mission</h4>
                                        <ul>
                                            <li>Produce and supply the highest quality agarwood to global markets.</li>
                                            <li>Promote sustainable and eco-friendly agarwood farming methods.</li>
                                            <li>Empower local communities through fair trade and employment opportunities.</li>
                                            <li>Continuous innovation in essential oil distillation and wood processing.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section bg-cream">
                <div className="container">
                    <h2 className="section-title">The Cultivation Process</h2>
                    <div className="process-steps">
                        <div className="step-card">
                            <div className="step-number">01</div>
                            <h4>Sustainable Planting</h4>
                            <p>We nurture thousands of Aquilaria trees in ideal ecological conditions, ensuring healthy growth without chemical interference.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">02</div>
                            <h4>Natural Inoculation</h4>
                            <p>Our trees undergo a natural stress and recovery process, triggering the production of the dark, aromatic resin that makes agarwood so valuable.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">03</div>
                            <h4>Careful Harvesting</h4>
                            <p>We selectively harvest only mature resinous wood. Our skilled artisans meticulously clean and grade the wood.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">04</div>
                            <h4>Global Distribution</h4>
                            <p>The premium agarwood is then packaged and exported, bringing the authentic scent of Indonesian heritage to the world.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
