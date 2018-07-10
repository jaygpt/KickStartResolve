import web3 from './web3';
// here it is instance
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xAF85AC3E75E7423a07F591D04Aafd486f9041b3B'
)

export default instance;