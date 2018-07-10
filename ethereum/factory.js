import web3 from './web3';
// here it is instance
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xcf7601ffa6e7841c097ea544160ea25dad8589cf'
)

export default instance;