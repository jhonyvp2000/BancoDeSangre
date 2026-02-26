import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="public-footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <Link href="/" className="brand-logo footer-logo">
                        <Heart className="logo-icon" fill="currentColor" size={24} />
                        <div className="logo-text-group">
                            <span className="logo-text">Banco de <span>Sangre</span></span>
                            <span className="logo-subtext">OGESS Tarapoto</span>
                        </div>
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
                    <Link href="/requirements">Requisitos Básicos</Link>
                    <Link href="/process">El Proceso</Link>
                    <Link href="/appointments">Agendar Cita</Link>
                    <Link href="/locations">Ubicaciones</Link>
                </div>

                <div className="footer-links-group">
                    <h4>Institucional</h4>
                    <Link href="#">Sobre Nosotros</Link>
                    <Link href="/campaigns">Campañas Móviles</Link>
                    <Link href="#">Transparencia</Link>
                    <Link href="#">Contacto</Link>
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
