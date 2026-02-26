import { ClipboardEdit, Activity, HeartHandshake, Coffee } from 'lucide-react';
import './ProcessTimeline.css';

const ProcessTimeline = () => {
    const steps = [
        {
            icon: ClipboardEdit,
            title: '1. Registro Histórico',
            time: '5 - 10 mins',
            desc: 'Al llegar, un miembro de nuestro equipo te pedirá tu identificación oficial y llenaremos un breve cuestionario confidencial sobre tu salud y estilo de vida.',
            color: 'blue'
        },
        {
            icon: Activity,
            title: '2. Evaluación Médica',
            time: '10 mins',
            desc: 'Pasarás a una sala privada donde mediremos tu presión arterial, temperatura y hemoglobina (con un pequeño pinchazo en el dedo) para asegurar que donar sea 100% seguro para ti.',
            color: 'yellow'
        },
        {
            icon: HeartHandshake,
            title: '3. La Donación',
            time: '8 - 12 mins',
            desc: 'Te acomodarás en una silla reclinable. El proceso de extracción dura menos de lo que imaginas y usa material estéril, nuevo y de un solo uso.',
            color: 'red'
        },
        {
            icon: Coffee,
            title: '4. Reposo y Refrigerio',
            time: '15 mins',
            desc: '¡Lo lograste! Te ofreceremos bebidas y snacks para reponer energía mientras reposas unos minutos antes de continuar con tu día.',
            color: 'green'
        }
    ];

    return (
        <div className="process-page">
            <section className="process-hero">
                <div className="container text-center animate-fade-up">
                    <h1 className="page-title">El camino a salvar vidas</h1>
                    <p className="page-subtitle text-secondary mx-auto">
                        Donar sangre es un proceso sencillo, seguro y sorprendentemente rápido.
                        Quitarte el miedo de lo desconocido es nuestro primer paso.
                    </p>
                </div>
            </section>

            <section className="timeline-section container">
                <div className="timeline">
                    {steps.map((step, idx) => (
                        <div key={idx} className={`timeline-item animate-fade-up`} style={{ animationDelay: `${idx * 0.2}s` }}>

                            {/* Linea conectora central */}
                            <div className="timeline-line"></div>

                            {/* Contenido (Alternado izquierda/derecha) */}
                            <div className={`timeline-content ${idx % 2 === 0 ? 'left' : 'right'}`}>
                                <div className={`timeline-card border-glow-${step.color}`}>
                                    <div className="card-header">
                                        <div className={`icon-circle bg-${step.color}`}>
                                            <step.icon size={28} />
                                        </div>
                                        <div className="time-badge">{step.time}</div>
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </div>

                            {/* Punto Central */}
                            <div className={`timeline-dot dot-${step.color}`}></div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProcessTimeline;
