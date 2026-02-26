'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Heart, ChevronDown, MapPin, CalendarHeart, ClipboardCheck, Info, ArrowRight, Menu, X, HeartPulse, Building2, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';
import './PublicNavbar.css';

const PublicNavbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    let timeoutId;

    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setMegaMenuOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setMegaMenuOpen(false);
        }, 150);
    };

    return (
        <header className={`public-nav ${scrolled ? 'nav-scrolled' : ''}`}>
            <div className="container nav-container">
                {/* LOGO */}
                <Link href="/" className="brand-logo">
                    <div className="logo-icon-wrapper">
                        <Heart className="logo-icon" fill="currentColor" size={24} />
                    </div>
                    <div className="logo-text-group">
                        <span className="logo-text">Banco de <span>Sangre</span></span>
                        <span className="logo-subtext">OGESS Tarapoto</span>
                    </div>
                </Link>

                {/* MOBILE MENU TRIGGER */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* WRAPPER PARA RESPONSIVE EN MOVIL */}
                <div className={`nav-menu-wrapper ${mobileMenuOpen ? 'open' : ''}`}>
                    {/* ENLACES CENTRALES */}
                    <nav className="nav-links">
                        <Link href="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                            Inicio
                        </Link>

                        {/* MEGA MENU TRIGGER */}
                        <div
                            className="nav-item has-dropdown"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span>Menú Principal</span>
                            <ChevronDown size={14} className={`dropdown-icon ${megaMenuOpen ? 'rotated' : ''}`} />

                            {/* MEGA MENU PANEL */}
                            <div className={`mega-menu ${megaMenuOpen ? 'show' : ''}`}>
                                <div className="mega-menu-content">

                                    {/* Columna 1 */}
                                    <div className="mega-column">
                                        <h3 className="mega-title">Donación de Sangre</h3>
                                        <Link href="/requirements" className="mega-link" onClick={() => setMobileMenuOpen(false)}>
                                            <div className="mega-icon-box bg-red"><ClipboardCheck size={20} /></div>
                                            <div className="mega-link-text">
                                                <h4>Requisitos</h4>
                                                <p>Descubre qué necesitas para donar.</p>
                                            </div>
                                        </Link>
                                        <Link href="/process" className="mega-link" onClick={() => setMobileMenuOpen(false)}>
                                            <div className="mega-icon-box bg-blue"><Info size={20} /></div>
                                            <div className="mega-link-text">
                                                <h4>El Proceso</h4>
                                                <p>Conoce los pasos de la donación.</p>
                                            </div>
                                        </Link>
                                        <Link href="/campaigns" className="mega-link" onClick={() => setMobileMenuOpen(false)}>
                                            <div className="mega-icon-box bg-yellow"><HeartPulse size={20} /></div>
                                            <div className="mega-link-text">
                                                <h4>Campañas</h4>
                                                <p>Únete a nuestras colectas móviles.</p>
                                            </div>
                                        </Link>
                                    </div>

                                    {/* Columna 2 */}
                                    <div className="mega-column">
                                        <h3 className="mega-title">Atención al Usuario</h3>
                                        <Link href="/appointments" className="mega-link" onClick={() => setMobileMenuOpen(false)}>
                                            <div className="mega-icon-box bg-green"><CalendarHeart size={20} /></div>
                                            <div className="mega-link-text">
                                                <h4>Reservar Cita</h4>
                                                <p>Programa tu donación sin colas.</p>
                                            </div>
                                        </Link>
                                        <Link href="/locations" className="mega-link" onClick={() => setMobileMenuOpen(false)}>
                                            <div className="mega-icon-box bg-red"><MapPin size={20} /></div>
                                            <div className="mega-link-text">
                                                <h4>Ubicaciones</h4>
                                                <p>Encuentra tu banco de sangre más cercano.</p>
                                            </div>
                                        </Link>
                                    </div>

                                    {/* Columna 3 */}
                                    <div className="mega-column">
                                        <h3 className="mega-title">Institucional</h3>
                                        <Link href="#" className="mega-link" onClick={() => setMobileMenuOpen(false)}>
                                            <div className="mega-icon-box bg-blue"><Building2 size={20} /></div>
                                            <div className="mega-link-text">
                                                <h4>Sobre Nosotros</h4>
                                                <p>Conoce la OGESS Tarapoto.</p>
                                            </div>
                                        </Link>
                                        <Link href="#" className="mega-link" onClick={() => setMobileMenuOpen(false)}>
                                            <div className="mega-icon-box bg-yellow"><ShieldCheck size={20} /></div>
                                            <div className="mega-link-text">
                                                <h4>Transparencia</h4>
                                                <p>Gestión y resultados públicos.</p>
                                            </div>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                            {/* FIN MEGA MENU */}
                        </div>
                    </nav>

                    <div className="nav-actions">
                        <span className="contact-phone">📞 (042) 52-2020</span>
                        <Button variant="primary" icon={CalendarHeart} onClick={() => router.push('/appointments')}>
                            Agendar Cita
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PublicNavbar;
