import React, { Component } from 'react';
import AppContext from './Context/app-context';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Search';
import List from './Components/List'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      data: []
    }
  }
  
  onDataSet = (data) => {
    this.setState({ data })
  }

  render() {
    const { data } = this.state;

    return (
      <AppContext.Provider value={{ data, onDataSet: this.onDataSet }}>
        <div className="App">
          <div className="search">
            <Search />
          </div>
          <div className="List">
            <List />
          </div>
        </div>
      </AppContext.Provider> 
    )
  }
}

export default App;
