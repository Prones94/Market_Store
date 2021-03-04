import React from 'react'
import Items from '../Items/Items'

import './Preview.styles.scss'

const Preview = ({ title, items }) => (
    <div className="collection">
      <h1 className="collection__title">{title.toUpperCase()}
      </h1>
      <div className="collection__preview">
        {items
            .filter((item, idx) => idx < 4)
            .map((item) => (
            <Items key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )

export default Preview
