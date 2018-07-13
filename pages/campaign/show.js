import React, { Component } from 'react';
import Layout from '../../components/layout';
import Campaign from '../../ethereum/Campaign';
import { Card, Grid } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm'
class CampaignShow extends Component{
    //getInitialProps methopd is used to fetch initial data from browser and other places

    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();
        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCard(){
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount
      } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this Campaign and Thankful for contribution',
                style: { overflowWrap: 'break-word' }                
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution in Wei',
                description: 'The manager needs atleast this mone in WEI. Thankful for contribution',
                style: { overflowWrap: 'break-word' }                
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description:
                  'A request tries to withdraw money from the contract. Requests must be approved by approvers'
              },
              {
                header: approversCount,
                meta: 'Number of Approvers',
                description:
                  'Number of people who have already donated to this campaign'
              },
              {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description:
                  'The balance is how much money this campaign has left to spend.'
        }
        ];
        return <Card.Group items = { items } />
    }

    render(){
        return (
            <Layout>
            <h1> Campaign is Here!! </h1>
            <Grid>
            <Grid.Column width={10} >
            {this.renderCard()}
            </Grid.Column>

            <Grid.Column width={6} >
            <ContributeForm address = {this.props.address} />
            </Grid.Column>
            </Grid>
            </Layout>
        )

}
}

export default CampaignShow;