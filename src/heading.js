import React from 'react'

const reset = 'margin: 0;'
const fontFamily = 'font-family: var(--font-family-heading);'
const color = 'color: var(--main-color);'

// Base ratio
// base line-height / base font-size
//

export const Heading1 = ({ children, ...props }) => {
  return (
    <h1 {...props}>
      {children}
      <style jsx>
        {`
        h1 {
          ${reset}
          ${fontFamily}
          ${color}
          font-size: 4rem;
          line-height: 6rem;
          letter-spacing: -.088rem;
          margin-left: calc(var(--spacing) * -0.3);
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
          ${reset}
          ${fontFamily}
          ${color}
          font-size: 3rem;
          line-height: 4.5rem;
          letter-spacing: -.048rem;
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
          ${reset}
          ${fontFamily}
          ${color}
          font-size: 2rem;
          line-height: 3rem;
          letter-spacing: -.036rem;
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
          ${reset}
          ${fontFamily}
          ${color}
          font-size: 1.8rem;
          letter-spacing: -.03rem;
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
          ${reset}
          ${fontFamily}
          ${color}
          font-size: 1.3rem;
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
          ${reset}
          ${fontFamily}
          ${color}
          font-size: 1.1rem;
        }
      `}
      </style>
    </h6>
  )
}

export const H6 = Heading6
