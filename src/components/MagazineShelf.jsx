import React, {useState} from 'react'
import image from '../images/nectarin.png'
import ProductCard from './ProductCard'
// import ProductList from './ProductList'

const MagazineShelf = () => {
  const [products, setProducts] = useState([
    { productName: 'Nectarine', productImage: image },
    { productName: 'Watermelon', productImage: image },
    { productName: 'Melon', productImage: image },
    { productName: 'Pear', productImage: image },
    { productName: 'Nectarine', productImage: image },
    { productName: 'Watermelon', productImage: image },
    { productName: 'Melon', productImage: image },
    { productName: 'Nectarine', productImage: image },
    { productName: 'Watermelon', productImage: image },
    { productName: 'Melon', productImage: image },
    { productName: 'Pear', productImage: image },
    { productName: 'Nectarine', productImage: image },
    { productName: 'Watermelon', productImage: image },
    { productName: 'Melon', productImage: image }
  ])

  return (
    <div className='magazines-shelf bl'>
      { products.map(product =>
          <ProductCard product={product} />
        )} 
    </div>
  )
}

export default MagazineShelf