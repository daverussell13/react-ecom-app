import React from "react";

import "./collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, id) => id < 4)
          .map(({ id, ...OtherProps }) => (
            <CollectionItem key={id} {...OtherProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
