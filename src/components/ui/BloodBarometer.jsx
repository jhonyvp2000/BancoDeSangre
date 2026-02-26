import './BloodBarometer.css';

const BloodBarometer = () => {
    const stockLevels = [
        { type: 'O-', level: 15, status: 'Crítico' },
        { type: 'O+', level: 85, status: 'Estable' },
        { type: 'A-', level: 30, status: 'Bajo' },
        { type: 'A+', level: 70, status: 'Estable' },
        { type: 'B-', level: 20, status: 'Crítico' },
        { type: 'B+', level: 60, status: 'Estable' },
        { type: 'AB-', level: 40, status: 'Bajo' },
        { type: 'AB+', level: 90, status: 'Óptimo' },
    ];

    const getStatusColor = (level) => {
        if (level <= 25) return 'critical';
        if (level <= 50) return 'low';
        return 'stable';
    };

    return (
        <div className="barometer-container">
            <div className="barometer-header">
                <h3>Nivel de Reservas Actual</h3>
                <p>Los tipos marcados en rojo necesitan donantes urgentemente.</p>
            </div>

            <div className="barometer-grid">
                {stockLevels.map((item) => {
                    const statusClass = getStatusColor(item.level);
                    return (
                        <div key={item.type} className="blood-tube-container group">

                            {/* Etiqueta superior */}
                            <div className="tube-label">
                                <span className="blood-type">{item.type}</span>
                            </div>

                            {/* El Tubo visual */}
                            <div className="blood-tube">
                                <div
                                    className={`blood-fill ${statusClass}`}
                                    style={{ height: `${item.level}%` }}
                                >
                                    {/* Animación de burbujas (CSS) */}
                                    <div className="bubble b1"></div>
                                    <div className="bubble b2"></div>
                                </div>
                            </div>

                            {/* Estado Inferior */}
                            <div className={`tube-status text-${statusClass}`}>
                                {item.level}%
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BloodBarometer;
