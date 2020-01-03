import React from 'react';

class HelloInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // 如果采用的是方法，而不是下面的闭包，这里需要绑定到this
    //this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <form>
        <p>你输入了：{this.state.value}</p>
        <input type="text" placeholder={"点击输入"} onChange={this.handleChange}></input>
      </form>
    );
  }

}
export default HelloInput
