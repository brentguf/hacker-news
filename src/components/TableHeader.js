import React from 'react';

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