import React , { Component }from 'react';
import factory from '../ethereum/factory';
import { Card } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import Layout from '../components/layout';
import { Link } from '../routes';

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
                description: (
                    <Link route = {`/campaign/${address}`}><a>View Description </a></Link>
                ),
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
            <Link route = "/campaign/new">
            <a>
            <Button
                floated = "right"
                content= "Create Campaign"
                icon = "add circle"
                primary
            />
            </a>
            </Link>
            {this.renderCampaign()}
            </Layout>
            </div>
        )
    }
}

export default CampaignIndex;