import React from 'react'

export const Blockquote = ({ children, ...props }) => {
  return (
    <blockquote {...props}>
      {children}
      <style jsx>
        {`
        blockquote {
          padding: calc(var(--spacing) * 2) 0;
          margin: calc(var(--spacing) * 3) 0;
          padding-left: calc(var(--spacing) * 3);
          border-left: calc(var(--spacing) / 2) solid var(--grey500);
          background-color: var(--grey50);
        }
        
        blockquote :global(p:last-child) {
          margin-bottom: 0;
        }
      `}
      </style>
    </blockquote>
  )
}
