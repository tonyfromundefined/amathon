import { Container, default as NextApp } from 'next/app'
import Head from 'next/head'
import React, { Fragment } from 'react'
import CoverImage from '~/assets/cover.png?url'
import faviconImage from '~/assets/favicon.png'
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
          <link rel='shortcut icon' href={faviconImage} />
          <meta
            property='og:title'
            content='Amathon 2019 | Cloud to Infinity'
          />
          <meta
            property='og:description'
            content='AWSKRUG가 만든 클라우드 Hackathon. 새로운 사람들과 함께 떠올린 미래를 나만의 클라우드 기술로 실현시키세요'
          />
          <meta
            property='og:image'
            content={CoverImage}
          />
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
