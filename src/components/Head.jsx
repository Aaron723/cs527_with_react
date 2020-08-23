import React, { Component } from "react";
import { Menu } from "antd";
export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="logo"></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="Query">Query</Menu.Item>
          <Menu.Item key="Result">Result</Menu.Item>
        </Menu>
      </div>
    );
  }
}
