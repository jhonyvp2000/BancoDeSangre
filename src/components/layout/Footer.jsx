import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="public-footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <Link to="/" className="brand-logo footer-logo">
                        <Heart className="logo-icon" fill="currentColor" size={24} />
                        <span className="logo-text">Regala<span>Vida</span></span>
                    </Link>
                    <p className="footer-desc">
                        Conectando héroes anónimos con personas que los necesitan.
                        El Banco de Sangre Regional trabaja 24/7 para garantizar la salud de nuestra comunidad.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><Facebook size={20} /></a>
                        <a href="#" className="social-icon"><Instagram size={20} /></a>
                        <a href="#" className="social-icon"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-links-group">
                    <h4>Donantes</h4>
                    <Link to="/requirements">Requisitos Básicos</Link>
                    <Link to="/process">El Proceso</Link>
                    <Link to="/appointments">Agendar Cita</Link>
                    <Link to="/locations">Ubicaciones</Link>
                </div>

                <div className="footer-links-group">
                    <h4>Institucional</h4>
                    <Link to="#">Sobre Nosotros</Link>
                    <Link to="/campaigns">Campañas Móviles</Link>
                    <Link to="#">Transparencia</Link>
                    <Link to="#">Contacto</Link>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container text-center text-sm">
                    <p>&copy; 2026 Banco de Sangre Regional. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
