import React from 'react';
import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';

const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => (
          <MenuItems items={menu} key={index} depthLevel={0} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
