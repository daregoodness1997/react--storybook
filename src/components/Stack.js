import React from 'react';
import PropTypes from 'prop-types';

const Stack = ({ spacing = 2, wrap = false, direction = 'row', children }) => {
  const style = {
    display: 'flex',
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    flexDirection: direction,
  };
  return <div style={style}>{children}</div>;
};

Stack.propTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(['row', 'column']),
};

export default Stack;
