import React , { Component } from 'react';
import Layout from '../../../components/layout';
import { Link } from '../../../routes';
import { Button, Table } from 'semantic-ui-react';
import Campaign from '../../../ethereum/Campaign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component{
    static async getInitialProps(props){
        const { address } = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();
        const requests = await Promise.all(
            Array(requestCount)
              .fill()
              .map((element, index) => {
                return campaign.methods.requests(index).call();
              })
          );
        const approversCount = await campaign.methods.approversCount().call();

      console.log(requests);
        return { address, requests, requestCount,approversCount };
    }
    
    
    renderRows() {
        return this.props.requests.map((request, index) => {
        return (
            <RequestRow
            key={index}
            id = {index}
            request={request}
            address={this.props.address}
            approversCount = {this.props.approversCount}
            />
        );
        });
    }

    render(){
        const { Header, Row, HeaderCell, Body } = Table;

        return(
            < Layout >
            <h1>This is Request Page </h1>
            < Link route = {`/campaign/${this.props.address}/request/new`}>
            <a>
                <Button primary > Create Request</Button >
            </a>
            < / Link >
            <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
</Table>
            < / Layout >
        );
    };
};

export default RequestIndex;
