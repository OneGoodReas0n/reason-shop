import React from 'react';
import './text-component.scss';

const TextComponent: React.FC<{ text: string }> = ({ text }) => {
   return <p className="text-component">{text}</p>;
};

export default TextComponent;
