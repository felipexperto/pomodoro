import React, { ReactNode } from 'react';
import { element } from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from 'styles';

type RootProps = {
  children: ReactNode
}

const Root = ({ children }: RootProps): JSX.Element => {
  const { main } = theme;
  return (
    <React.StrictMode>
      <GlobalStyles />
      <ThemeProvider theme={main}>
        {children}
      </ThemeProvider>
    </React.StrictMode>
  );
}

Root.propTypes = {
  children: element,
}

export default Root;
