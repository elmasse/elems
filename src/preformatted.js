import React from 'react'

export const Preformatted = ({ children, border = false, ...props }) => {
  return (
    <pre {...props}>
      {children}
      <style jsx>
        {`
        pre {
          margin: var(--pre-margin, calc(var(--spacing) * 3) 0);
          padding: var(--pre-padding, calc(var(--spacing) * 2));
          overflow: auto;
          line-height: var(--pre-line-height, calc(1rem + var(--spacing)));
          font-size: var(--pre-font-size, 1rem);
        }

        pre :global(code) {
          background-color: transparent;
        }
      `}
      </style>
    </pre>
  )
}

export const PRE = Preformatted
