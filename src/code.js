import React from 'react'

export const Code = ({ children, ...props }) => {
  return (
    <code {...props}>
      {children}
      <style jsx>
        {`
        code {
          font-family: var(--font-family-monospace, monospace);
          background-color: var(--grey100);
          line-height: 1em; /* weird trick for monospace fonts to NOT add to height of container p */
        }
      `}
      </style>
    </code>
  )
}
