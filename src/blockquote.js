import React from 'react'

export const Blockquote = ({ children, ...props }) => {
  return (
    <blockquote {...props}>
      {children}
      <style jsx>
        {`
        blockquote {
          margin: calc(var(--spacing) * 3) 0;
          padding-left: calc(var(--spacing) * 3);
          border-left: calc(var(--spacing) * .5) solid var(--grey500);
          background-color: var(--grey50);
        }
      `}
      </style>
    </blockquote>
  )
}
