import React from 'react'

const Footer = ({length}) => {
    const year = new Date();
  return (
    <div className='footer'>{length} Task Items</div>
  )
}

export default Footer