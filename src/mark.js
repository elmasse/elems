import React from 'react'

export const Mark = ({ children, ...props }) => {
  return (
    <mark {...props}>
      {children}
      <style jsx>
        {`
        mark {
          background-color: var(--action-color);
        }
      `}
      </style>
    </mark>
  )
}
