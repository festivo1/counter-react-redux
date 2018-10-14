import React, { Component } from 'react'
import Counter from './js/components/Counter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" style={{ marginTop: "80px"}} >
          <div className="row">
            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
              <Counter />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
