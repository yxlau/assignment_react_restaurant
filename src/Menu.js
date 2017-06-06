import React from 'react'
import MenuItem from './MenuItem.js'

const Menu = ({items}) => {
  const selections = items.map((item) => (
    <MenuItem item={item} key={item.name} />
    ))

  return (
    <div className="menuWrapper" id="menu">
    <h2>Menu</h2>
    {selections}
    </div>
    )
}

export default Menu