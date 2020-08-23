import React, { Component } from "react";
import { Layout } from "antd";
import Head from "../components/Head";
import Query from "../components/Query";
import ErrorBoundary from "../components/ErrorBoundary";
const { Header, Content, Footer } = Layout;

export default class MyLayout extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Head />
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <ErrorBoundary>
              <Query />
            </ErrorBoundary>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Ziqi's CS527 Project</Footer>
      </Layout>
    );
  }
}
