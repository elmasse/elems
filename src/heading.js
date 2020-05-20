import React from 'react'

export const Heading1 = ({ children, ...props }) => {
  return (
    <h1 {...props}>
      {children}
      <style jsx>
        {`
        h1 {
          font-family: var(--font-family-heading);
          font-size: 4.4rem;
          color: var(--main-color);
          margin-left: calc(var(--spacing) * -0.5);
          margin-bottom: calc(var(--spacing) * 4);
          margin-top: calc(var(--spacing) * 4);
          line-height: .95rem;
          letter-spacing: -.9px;
        }
      `}
      </style>
    </h1>
  )
}

export const H1 = Heading1

export const Heading2 = ({ children, ...props }) => {
  return (
    <h2 {...props}>
      {children}
      <style jsx>
        {`
        h2 {
          font-family: var(--font-family-heading);
          font-size: 2.35em;
          color: var(--main-color);          
          margin-left: calc(var(--spacing) * -0.5);
          margin-bottom: calc(var(--spacing) * 3);
          margin-top: calc(var(--spacing) * 5);
          letter-spacing: -.95px;
        }
      `}
      </style>
    </h2>
  )
}

export const H2 = Heading2

export const Heading3 = ({ children, ...props }) => {
  return (
    <h3 {...props}>
      {children}
      <style jsx>
        {`
        h3 {
          font-family: var(--font-family-heading);
          font-size: 1.8em;
          color: var(--main-color);
          margin-left: calc(var(--spacing) * -0.5);
          margin-bottom: calc(var(--spacing) * 2.5);
          margin-top: calc(var(--spacing) * 4);
          letter-spacing: -.95px;
        }
      `}
      </style>
    </h3>
  )
}

export const H3 = Heading3

export const Heading4 = ({ children, ...props }) => {
  return (
    <h4 {...props}>
      {children}
      <style jsx>
        {`
        h4 {
          font-family: var(--font-family-heading);
          font-size: 1.5em;
          color: var(--main-color);
          margin-left: calc(var(--spacing) * -0.5);
          margin-bottom: calc(var(--spacing) * 2);
          margin-top: calc(var(--spacing) * 3);
          letter-spacing: -.95px;
        }
      `}
      </style>
    </h4>
  )
}

export const H4 = Heading4

export const Heading5 = ({ children, ...props }) => {
  return (
    <h5 {...props}>
      {children}
      <style jsx>
        {`
        h5 {
          font-family: var(--font-family-heading);
          font-size: 1.3em;
          color: var(--main-color);
          margin-left: calc(var(--spacing) * -0.5);
          margin-bottom: calc(var(--spacing) * 2);
          margin-top: calc(var(--spacing) * 3);
          letter-spacing: -.5px;
        }
      `}
      </style>
    </h5>
  )
}

export const H5 = Heading5

export const Heading6 = ({ children, ...props }) => {
  return (
    <h6 {...props}>
      {children}
      <style jsx>
        {`
        h6 {
          font-family: var(--font-family-heading);
          font-size: 1.1em;
          color: var(--main-color);
          margin-left: calc(var(--spacing) * -0.5);
          margin-bottom: calc(var(--spacing) * 2);
          margin-top: calc(var(--spacing) * 3);
          letter-spacing: -.5px;
        }
      `}
      </style>
    </h6>
  )
}

export const H6 = Heading6
