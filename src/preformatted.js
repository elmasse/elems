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
          line-height: var(--base-line-height, 32px);
          font-size: var(--pre-font-size, 1em);
        }

        pre :global(code) {
          background-color: transparent;
        }
      `}
      </style>
    </pre>
  )
}

export const Pre = Preformatted
