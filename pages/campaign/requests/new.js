import React , { Component } from 'react';
import Layout from '../../../components/layout';
import { Link, Router } from '../../../routes';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Campaign from '../../../ethereum/Campaign';
import web3 from '../../../ethereum/web3';

class NewRequest extends Component{
    state = {
        value : '',
        description: '',
        recepient: ''
    }
    
    static async getInitialProps(props){
        const { address } = props.query;

        return { address };
    }

    render(){
        return(
            <Layout>
            <h1>Create Request</h1>
            < Form >
            <Form.Field>
            <label>Descripton</label>
            <Input
                value = {this.state.value}
                onChange = { event => this.setState( {description: event.target.description})}
            />
            </Form.Field>
            <Form.Field>
            <label>Value in Ether</label>
            <Input
                value = {this.state.value}
                onChange = { event => this.setState( {value: event.target.value})}
            />
            </Form.Field>
            <Form.Field>
            <label>Recepient:</label>
            <Input />
            </Form.Field>
            < Button > Request </ Button>
            </ Form>
            
            </Layout>
        )
    }
}

export default NewRequest;