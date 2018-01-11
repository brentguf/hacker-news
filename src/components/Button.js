import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    children,
    onClick
  } = props;

  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  
}

export default Button;