import React from 'react'

export const Code = ({ children, ...props }) => {
  return (
    <code {...props}>
      {children}
      <style jsx>
        {`
        code {
          font-family: var(--font-family-monospace, monospace);
          font-size: var(--code-font-size, .95em);
          background-color: var(--code-background-color);
          line-height: 1em; /* weird trick for monospace fonts to NOT add to height of container p */
        }

        :global(pre) > code {
          background-color: transparent;
        }

      `}
      </style>
    </code>
  )
}

export const CODE = Code
