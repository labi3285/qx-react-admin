import React from 'react'
import PropTypes from 'prop-types'

class HelloComponent extends React.Component {

  // 默认值
  // npm i -D @babel/plugin-proposal-class-properties
  static defaultProps = {
    name: 'a props name'
  }

  // 参数类型校验
  static propTypes = {
    name: PropTypes.string
  }

  // 构造器
  constructor(props) {
    super(props);
    // 参数的修改只会作用于当前参数
    this.state = {
      name: 'a state name',
    }
  }

  // depressed
  // componentWillMount() {
  //   console.log('componentWillMount')
  // }
  // depressed
  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps')
  // }
  // depressed
  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }

  // 控件初始化完成后调用
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    // 这里返回下一次要更新的states，返回null表示下一次不更新
    return state
  }

  // 获取渲染前的快照
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    // 这里的返回值作为componentDidUpdate的第三个参数
    return prevState
  }

  // 渲染之后调用
  componentDidMount() {
    console.log('componentDidMount')
  }
  // 控件是否应该更新，第一次不算
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    // false表示不会更新
    return true
  }

  // 控件更新之后，第一次不算
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  // 控件销毁之前
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  // findDOMNode()

  handleClick = () => {
    this.setState({
      name: 'a new state name',
    })
    //this.forceUpdate()
  }

  /**
   * 渲染方法
   * 会触发渲染的方法有
   * forceUpdate
   * setState,replaceState,setProps,replaceProps等
   * */
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.state.name}</div>
        <button onClick={this.handleClick}>点击重新渲染</button>
      </div>
    )
  }
}

// // 参数类型校验
// HelloComponent.propTypes = {
//   name: PropTypes.string
// };

// // 默认值
// HelloComponent.defaultProps = {
//   name: 'a props name'
// }

export default HelloComponent
