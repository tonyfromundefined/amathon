import { Container, default as NextApp } from 'next/app'
import Head from 'next/head'
import React, { Fragment } from 'react'
import { dom as fontawesome } from '~/plugins/fontawesome'
import { ThemeProvider } from '~/styled'
import GlobalStyle from '~/styled/global'
import base from '~/styled/themes/base'

export default class extends React.Component {
  static getInitialProps(appContext: any) {
    return App.getInitialProps(appContext)
  }

  render() {
    return <App {...this.props} />
  }
}

class App extends NextApp<any> {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Amathon 2019 | Cloud to Infinity</title>
          <style>{fontawesome.css()}</style>
        </Head>
        <ThemeProvider theme={base}>
          <Fragment>
            <Component {...pageProps} />
            <GlobalStyle />
          </Fragment>
        </ThemeProvider>
      </Container>
    )
  }
}
