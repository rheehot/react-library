import React from "react";
import Layout from "./Layout";
import { Header } from "semantic-ui-react";

const DynamicPage = () => {
  return (
    <Layout>
      <Header as="h2">Dynamic Page</Header>
      <p>This page was loaded asynchronously</p>
    </Layout>
  );
};

export default DynamicPage;