'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, AlertCircle, RefreshCw } from 'lucide-react';
import Button from '../../components/ui/Button';
import './Requirements.css';

const Requirements = () => {
    const requirementsData = [
        { text: 'Tengo entre 18 y 65 años de edad.', key: 'age' },
        { text: 'Peso más de 50 kg (110 lbs).', key: 'weight' },
        { text: 'Gozar de buena salud general hoy.', key: 'health' },
        { text: 'No haberme realizado tatuajes ni piercings en los últimos 6 meses.', key: 'tattoo' },
        { text: 'No haberme sometido a cirugías o endoscopias en los últimos 6 meses.', key: 'surgery' },
    ];

    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (key, val) => {
        setAnswers(prev => ({ ...prev, [key]: val }));
    };

    const calculateResult = () => {
        setShowResult(true);
    };

    const isEligible = Object.values(answers).every(val => val === true) && Object.keys(answers).length === requirementsData.length;
    const isComplete = Object.keys(answers).length === requirementsData.length;

    const resetTest = () => {
        setAnswers({});
        setShowResult(false);
    };

    return (
        <div className="req-page">
            {/* 1. Header Hero Light */}
            <section className="req-hero bg-secondary">
                <div className="container text-center animate-fade-up">
                    <h1 className="page-title">¿Puedo donar sangre hoy?</h1>
                    <p className="page-subtitle">Descúbrelo en 1 minuto. Responde este cuestionario anónimo de pre-evaluación básica.</p>
                </div>
            </section>

            {/* 2. Interactive Test Mode */}
            <section className="test-section container">
                <div className="test-card">
                    {!showResult ? (
                        <div className="quiz-container">
                            <div className="quiz-header">
                                <h3>Cuestionario Rápido</h3>
                                <span className="quiz-progress">{Object.keys(answers).length} / {requirementsData.length}</span>
                            </div>

                            <ul className="quiz-list">
                                {requirementsData.map((req, idx) => (
                                    <li key={idx} className={`quiz-item ${answers[req.key] !== undefined ? 'answered' : ''}`}>
                                        <p>{req.text}</p>
                                        <div className="quiz-actions">
                                            <button
                                                className={`quiz-btn btn-yes ${answers[req.key] === true ? 'selected-yes' : ''}`}
                                                onClick={() => handleAnswer(req.key, true)}
                                            >
                                                Sí
                                            </button>
                                            <button
                                                className={`quiz-btn btn-no ${answers[req.key] === false ? 'selected-no' : ''}`}
                                                onClick={() => handleAnswer(req.key, false)}
                                            >
                                                No
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="quiz-footer">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    disabled={!isComplete}
                                    onClick={calculateResult}
                                >
                                    Ver Resultados
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className={`result-container text-center animate-fade-up`}>
                            {isEligible ? (
                                <>
                                    <div className="result-icon-box success-gl">
                                        <CheckCircle2 size={64} className="text-success" />
                                    </div>
                                    <h2 className="result-title text-success">¡Buenas Noticias! Eres Apt@</h2>
                                    <p className="result-desc">Según tus respuestas, cumples con los requisitos básicos para donar sangre hoy.</p>
                                    <p className="result-disclaimer text-sm text-secondary mt-2">
                                        *Recuerda que estas son preguntas referenciales. La evaluación final la realizará nuestro equipo médico en el centro.
                                    </p>
                                    <div className="result-actions mt-4">
                                        <Button variant="primary" size="lg" onClick={() => window.location.href = '/appointments'}>Agendar Cita Ahora</Button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="result-icon-box warning-gl">
                                        <AlertCircle size={64} className="text-warning" />
                                    </div>
                                    <h2 className="result-title text-warning">Por ahora, quizás debas esperar</h2>
                                    <p className="result-desc">Algunos de los requisitos básicos no se cumplen en este momento. La mayoría de inhabilitaciones son temporales.</p>
                                    <p className="result-disclaimer text-sm text-secondary mt-2">
                                        Si tienes dudas específicas sobre un tratamiento o enfermedad, contáctanos.
                                    </p>
                                </>
                            )}

                            <button className="reset-test-btn mt-4" onClick={resetTest}>
                                <RefreshCw size={16} /> Volver a intentar
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* 3. Mitos Section (Cards) */}
            <section className="myths-section">
                <div className="container">
                    <h2 className="text-center mb-3">Mitos Comunes sobre la Donación</h2>

                    <div className="myths-grid">
                        <div className="myth-card">
                            <div className="myth-head"><XCircle size={20} className="text-accent-red" /> <strong>Mito:</strong> "Engordaré si dono sangre"</div>
                            <div className="myth-body"><CheckCircle2 size={20} className="text-success" /> <strong>Realidad:</strong> Falso. Donar sangre no altera tu peso corporal. Los líquidos se recuperan bebiendo agua.</div>
                        </div>

                        <div className="myth-card">
                            <div className="myth-head"><XCircle size={20} className="text-accent-red" /> <strong>Mito:</strong> "Me voy a debilitar mucho"</div>
                            <div className="myth-body"><CheckCircle2 size={20} className="text-success" /> <strong>Realidad:</strong> Solo se extrae el 10% de tu sangre. El cuerpo se repone en 24h. No afectará tu día a día.</div>
                        </div>

                        <div className="myth-card">
                            <div className="myth-head"><XCircle size={20} className="text-accent-red" /> <strong>Mito:</strong> "Debo ir en ayuno total"</div>
                            <div className="myth-body"><CheckCircle2 size={20} className="text-success" /> <strong>Realidad:</strong> A diferencia de los exámenes médicos, se recomienda tomar un desayuno ligero y beber abundantes líquidos antes.</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Requirements;
