import React , { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import tasks from './mockdata/task';
class App extends Component{
  //lấy mockdata
  state = {
    items_task:tasks,
    value: '',
    }
  render() {
    const {value, items_task} = this.state;
    
    return (
      <div className="red">
        <Header />

        <MainContent data_props={items_task}/>
      </div>
      
    );
  }
}
export default App;
