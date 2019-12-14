import { createMuiTheme } from '@material-ui/core'
import { cyan, deepPurple } from '@material-ui/core/colors'
import { ThemeProvider } from '@material-ui/styles'
import App from 'next/app'
import React from 'react'

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: cyan,
  },
})

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp
