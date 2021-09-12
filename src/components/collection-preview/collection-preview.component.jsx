import React from "react"

import './collection.styles.scss'

const CollectionPreview = ({title, items}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      {
        items
        .filter((item,id) => id < 4)
        .map(item => (
          <div className="item" key={item.id}>{item.name}</div>
        ))
      }
    </div>
  )
}

export default CollectionPreview