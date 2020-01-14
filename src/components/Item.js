import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        const item_cua_1_array_data = this.props.item;
        console.log('item_cua_1_array_data',item_cua_1_array_data)
        const index_tu_dong_tang = this.props.index;
        return (
                <tr>
                    <th scope="row" className="text-center"> {index_tu_dong_tang + 1}</th>
                    <td className="text-center">{item_cua_1_array_data.name}</td>
                    <td className="text-center">{item_cua_1_array_data.level}</td>
                    <td className="text-center" ><button className="btn btn-warning">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            )
    }
}
