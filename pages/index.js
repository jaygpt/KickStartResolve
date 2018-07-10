import React , { Component }from 'react';
import factory from '../ethereum/factory';
import { Card } from 'semantic-ui-react';

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
                description: <h3>View Description </h3>,
                fluid: true,
            };
        });

        return <Card.Group items = { items } />
    }
    render(){
        return(
            <div> Campaign Index! {this.renderCampaign()}</div>
        )
    }
}

export default CampaignIndex;