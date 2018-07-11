import react from 'react';
import { Menu,Container } from 'semantic-ui-react';

export default (props) => {
    return(
        <div>
        <Container>
        <Menu style={{ marginTop: '10px' }}>
        <Menu.Menu position="right">
        <Menu.Item>
        CrowdJay
        </Menu.Item>
        <Menu.Item>
        +
        </Menu.Item>
        </Menu.Menu>
      </Menu>
      {props.children}
      </Container>
        
        <h1> I am Footer </h1>
        </div>
    )
};