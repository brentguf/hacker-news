import React from 'react';
import { string, func, object } from 'prop-types';

TableHeader.propTypes = {
  className: string.isRequired,
  onSelect: func.isRequired,
  style: object.isRequired,
  content: string.isRequired
}

function TableHeader(props) {
  const { className,
    onSelect,
    style,
    content } = props;

  return (
    <span
      onClick={onSelect}
      className={className}
      style={style}
    >{content}</span>
  );
}

export default TableHeader;