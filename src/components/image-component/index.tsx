import React from 'react';
import { ImageProps } from '../../interfaces';

const Icon = ({ src, alt }: ImageProps) => {
   return <img src={src} alt={alt} />;
};

export default Icon;
