import React from 'react';
import './socials.scss';
import FacebookSvg from '../../assets/icons/facebook.svg';
import InstagramSvg from '../../assets/icons/instagram.svg';
import YoutubeSvg from '../../assets/icons/youtube.svg';
import { ImageProps } from '../../interfaces';
import SocialItem from '../../components/social-item';

const items: Array<ImageProps> = [
   { alt: 'facebook', src: FacebookSvg },
   { alt: 'instagram', src: InstagramSvg },
   { alt: 'youtube', src: YoutubeSvg },
];

const SocialList: React.FC<{ items: Array<ImageProps> }> = ({ items }) => {
   return (
      <div className="socials">
         {items.map((e) => (
            <SocialItem src={e.src} alt={e.alt} key={e.alt} />
         ))}
      </div>
   );
};

function Socials() {
   return <SocialList items={items} />;
}

export default Socials;
