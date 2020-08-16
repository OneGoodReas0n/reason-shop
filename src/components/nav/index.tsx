import React from 'react';
import NavItem from '../nav-item';

const items: string[] = ['Clothes', 'Shoes', 'Faqs', 'Contact'];

const NavList: React.FC<{ items: string[] }> = ({ items }) => {
   return (
      <ul>
         {items.map((e) => (
            <NavItem text={e} key={e} />
         ))}
      </ul>
   );
};

function Nav() {
   return <div className="nav">{<NavList items={items} />}</div>;
}

export default Nav;
