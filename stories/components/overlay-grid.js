import React from 'react'

export default ({ spacing, gridColor, show, children }) => {
  return (
    <div className='story-with-vertical-rhythm-grid root'>
      {show && <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <pattern id='smallGrid' width={spacing} height={spacing} patternUnits='userSpaceOnUse'>
            <path d={`M ${spacing} 0 L 0 0 0 ${spacing}`} fill='none' stroke={gridColor} strokeWidth='0.5' />
          </pattern>
          <pattern id='grid' width={spacing * 10} height={spacing * 10} patternUnits='userSpaceOnUse'>
            <rect width={spacing * 10} height={spacing * 10} fill='url(#smallGrid)' />
            <path d={`M ${spacing * 10} 0 L 0 0 0 ${spacing * 10}`} fill='none' stroke={gridColor} strokeWidth='1' />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#grid)' />
      </svg>}
      <style jsx>{`
        div.root {
          position: relative;
        }

        svg {
          position: absolute;
          opacity: .8;
        }
      `}
      </style>
      {children}
    </div>
  )
}
