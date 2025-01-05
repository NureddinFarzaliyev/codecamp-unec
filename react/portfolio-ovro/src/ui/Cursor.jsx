import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={40}
      innerScale={1}
      outerScale={1.5}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: '#FFAE00'
      }}
      outerStyle={{
        border: '1px solid #FFAE00'
      }}
    />
  )
}

export default Cursor
