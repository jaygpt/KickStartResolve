import React, {Component} from 'react';
import {Container,Form,Button} from 'semantic-ui-react';
import Layout from '../../components/layout';

class CampaignNew extends Component{
    render(){
        return(
            <Container>
                <Layout>
                    <h3 style = {{ alignSelf: 'right'}}> Create Campaign</h3>
                    <Form>
                        <Form.Field>
                            <label>Minimum Contribution</label>
                            <input />
                        </Form.Field>
                        <Button floated = 'right' primary>Submit</Button>
                    </Form>
                </Layout>
            </Container>
        );
    }
}

export default CampaignNew