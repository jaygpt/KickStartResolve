import React, {Component} from 'react';
import {Container,Form,Button,Input, Message} from 'semantic-ui-react';
import Layout from '../../components/layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component{
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    }

    onSubmit = async (event) =>{
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        this.setState({loading: true ,errorMessage: ''})

        try{

        await factory.methods
            .createCampaign(this.state.minimumContribution)
            .send({ 
                from: accounts[0]
             })
        Router.pushRoute('/');

        } catch (err){
            this.setState({errorMessage: err.message});
        }

        this.setState({ loading: false });
    }
    render(){
        return(
            <Container>
                <Layout>
                    <h3 style = {{ alignSelf: 'right'}}> Create Campaign</h3>
                    <Form onSubmit = {this.onSubmit } error = {!!this.state.errorMessage}>
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
                        <Message error header = "Oops! " content = {this.state.errorMessage} />
                        <Button loading = {this.state.loading } floated = 'right' primary>Submit</Button>
                    </Form>
                </Layout>
            </Container>
        );
    }
}

export default CampaignNew