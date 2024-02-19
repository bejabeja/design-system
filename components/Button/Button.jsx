import React from 'react';
import './Button.css';

const Button = ({label, primary, size, backgroundColor, ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;