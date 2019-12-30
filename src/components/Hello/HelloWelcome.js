import React from 'react';

class HelloWelcome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <strong>你好{this.props.name}</strong>
        {
          this.props.messageCount > 0 &&
          <p>你有{this.props.messageCount}条未读消息</p>
        }
      </div>
    );
  }

}
export default HelloWelcome
