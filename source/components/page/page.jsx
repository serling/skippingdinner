import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout';
import Header from '../header';
import Footer from '../footer';

const Page = ({ children, layout }) => (
  <div className="page">
    <Header active={true} />
    <Layout theme={layout}>{children}</Layout>
    <Footer />
  </div>
);

Page.defaultProps = {
  hasHeader: true
};

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  layout: PropTypes.string
};

Page.layout = Layout.themes;

export default Page;
