import React from 'react'

export const Hr = ({ ...props }) => {
  return (
    <>
      <hr {...props} />
      <style jsx>
        {`
        hr {
          margin: 60px 0 40px 0;
          border: none;    
        }

        hr:before {
          content: var(--divider-content, '${'\u2022\u2022\u2022'}');
          color: var(--main-color);
          text-align: center;
          display: block;
          letter-spacing: var(--divider-letter-spacing, .6em);
        }
      `}
      </style>
    </>
  )
}

export const Divider = Hr
