import React from 'react';
import PropTypes from 'prop-types';


class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: Number(this.props.init)
    }
  }

  increment = () => {
    return this.setState({ count: this.state.count + (Number(this.props.incrementBy) || 1) })
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Incrementa {this.props.incrementBy}</button>
      </div>
    )
  }
}

Counter.propTypes = {
  init: PropTypes.number,
  incrementBy: PropTypes.number
}

export default Counter;