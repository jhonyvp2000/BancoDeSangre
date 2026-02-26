import { ArrowRight, HeartPulse, Sparkles, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import BloodBarometer from '../components/ui/BloodBarometer';
import Button from '../components/ui/Button';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* 1. HERO SECTION */}
            <section className="hero-section">
                <div className="container hero-container animate-fade-up">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <Sparkles size={16} className="text-accent-red" />
                            <span>Salva 3 vidas en 20 minutos</span>
                        </div>

                        <h1 className="hero-title">
                            No necesitas súper poderes para ser <span className="text-gradient">Héroe</span>.
                        </h1>

                        <p className="hero-subtitle">
                            Los hospitales de tu región dependen de donantes voluntarios como tú para atender emergencias, cirugías y pacientes oncológicos cada día.
                        </p>

                        <div className="hero-actions">
                            <Button variant="primary" size="lg" icon={HeartPulse} className="hero-btn shadow-glow" onClick={() => window.location.href = '/requirements'}>
                                Quiero Ser Donante
                            </Button>
                            <Link to="/process" className="btn-text-link">
                                Conoce el proceso <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className="hero-visual">
                        {/* Imagen o ilustración sugerente del tema + Glass Card */}
                        <div className="image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=800&auto=format&fit=crop"
                                alt="Voluntaria donando sangre sonriente"
                                className="hero-image"
                            />

                            {/* Floating Info Card */}
                            <div className="floating-stat-card glass-panel">
                                <div className="icon-box"><Activity size={24} color="var(--accent-red)" /></div>
                                <div>
                                    <h4>1 Donación</h4>
                                    <p>= Plasma, Plaquetas y Glóbulos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. URGENCY BAROMETER SECTION */}
            <section className="urgency-section">
                <div className="container">
                    <div className="section-head text-center">
                        <h2>Niveles de Sangre Hoy</h2>
                        <p className="subtitle">La sangre tiene fecha de caducidad. Nuestro inventario necesita renovarse constantemente.</p>
                    </div>

                    <BloodBarometer />

                    <div className="barometer-footer-action">
                        <p>¿No sabes tu tipo de sangre? <br /> <strong>No te preocupes, nosotros lo averiguamos por ti durante la donación.</strong></p>
                        <Link to="/appointments" className="link-arrow">Ver Puntos de Donación <ArrowRight size={16} /></Link>
                    </div>
                </div>
            </section>

            {/* 3. INFO IMPACT SECTION (Simple) */}
            <section className="impact-section bg-secondary">
                <div className="container impact-grid">
                    <div className="impact-text">
                        <h2>Por qué donar hoy es vital</h2>
                        <ul className="impact-list">
                            <li><strong>1 de cada 10</strong> personas admitidas en un hospital necesita sangre.</li>
                            <li>La sangre <strong>no puede ser fabricada</strong> artificialmente, sólo se puede obtener de donantes generosos.</li>
                            <li>Mejora tu <strong>salud cardiovascular</strong> y renueva tus células sanguíneas.</li>
                        </ul>
                    </div>
                    <div className="impact-cta-card">
                        <h3>¿Listo para hacer la diferencia?</h3>
                        <p>Revisa si cumples con los requisitos básicos en 1 minuto.</p>
                        <Button variant="outline" className="w-full mt-4" onClick={() => window.location.href = '/requirements'}>
                            Ver Requisitos
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
