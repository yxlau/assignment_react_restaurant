import React from 'react'

const NavLink = ({link}) => {
  const {title, url} = link

  return (
   <li>
   <a href={url}>{title}</a>
   </li>
    )
}

export default NavLink