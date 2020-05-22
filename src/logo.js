import React from 'react'

export const Logo = ({ size = '90px', className, inline = false, ...props }) => (
  <span className={[className, 'logo'].join(' ')} {...props}>
    <span className="color">E</span><span className="color">le</span><br/>
    <span className="color">M</span><span className="neutral">ent</span><br/>
    <span className="color">S</span>
    <style jsx>{`
    --size: calc(${size}/3);
    .logo {
      display: ${inline ? 'inline-block': 'block'};
      font-size: var(--size);
      font-family: 'Fira Code';
      letter-spacing: calc(var(--size) * .2);
    }

    .logo span.color {
      display: inline-block;
      background-color: var(--action-color);
      min-width: var(--size);
      letter-spacing: 0;
      font-weight: 700;
      text-align: center;
    }

    .logo span.color:nth-child(2) {
      margin-left: calc(var(--size) * -.1);
    }

    .logo span.neutral {
    }
  `}</style>      
  </span>
)
