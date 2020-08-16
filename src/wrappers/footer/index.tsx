import React from 'react';
import './footer.scss';
import Socials from '../../sections/socials';
import TextComponent from '../../components/text-component';

function Footer() {
   return (
      <div className="footer">
         <div className="container">
            <Socials />
            <TextComponent text="Copyrigth @2020, Powered by Reason" type="copyright" />
         </div>
      </div>
   );
}

export default Footer;
