import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/slice/cartSlice';
import { getProductInCart } from '../../redux/selectors';

const ProductCard = ({ product }) => {
  const { image, productName } = product;

  const dispatch = useDispatch();
  const productsInCart = useSelector(getProductInCart);

  const addProductToCart = (productToCart) => {
    const { productName, image, price, _id } = productToCart;

    const newProduct = {
      productName: productName,
      id: _id,
      quantity: 1,
      price: price,
      image: image,
    };
    
    if (productsInCart.length === 0) {
      dispatch(addProduct(newProduct));
    } else {
      let count = 0;
      for (let i = 0; i < productsInCart.length; i++) {
        if (productsInCart[i].productName === productToCart.productName) {
          count += 1
        };
      };
      if (!count) {
      dispatch(addProduct(newProduct));
      };
    };
  };

  return (
    <div className='product-сard'>
      <div className='image-product bl'>
        <img className='img' src={`data:image/png;base64,${image}`} alt='' width='300px' height='140px' />
      </div>
      <div className='name-product'>
        <span>{productName}</span>
      </div>
      <div className='product-button'>
        <button onClick={() => addProductToCart(product)} className='button btnh'>Add to Cart</button>
      </div>
    </div>
  )
};

export default ProductCard
