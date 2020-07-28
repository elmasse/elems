import React from 'react'

export const withPostLayout = (story) => (
  <div className='story-with-post-layout layout'>
    <style jsx>{`
      .layout {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 100vw;
        max-width: 55rem;
        min-height: 100vh;
      }
    `}
    </style>
    {story()}
  </div>
)
