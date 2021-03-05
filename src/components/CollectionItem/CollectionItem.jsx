import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import Button from '../Button/Button';

import './CollectionItem.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection__item'>
      <div
        className='collection__item_image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection__item_footer'>
        <span className='item__name'>{name}</span>
        <span className='item__price'>{price}</span>
      </div>
      <Button onClick={() => addItem(item)} inverted>
        Add to cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);