import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = (props) => {

  const dispatch = useDispatch();
  const productsInCart = useSelector(state => state.cart.productsInCart);

  const addProduct = (productToCart) => {
    if (productsInCart.length === 0) {
      dispatch({ type: 'ADD_PRODUCT', payload: { productName: productToCart.productName, id: productToCart._id, quantity: 1, price: productToCart.price, image: productToCart.image } });
    } else {
      let count = 0;
      for (let i = 0; i < productsInCart.length; i++) {
        if (productsInCart[i].productName === productToCart.productName) {
          count += 1
        };
      };
      if (!count) {
        dispatch({ type: 'ADD_PRODUCT', payload: { productName: productToCart.productName, id: productToCart._id, quantity: 1, price: productToCart.price, image: productToCart.image } });
      };
    };
  };

  return (
       <div className='product-сard'>
        <div className='image-product bl'>
          <img className='img' src={props.product.productImage} alt='' width='222px' height='140px' />
        </div>
        <div className='name-product'>
          <span>{props.product.productName}</span>
        </div>
        <div className='product-button'>
          <button onClick={() => addProduct(props.product)} className='button'>Add to Cart</button>
        </div>
      </div>
  )
}

export default ProductCard