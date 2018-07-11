/* import React from 'react'
import { Menu } from 'semantic-ui-react'

export default (props) => {
    return (
      <Menu>
        <Menu.Item> JayCrown</Menu.Item>
        <Menu.Menu position ="right">
            <Menu.Item> Campaign </Menu.Item>
            <Menu.Item> + </Menu.Item>
         </Menu.Menu>
      </Menu>
    );
};

 */
import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Menu.Menu position="right">
      <Menu.Item>
        CrownJay 
      </Menu.Item>  
      </Menu.Menu>
    </Menu>
  );
};

export default Header;