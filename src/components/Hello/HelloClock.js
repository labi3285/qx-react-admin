import React from 'react'

class HelloClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <h2>{this.state.date.toLocaleTimeString()}</h2>
    )
  }
}
export default HelloClock
