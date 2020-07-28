import React from 'react'

export const Paragraph = ({ children, ...props }) => {
  return (
    <p {...props}>
      {children}
      <style jsx>
        {`
        p {
          margin: var(--p-margin, 0 0 calc(var(--spacing) * 2) 0);
          line-height: var(--base-line-height, 32px);
          font-family: var(--font-family-body);
          font-weight: var(--p-font-weight, 400);
          font-size: var(--p-font-size, 1rem);
          color: var(--main-color);
        }
      `}
      </style>
    </p>
  )
}

export const P = Paragraph
