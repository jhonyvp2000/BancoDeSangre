import './Card.css';

const Card = ({ children, className = '', hoverEffect = false, ...props }) => {
    return (
        <div
            className={`public-card ${hoverEffect ? 'card-hover' : ''} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
