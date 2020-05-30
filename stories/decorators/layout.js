import React from 'react'

export const withPostLayout = (story) => (
  <div className="story-with-post-layout layout">
    <style jsx>{`
      .layout {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 900px;
      }
    `}</style>
    {story()}
  </div>
)
