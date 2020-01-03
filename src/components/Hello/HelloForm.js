import React from 'react';

class HelloForm extends React.Component {

  // 构造器
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      content: null,
    }
  }

  handleSubmit = (e) => {
    console.log(this.state);
  }

  render() {
    return (
      <form >
        {/*onSubmit={this.handleSubmit}*/}
        <select
          value={ this.state.type || '' }
          onChange={ (e)=> this.setState({type: e.target.value}) }>
          <option value="a">type-a</option>
          <option value="b">type-b</option>
        </select>

        <input
          placeholder="输入内容"
          value={ this.state.content || '' }
          onChange={ (e)=> this.setState({content: e.target.value}) } />

        {/*<input type="submit" value="提交" />*/}
        <button onClick={this.handleSubmit} >提交</button>

      </form>
    );
  }
}
export default HelloForm
