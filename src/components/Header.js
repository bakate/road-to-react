import React from 'react'

const Header = ({ text }) => {
  return (
    <button type="button" name="title" data-testid="h1bb" className="yo">
      I'm {text}
    </button>
  )
}

export default Header
