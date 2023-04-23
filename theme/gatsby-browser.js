import { GlobalStyle, ThemeProvider } from '@react95/core';
import { createGlobalStyle } from '@xstyled/styled-components';
import React from 'react';

const DesktopStyle = createGlobalStyle`
  html {
    height: calc(100% - 28px);
  }

  body {
    height: 100%;
  }

  pre[class*="language-"] {
    margin: 0 !important;
    border-radius: 0 !important;
  }
  pre[class*="language-"] * {
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }
  `;

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    <DesktopStyle />

    {element}
  </>
);
