import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Item from './Item';

export default class MainContent extends Component {
    render() {
        const items_cua_props_nay = this.props.data_props;
        console.log('items_cua_props_nay',items_cua_props_nay);
        const elmItem = items_cua_props_nay.map((items_cua_props_nay,index)=>{
            return(
                <Item item={items_cua_props_nay} index={index} key={index}/>
            )
        })
      
        return (
            <div>
            <h5>List task</h5>
            <Table striped>
                <thead>
                    <tr>
                        <th scope="col" className="text-center text-center-1">Id</th>
                        <th scope="col" className="text-center text-center-2">Task</th>
                        <th scope="col" className="text-center text-center-3">Status</th>
                        <th scope="col" className="text-center text-center-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                   {elmItem}
                </tbody>
            </Table>
            </div>
        )
    }
}
