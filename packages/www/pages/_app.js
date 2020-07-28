import React from 'react'
import _App from 'next/app'

export default class App extends _App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <>
         <style jsx global>{`
            :root {
              --spacing: 8px;
              --main-color: #121212;
              --action-color: #f63;
            }

            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
            }
         `}
         </style>
         <Component {...pageProps} />
      </>
    )
  }
}
