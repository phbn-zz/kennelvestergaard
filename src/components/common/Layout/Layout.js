import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';

import SEO from '@common/SEO';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <ModalProvider>
        <SEO />
        <GlobalStyles />
        {children}
      </ModalProvider>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
