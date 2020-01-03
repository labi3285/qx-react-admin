import React from 'react';
import axios from 'axios'

class HelloRequest extends React.Component {

  // 构造器
  constructor(props) {
    super(props);
    this.state = {
      gists: [],
      cancelToken: null,
    }
  }
  componentDidMount() {
    let that = this
    axios({
      url: 'https://api.github.com/users/octocat/gists',
      method: 'get',
      cancelToken: new axios.CancelToken(function executor(c) {
        that.state.cancelToken = c
      })
    }).then( (resp) => {
      console.log(resp)
      that.setState({
        gists: resp.data
      })
    }).catch( (err) => {
      console.log('err' + err) // for debug
    })
  }
  componentWillUnmount() {
    this.state.cancelToken();
  }
  render() {
    return (
      <div>
        用户最新的Gist共享地址：
        <ul>
          {
            this.state.gists.map((item, i) =>
              <li key={i}><a href={item.url} target="_blank">{item.url}</a></li>
            )
          }
        </ul>
      </div>
    );
  }
}
export default HelloRequest
