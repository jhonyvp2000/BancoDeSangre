'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Heart, ChevronDown, MapPin, CalendarHeart, ClipboardCheck, Info, ArrowRight, Menu, X } from 'lucide-react';
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
                            <span>Quiero Donar</span>
                            <ChevronDown size={14} className={`dropdown-icon ${megaMenuOpen ? 'rotated' : ''}`} />

                            {/* MEGA MENU PANEL */}
                            <div className={`mega-menu ${megaMenuOpen ? 'show' : ''}`}>
                                <div className="mega-menu-content">

                                    {/* Columna 1 */}
                                    <div className="mega-column">
                                        <h3 className="mega-title">Empieza Aquí</h3>
                                        <Link href="/requirements" className="mega-link">
                                            <div className="mega-icon-box bg-red"><ClipboardCheck size={20} /></div>
                                            <div className="mega-link-text">
                                                <h4>Requisitos para donar</h4>
                                                <p>Descubre qué necesitas y quiénes pueden donar hoy.</p>
                                            </div>
                                        </Link>
                                        <Link href="/process" className="mega-link">
                                            <div className="mega-icon-box bg-blue"><Info size={20} /></div>
                                            <div className="mega-link-text">
                                                <h4>El proceso paso a paso</h4>
                                                <p>Conoce qué sucederá desde tu llegada hasta tu descanso.</p>
                                            </div>
                                        </Link>
                                    </div>

                                    {/* Columna 2 */}
                                    <div className="mega-column">
                                        <h3 className="mega-title">Acción inmediata</h3>
                                        <Link href="/appointments" className="mega-link">
                                            <div className="mega-icon-box bg-yellow"><CalendarHeart size={20} /></div>
                                            <div className="mega-link-text">
                                                <h4>Reserva tu cita</h4>
                                                <p>Ahorra tiempo programando tu visita online.</p>
                                            </div>
                                        </Link>
                                        <Link href="/locations" className="mega-link">
                                            <div className="mega-icon-box bg-green"><MapPin size={20} /></div>
                                            <div className="mega-link-text">
                                                <h4>Puntos de donación</h4>
                                                <p>Encuentra el banco de sangre o unidad móvil más cercana.</p>
                                            </div>
                                        </Link>
                                    </div>

                                    {/* Columna 3 (Destacado) */}
                                    <div className="mega-column highlight-col">
                                        <div className="urgency-card">
                                            <span className="urgency-badge">Alerta de Stock</span>
                                            <h4>Necesitamos sangre O-</h4>
                                            <p>Las reservas del grupo universal están críticas. Si eres O-, te necesitamos urgentemente.</p>
                                            <Link href="/appointments" className="text-link">Agendar ahora <ArrowRight size={14} /></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* FIN MEGA MENU */}
                        </div>

                        <Link href="/campaigns" className={`nav-item ${pathname === '/campaigns' ? 'active' : ''}`}>
                            Campañas
                        </Link>
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
