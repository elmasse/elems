import React from 'react'

export const Keyboard = ({ children, ...props }) => {
  return (
    <kbd {...props}>
      {children}
      <style jsx>
        {`
        kbd {
          font-family: var(--font-family-monospace, monospace);
          background-color: var(--kbd-background-color);
          line-height: 1em; /* weird trick for monospace fonts to NOT add to height of container p */
        }
      `}
      </style>
    </kbd>
  )
}

export const KBD = Keyboard
