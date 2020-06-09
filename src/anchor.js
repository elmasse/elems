import React, { Component } from 'react'

export class Anchor extends Component {
  render () {
    const { children, ...props } = this.props
    return (
      <a {...props}>
        {children}
        <style jsx>
          {`
          a {
            color: var(--action-color);
          }
        `}
        </style>
      </a>
    )
  }
}

export const A = Anchor
