import React, { Component } from 'react'

export default class Form extends Component {
    handleCancel = () => {

    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <div className="sr-only" htmlFor="task_name">Label</div>
                    <input value="" onChange={this.handleChange} name="nametask" type="text" id="task_name" className="form-control" placeholder="Task Name" />
                    </div>
                    <div className="form-group">
                    <div className="sr-only" htmlFor="inputDs">Label</div>
                    <select value="" onChange={this.handleChange} name="level" id="inputDs" className="form-control" required ref="task_level">
                    <option value="1">Small</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                    </select>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                    <button className="btn btn-danger" type="button">Cancel</button>
                </form>
                </div>
            </div>
        )
    }
}
