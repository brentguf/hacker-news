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

  return (
    <div style={style}>
      <span
        onClick={onSelect}
        className={className}
      >{content}</span>
      { 
        isSelected && !shouldReverse && <i className="fa fa-caret-down"></i>
      }
      {
        isSelected && shouldReverse && <i className="fa fa-caret-up"></i>
      }

    </div>
  );
}

export default TableHeaderItem;