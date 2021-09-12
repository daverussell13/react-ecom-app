import React from "react"

import './collection.styles.scss'

const CollectionPreview = ({title, items}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
    </div>
  )
}

export default CollectionPreview