import React , {Component} from 'react';
import {Table } from 'semantic-ui-react';
class RequestRow extends Component {

    render(){
        const { Row, Cell } = Table;
        return(
            
            // in es6 Table.Row = Row is written in this way
            < Row>
            <Cell>{this.props.id}</Cell>
            <Cell></Cell>
            </Row>
        );
    }
}

export default RequestRow;