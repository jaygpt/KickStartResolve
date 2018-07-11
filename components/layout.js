import react from 'react';
import { Menu,Container } from 'semantic-ui-react';
import Head from 'next/head';
export default (props) => {
    return(
        <div>
        <Container>
        <Head>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
        </Head>
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