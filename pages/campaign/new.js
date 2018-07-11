import React, {Component} from 'react';
import {Container,Form,Button,Input} from 'semantic-ui-react';
import Layout from '../../components/layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends Component{
    state = {
        minimumContribution: ''
    }

    onSubmit = async (event) =>{
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        await factory.methods
            .createCampaign(this.state.minimumContribution)
            .send({from: accounts[0]})

    }
    render(){
        return(
            <Container>
                <Layout>
                    <h3 style = {{ alignSelf: 'right'}}> Create Campaign</h3>
                    <Form onSubmit = {this.onSubmit}>
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