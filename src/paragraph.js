import React from 'react'

const reset = 'margin: 0;'

export const Paragraph = ({ children, ...props }) => {
  return (
    <p {...props}>
      {children}
      <style jsx>
        {`
        p {
          ${reset}
          line-height: 1.65;
          letter-spacing: -0.003rem;
          font-family: var(--font-family-body);
          font-weight: 400;
          font-size: 1rem;
          color: var(--main-color);
        }
      `}
      </style>
    </p>
  )
}

export const P = Paragraph;
