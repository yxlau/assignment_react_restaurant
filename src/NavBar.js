import React from 'react'
import NavLink from './NavLink'

const NavBar = ({links}) => {
  const pills = links.map((link) => (
    <NavLink link={link} key={link.url} />
    ))

  return (
   <div className="navbar navbar-default">
    <div className="container-fluid">
    <ul className="nav navbar-nav">
    {pills}
    </ul>
    </div>
  </div>
    )
}

export default NavBar