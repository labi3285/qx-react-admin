import React from 'react';

class HelloRefs extends React.Component {

  componentDidMount() {
    this.refs.myInput.focus();
  }

  render() {
    return (
      <input type="text" ref="myInput" placeholder="自动获取焦点" />
    );
  }

}
export default HelloRefs
