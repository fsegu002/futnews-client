import React from 'react';
import icons from './icons';
import PropTypes from 'prop-types'

const iconsList = icons();

const Icon = ({icon, fill, width, height}) => (
  <svg  className="icon" 
        fill={(fill) ? fill : '#666'}
        viewBox="0 0 1024 1024"
        width={width} 
        height={height}>
    <path d={iconsList[icon]}></path>
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
}

export default Icon;