import React from 'react'

export const Code = ({ children, ...props }) => {
  return (
    <code {...props}>
      {children}
      <style jsx>
        {`
        code {
          background-color: var(--grey100);
        }
      `}
      </style>
    </code>
  )
}
