import React , { Component } from 'react';
import Layout from '../../../components/layout';
import { Link, Router } from '../../../routes';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Campaign from '../../../ethereum/Campaign';
import web3 from '../../../ethereum/web3';

class NewRequest extends Component{
    render(){
        return(
            <h1>Create Request</h1>
        )
    }
}

export default NewRequest;