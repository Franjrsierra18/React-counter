import React from 'react';
import './App.css';
import Counter from './Counter';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
  }

  handleInputChange = event => {
    this.setState({ item: event.target.value });
  }

  render() {
    return (
      <div className="App">
        
        <Counter init={5} incrementBy={Number(this.state.item)}/>
        <Counter init={10} incrementBy={Number(this.state.item)}/>
        <br/>
        <input type='number' placeholder='Introduce multiplo' onChange={this.handleInputChange} />

      </div>
    )
  }
}

export default App;
