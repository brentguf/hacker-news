import React from 'react';
import { string, func, object } from 'prop-types';

TableHeaderItem.propTypes = {
  className: string.isRequired,
  onSelect: func.isRequired,
  style: object.isRequired,
  content: string.isRequired
}

function TableHeaderItem(props) {
  const { className,
    onSelect,
    style,
    content,
    isSelected,
    shouldReverse } = props;
  
  let caret = null;

  if (isSelected) {
    caret = shouldReverse ? 
      <i className="fa fa-caret-up"></i> : <i className="fa fa-caret-down"></i>
  } 

  return (
    <div style={style}>
      <span
        onClick={onSelect}
        className={className}
      >{content}</span>
      { caret }
    </div>
  );
}

export default TableHeaderItem;