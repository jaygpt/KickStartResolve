import React , { Component } from 'react';
import Layout from '../../../components/layout';
import { Link } from '../../../routes';
import { Button } from 'semantic-ui-react';
import Campaign from '../../../ethereum/Campaign';

class RequestIndex extends Component{
    static async getInitialProps(props){
        const { address } = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();
        const request = await Promise.all(
            Array(requestCount)
            .fill()
            .map((element,index) => {
                campaign.methods.requests;
            })
        );
        return { address, requests, requestCount };
    }
    
    render(){
        return(
            < Layout >
            <h1>This is Request Page </h1>
            < Link route = {`/campaign/${this.props.address}/request/new`}>
            <a>
                <Button primary > Create Request</Button >
            </a>
            < / Link >
            < / Layout >
        );
    };
};

export default RequestIndex;
