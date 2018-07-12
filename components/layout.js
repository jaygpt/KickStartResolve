import react from 'react';
import { Menu,Container } from 'semantic-ui-react';
import Head from 'next/head';
import { Link } from '../routes';

export default (props) => {
    return(
        <div>
        <Container>
        <Head>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
        </Head>
        <Menu style={{ marginTop: '10px' }}>
        <Menu.Menu position="left">
        < Link route = "/">
        <a className = "item">
            CrowdCrown
        </a>
        </ Link>
        </Menu.Menu>
        <Menu.Menu>
            < Link route = "/campaign/new">
            <a className = "item"> + </a>
            </ Link>
        </Menu.Menu>
      </Menu>
      {props.children}
      </Container>
        <h1> I am Footer </h1>
        </div>
    )
};