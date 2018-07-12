import web3 from './web3';
// here it is instance
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x470ade6a5aac70BbC037B7Cfc715Dca60E88eb0b'
)

export default instance;