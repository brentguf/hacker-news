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
  onClick: PropTypes.func.isRequired,
  className: propTypes.string,
  children: propTypes.node.isRequired
}

export default Button;