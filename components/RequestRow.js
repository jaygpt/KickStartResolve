import React , {Component} from 'react';
import { Button,Table } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/Campaign';
import { throwStatement } from 'babel-types';

class RequestRow extends Component {
    onApprove = async () => {
        const accounts = await web3.eth.getAccounts();
        const campaign = Campaign(this.props.address);
        await campaign.methods.approveRequest(this.props.id).send({ from: accounts[0] });
    }
    onFinalize = async () =>{
        const accounts = await web3.eth.getAccounts();
        const campaign = Campaign(this.props.address);
        await campaign.methods.finalizeRequest(this.props.id).send({ from: accounts[0] });
    }

    render(){
        const { Row, Cell } = Table;
        const {id,request,approversCount} = this.props;
        const readyToFinalize = request.approvalCount > approversCount / 2;

        return(
            // in es6 Table.Row = Row is written in this way
            <Row
                    disabled={request.complete}
                    positive={readyToFinalize && !request.complete}
            >
            <Cell>{id}</Cell>
            <Cell>{request.description}</Cell>
            <Cell>{web3.utils.fromWei(request.value,'ether')}</Cell>
            <Cell>{request.recipient}</Cell>
            <Cell>{request.approvalCount}/{approversCount}</Cell>
            <Cell>
          {request.complete ? null : (
            <Button color="green" basic onClick={this.onApprove}>
              Approve
            </Button>
          )}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button color="teal" basic onClick={this.onFinalize}>
              Finalize
            </Button>
          )}
</Cell>
            </Row>
        );
    }
}

export default RequestRow;