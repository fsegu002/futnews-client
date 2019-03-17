import React from 'react';
import icons from './icons';

const iconsList = icons();

const Icon = ({icon}) => (
  <svg className="icon" viewBox="0 0 1024 1024">
    <path d={iconsList[icon]}></path>
  </svg>
);

export default Icon;