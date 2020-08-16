import React from 'react';
import { IconProps } from '../../interfaces';

const Icon = ({ src, alt }: IconProps) => {
   return <img src={src} alt={alt} />;
};

export default Icon;
