import React , { Component }from 'react';
import factory from '../ethereum/factory';
import { Card } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import Layout from '../components/layout';

class CampaignIndex extends Component{
//Nextjs have special way to load initial way to fetch data and it is
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns: campaigns }
    }

    renderCampaign(){
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Description </a>,
                fluid: true,
            };
        });

        return <Card.Group items = { items } />
    }
    render(){
        return(
            <div>
            <Layout>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
            <Button
                floated = "right"
                content= "Create Campaign"
                icon = "add circle"
                primary
            />
            {this.renderCampaign()}

            </Layout>

            </div>
        )
    }
}

export default CampaignIndex;