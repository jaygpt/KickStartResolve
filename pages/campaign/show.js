import React, { Component } from 'react';
import Layout from '../../components/layout';
import Campaign from '../../ethereum/Campaign';
class CampaignShow extends Component{
    //getInitialProps methopd is used to fetch initial data from browser and other places

    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        console.log(summary);
        return {};
    }

    render(){
        return (
            <Layout>
            <h1> Campaign is Here!!!aa </h1>
            </Layout>
        )

}
}

export default CampaignShow;