import React from 'react'

export const Paragraph = ({ children, ...props }) => {
  return (
    <p {...props}>
      {children}
      <style jsx>
        {`
        p {
          margin: calc(var(--spacing) * 3) 0;
          line-height: 1.65;
          letter-spacing: -0.003rem;
          font-family: var(--font-family-body);
          font-weight: 400;
          font-size: 1.25rem;
          color: var(--main-color);
        }
      `}
      </style>
    </p>
  )
}
