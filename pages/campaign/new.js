import React, {Component} from 'react';
import {Container,Form,Button,Input} from 'semantic-ui-react';
import Layout from '../../components/layout';

class CampaignNew extends Component{
    state = {
        minimumContribution: ''
    }
    render(){
        return(
            <Container>
                <Layout>
                    <h3 style = {{ alignSelf: 'right'}}> Create Campaign</h3>
                    <Form>
                        <Form.Field>
                            <label>Minimum Contribution</label>
                            <Input 
                                label = "wei"
                                labelPosition = "right"
                                value = {this.state.minimumContribution}
                                onChange = {event => {
                                    this.setState({minimumContribution: event.target.value })
                                }}
                            />
                        </Form.Field>
                        <Button floated = 'right' primary>Submit</Button>
                    </Form>
                </Layout>
            </Container>
        );
    }
}

export default CampaignNew