import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyles from '../styles/global'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../styles/defaultTheme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
