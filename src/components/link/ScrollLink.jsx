import React from 'react';


const ScrollLink = ({ to, name, className, icon }) => {
  return (
    <a href={to} className={className}>
      {name}
      {icon && icon}
    </a>
  );
};

export default ScrollLink;
