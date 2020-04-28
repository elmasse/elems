import React from 'react'

export const Img = (props) => {
  return (
    <>
      <img {...props} />
      <style jsx>
        {`
        img {
          display: block;
          margin: auto;
          max-width: 100%;
          height: auto;
          box-shadow: 0 0 4px rgba(0,0,0, .16); 
        }
      `}
      </style>
    </>
  )
}

export const Image = Img
