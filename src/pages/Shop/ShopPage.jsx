import React from 'react'
import SHOP_DATA from './ShopData';

import Preview from '../../components/Preview/Preview';


class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }

  }
  render() {
    const { collections } = this.state
    return (
      <div className="shop_page">
        {
          collections.map(({id, ...otherPreviewProps })=> (
            <Preview key={id} {...otherPreviewProps} />
          ))
        }
      </div>
    )

  }
}


export default Shop