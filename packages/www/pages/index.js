import React from 'react'
import { Logo } from 'elems/logo'
import { Blockquote, Paragraph } from 'elems'

export default function Index () {
  return (
    <div className="root">
      <Logo width={200} />
      <Blockquote>
        <Paragraph>Components, not too many.</Paragraph>
      </Blockquote>
      <style jsx>{`
        .root {
          margin: calc(var(--spacing) * 4);
        }
      `}
      </style>
    </div>
  )
}
