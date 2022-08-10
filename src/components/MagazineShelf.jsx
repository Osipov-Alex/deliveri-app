import React, {useState} from 'react'
import image from '../images/nectarin.png'
import ProductCard from './ProductCard'
// import ProductList from './ProductList'

const MagazineShelf = () => {
  const [products, setProducts] = useState([
    { productName: 'Nectarine', productImage: image, price: 30 },
    { productName: 'Watermelon', productImage: image, price: 10 },
    { productName: 'Melon', productImage: image, price: 15 },
    // { productName: 'Pear', productImage: image },
    // { productName: 'Nectarines', productImage: image },
    // { productName: 'Watermelon', productImage: image },
    // { productName: 'Melon', productImage: image },
    // { productName: 'Nectarine', productImage: image },
    // { productName: 'Watermelon', productImage: image },
    // { productName: 'Melon', productImage: image },
    // { productName: 'Pear', productImage: image },
    // { productName: 'Nectarine', productImage: image },
    // { productName: 'Watermelon', productImage: image },
    // { productName: 'Melon', productImage: image }
  ])

  return (
    <div className='magazines-shelf bl'>
      {products.map(product =>
        <ProductCard product={product} key={product.productName}/>
        )} 
    </div>
  )
}

export default MagazineShelf