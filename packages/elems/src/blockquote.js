import React from 'react'

export const Blockquote = ({ children, ...props }) => {
  return (
    <blockquote {...props}>
      {children}
      <style jsx>
        {`
        blockquote {
          margin: calc(var(--spacing) * 3) 0;
          padding: calc(var(--spacing) * 2);
          padding-left: calc(var(--spacing) * 3.5);
          border-left: calc(var(--spacing) / 2) solid;
          border-color: var(--blockquote-border-color, var(--action-color));
          background-color: var(--blockquote-background-color);
        }
        
        blockquote :global(p:last-child) {
          margin: 0;
        }
      `}
      </style>
    </blockquote>
  )
}

export const BLOCKQUOTE = Blockquote
