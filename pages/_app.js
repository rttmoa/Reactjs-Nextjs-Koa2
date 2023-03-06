import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import Router from 'next/router'
import Link from 'next/link'

import axios from 'axios'

import 'antd/dist/antd.css'

import Layout from '../components/Layout'
import PageLoading from '../components/PageLoading'

import testHoc from '../lib/with-redux';  // 可以将 export default Comp => {} 函数中传递到 此组件中this.props使用



// 覆盖_app.js文件
class MyApp extends App {
  // state可以通过 this.props.pageProps属性传递到每个页面中
  state = {
    context: 'value',
    loading: false,
  }

  startLoading = () => {
    this.setState({ loading: true })
  }

  stopLoading = () => {
    this.setState({ loading: false })
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', this.startLoading) // 切换：路由开始的时候 Loading：true
    Router.events.on('routeChangeComplete', this.stopLoading)
    Router.events.on('routeChangeError', this.stopLoading)

    // axios.get("https://api.github.com/search/repositories?q=react").then(resp => console.log(resp))
    // axios.get("github/search/repositories?q=react").then(resp => console.log(resp))
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.startLoading) // 取消监听：
    Router.events.off('routeChangeComplete', this.stopLoading)
    Router.events.off('routeChangeError', this.stopLoading)
  }

  static async getInitialProps(ctx) { /* 使用 static获取 全局数据 */
    const { Component } = ctx;
    console.log('app init')
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      pageProps,
    }
  }

  // 重写render方法
  render() {
    // reduxStore是with-redux中传递过来的 
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Container>
        <Provider store={reduxStore}>
          {this.state.loading ? <PageLoading /> : null}
          <Layout>
            {/*  把 pageProps 传递给实际渲染的页面   实际上是Index.getInitialProps函数中的数据渲染到要渲染的Component组件中去   */}
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    )
  }
}

export default testHoc(MyApp)
