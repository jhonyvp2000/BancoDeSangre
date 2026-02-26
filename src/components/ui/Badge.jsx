import './Badge.css';

const Badge = ({ children, variant = 'neutral', className = '' }) => {
    return (
        <span className={`public-badge badge-${variant} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
