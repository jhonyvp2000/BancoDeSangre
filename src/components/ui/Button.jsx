'use client';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    icon: Icon,
    className = '',
    ...props
}) => {
    return (
        <button
            className={`btn btn-${variant} btn-${size} ${className}`}
            {...props}
        >
            {Icon && <Icon className="btn-icon" size={size === 'sm' ? 16 : 20} />}
            <span>{children}</span>
        </button>
    );
};

export default Button;
