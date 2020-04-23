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
          content: "•••";
          color: var(--main-color);
          text-align: center;
          display: block;
          letter-spacing: .6em;
        }
      `}
      </style>
    </>
  )
}

export const Divider = Hr
