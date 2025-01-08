import React from 'react'

const SectionHeader = ({text}) => {
  return (
    <div className='section-header'>
        <h1>{text}</h1>

        <ul className='section-header-decor'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>

        <p>
        Nunc molestie mi nunc, nec accumsan libero dignissim sit amet. Fusce sit amet tincidunt metus. Nunc eu risus suscipit massa dapibus blandit.
        </p>

    </div>
  )
}

export default SectionHeader
