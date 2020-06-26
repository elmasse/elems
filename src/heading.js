import React from 'react'

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
          ${fontFamily}
          ${color}
          margin: var(--h1-margin, 0 0 calc(var(--spacing) * 2) 0);
          font-size: var(--h1-font-size, 3rem);
          line-height: var(--h1-line-height, 1);
          letter-spacing: -.088rem;          
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
          ${fontFamily}
          ${color}

          margin: var(--h2-margin, 0 0 calc(var(--spacing) * 2) 0);
          font-size: var(--h2-font-size, 2.5rem);
          line-height: var(--h2-line-height, 1);
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
          ${fontFamily}
          ${color}
          margin: var(--h3-margin, 0 0 calc(var(--spacing) * 2) 0);
          font-size: var(--h3-font-size, 2rem);
          line-height: var(--h3-line-height, 1);          
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
          ${fontFamily}
          ${color}
          margin: var(--h4-margin, 0 0 calc(var(--spacing) * 1) 0);
          font-size: var(--h4-font-size, 1.5rem);
          line-height: var(--h4-line-height, 1);
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
          ${fontFamily}
          ${color}
          margin: var(--h5-margin, 0 0 calc(var(--spacing) * 1.5) 0);
          font-size: var(--h5-font-size, 1.25rem);
          line-height: var(--h5-line-height, 1);
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
          ${fontFamily}
          ${color}
          margin: var(--h6-margin, 0 0 calc(var(--spacing) * 1) 0);
          font-size: var(--h6-font-size, 1rem);
          line-height: var(--h6-line-height, 1);
        }
      `}
      </style>
    </h6>
  )
}

export const H6 = Heading6
