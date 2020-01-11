import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { funk } from './funk';

const Wrapper = styled.div`
  margin: 50px 0;
`;

const Container = ({ story }) => (
  <Wrapper>
    <ThemeProvider theme={{ theme: funk }}>
      <Reset />
      <div id="container">{story()}</div>
    </ThemeProvider>
  </Wrapper>
);

export default Container;
