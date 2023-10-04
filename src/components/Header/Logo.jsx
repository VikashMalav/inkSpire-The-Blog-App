import React from 'react'

const Logo = ({ width = "100px" }) => {
  return (
    <div >
      <img src='logo.png' width={width} alt='Logo'/>
    </div>
  )
}

export default Logo