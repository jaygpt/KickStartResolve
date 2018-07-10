import React , { Component }from 'react';
import factory from '../ethereum/factory'

class CampaignIndex extends Component{
//Nextjs have special way to load initial way to fetch data and it is
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns: campaigns }
    }
    render(){
        return(
            <div> Campaign Index! {this.props.campaigns}</div>
        )
    }
}

export default CampaignIndex;