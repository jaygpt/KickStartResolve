import Web3 from 'web3';

/* const web3 = new Web3(window.web3.currentProvider);*/

let web3;
if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined' ){
    // if metamask is running on our browser 
    web3 = new Web3(window.web3.currentProvider);
}else{
    // whem we are in server and metamask is not available
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/IwXeaA7paHZsIDAMIwMw'
    );
    web3 = new Web3(provider);
}
export default web3;

