const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let compaignAddress;
let campaign;
beforeEach(async() =>{
    accounts = web3.eth.getAccounts();

    factory = await web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data: compiledFactory.bytecode})
        .send({from:accounts[0],gas: '1000000' })
    
    await factory.methods.createCampaign('100')
        .send({from: accounts[0],gas: '1000000' })
    
    const address[] = await factory.methods.getDeployedCampaigns().call();
    compaignAddress = address[0];
    // to load already deployed campaign
    campaign = await web3.eth.Contract(JSON.parse(compiledCampaign.interface),compaignAddress)
});

describe('deploy')