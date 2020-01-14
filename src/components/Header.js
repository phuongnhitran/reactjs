import React, { Component } from 'react'
import Form from './Form';
import Search from './Search';


export default class Header extends Component {
    state = {
        isShowToogle: false,
    }
    handleToogle = () => {
        // nếu muốn thay đổi giá trị của state thì mình dùng hàm setState
        this.setState({
            isShowToogle: !this.state.isShowToogle,
        }) ;
        
    }

    closeForm = () => {
        // nếu muốn thay đổi giá trị của state thì mình dùng hàm setState
        this.setState({
            isShowToogle: false,
        }) ;
        
    }
    render() {
        let elmShowToogle = null;
        //let elmChangeBtn = <button  onClick={ this.handleToogle }  type="button" className="btn btn-primary btn-add">Add to</button>;
        if(this.state.isShowToogle){
            //elmChangeBtn = <button  onClick={ this.handleToogle }  type="button" className="btn btn-primary btn-add">close form</button>;
            elmShowToogle = <Form />
        }
        return (
            <div className="header">
                   <h3 className="Logo">TO DO WITH REACTJS</h3>
                   <div className ="row">         
                       <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <Search />
                       </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 offset-2">
                            <button  onClick={ this.handleToogle }  type="button" className="btn btn-primary btn-add">Add to</button>
                            
                            { elmShowToogle }
                        </div>
                        
                   </div>
            </div>
        );
    }
}
