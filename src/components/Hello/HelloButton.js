import React from 'react';

class HelloButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // 如果采用的是方法，而不是下面的闭包，这里需要绑定到this
    //this.handleClick = this.handleClick.bind(this);
  }

  // 注意：class里面的方法默认不会绑定this，这里采用的是属性的方式
  // npm i -D @babel/plugin-proposal-class-properties
  handleClick = () => {

    /**
     * 注意，只有setState才会触发渲染，切只更新赋值的属性，如果是整个更新的话，采用replaceState
     * */

    // this.setState(prevState => ({
    //   count: prevState.count + 1
    // }));
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <button onClick={this.handleClick}>点击{this.state.count}次</button>
    );
  }

}
export default HelloButton

