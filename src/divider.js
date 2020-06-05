import React from 'react'

export const Hr = ({ ...props }) => {
  return (
    <>
      <hr {...props} />
      <style jsx>
        {`
        hr {
          margin: var(--hr-margin, calc(var(--spacing) * 6) 0 calc(var(--spacing) * 5) 0);
          border: none;    
        }

        hr:before {
          content: var(--hr-content, "•••");
          color: var(--main-color);
          line-height: var(--base-line-height, 32px);
          font-family: var(--font-family-body);
          font-size: var(--hr-font-size, 1rem);
          text-align: center;
          display: block;
          letter-spacing: var(--hr-letter-spacing, .6rem);
        }
      `}
      </style>
    </>
  )
}

export const Divider = Hr
