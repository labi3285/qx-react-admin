import React from 'react';

class HelloList extends React.Component {

  // 构造器
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { key: 1, name: "item-1" },
        { key: 2, name: "item-2" },
        { key: 3, name: "item-3" },
        { key: 4, name: "item-4" },
      ]
    }
  }
  render() {
    // const lis = this.state.items.map((item) =>
    //   <li key={item.key}>{item.name}</li>
    // );
    return (
      <div>
        列表：
        {/*<ul>{lis}</ul>*/}
        <ul>
          {
            this.state.items.map((item) =>
              <li key={item.key}>{item.name}</li>
            )
          }
        </ul>
      </div>
    );
  }
}
export default HelloList
