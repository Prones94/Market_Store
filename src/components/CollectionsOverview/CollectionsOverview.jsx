import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Preview from '../Preview/Preview'

import { selectCollections } from '../../redux/shop/shop.selectors'

import './CollectionsOverview.styles.scss'

const CollectionsOverview = ({ collections }) => (
  <div className="collections__overview">
    {collections.map(({id, ...otherCollections}) =>(
      <Preview key={id} {...otherCollections} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)