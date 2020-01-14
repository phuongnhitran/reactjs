import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, Button } from 'reactstrap';

export default class Search extends Component {
    render() {
        return (
            
            <div class="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <InputGroup>
                    <input type="text" className="form-control" placeholder="nhập từ khóa tìm kiếm"></input>
                    <InputGroupAddon addonType="append">
                    <Button color="primary">Go</Button>
                    <Button  color="danger">Clear</Button>
                    </InputGroupAddon>
                    </InputGroup>
                </div>
            </div>
            
            
        )
    }
}
