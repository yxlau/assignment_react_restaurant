import React from 'react'

const Header = ({elements}) => {
  const {title, description, cta} = elements

return (
  <div className="jumbotron" id="header">
  <h1>{title}</h1>
  <p>{description}</p>
  <p><a className="btn btn-primary btn-lg" href="#" role="button">{cta}</a></p>
</div>

  )
}

export default Header