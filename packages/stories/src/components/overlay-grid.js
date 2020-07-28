import React from 'react'

export default ({ spacing, gridColor, show, children }) => {
  return show  ? (
    <div className='story-with-vertical-rhythm-grid root'>
      <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
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
      </svg>
      <div className="content">
        {children}
      </div>
      <style jsx>{`
        div.root {
          position: relative;
          pointer-events: none;
        }

        div.content {
          pointer-events: auto;
        }
        
        svg {
          position: absolute;
          opacity: .8;
        }

        :global(h1),
        :global(h2),
        :global(h3),
        :global(h4),
        :global(h5),
        :global(h6) { background-color: rgba(0,0,255, .1); }

        :global(p) { background-color: rgba(0,0,0, .1); }
      `}</style>
    </div>
  ) : children
}
