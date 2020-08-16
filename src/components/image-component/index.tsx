import React from 'react';
import { ImageProps } from '../../interfaces';

const ImageComponent = ({ src, alt }: ImageProps) => {
   return <img src={src} alt={alt} />;
};

export default ImageComponent;
