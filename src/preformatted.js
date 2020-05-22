import React from 'react'

export const Preformatted = ({ children, border = false, ...props }) => {
  return (
    <pre {...props}>
      {children}
      <style jsx>
        {`
        pre {
          margin: calc(var(--spacing) * 3) 0;
          padding: calc(var(--spacing) * 2);
          border: ${border ? '1px solid var(--main-color)' : '0px'};
          ${!border && 'border-radius: 0px;'}
          overflow: auto;
          line-height: 1;
          font-size: 1rem;
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
