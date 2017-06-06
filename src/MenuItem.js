import React from 'react'

const MenuItem = ({item}) => {
  const {name, description, price} = item

  return (
    <div className="menu-item">
      <div className="item-name">{name}</div>
      <div className="item-description">{description}</div>
      <div className="item-price">{price}</div>
    </div>
    )


}

export default MenuItem