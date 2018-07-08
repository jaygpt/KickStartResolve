const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname,'contracts','Campiagn.sol');
const source = fs.readFileSync(campaignPath,'utf8');

const output = solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath);
for(let contracts in output){
    fs.outputJsonSync(
        path.resolve(buildPath,contracts + '.json'),
        output[contracts]
    );
}