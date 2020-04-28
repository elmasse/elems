import React from 'react'

export const Anchor = ({ children, ...props }) => {
  return (
    <a {...props}>
      {children}
      <style jsx>
        {`
        a {
          color: var(--action-color);
        }
      `}
      </style>
    </a>
  )
}

export const A = Anchor
