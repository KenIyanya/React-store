import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakerapi.it/api/v1/products?_quantity=5')
    .then(response => setProducts(response.data.data))
    
  }, [])
  return (
   
    <div className='products'>
    {
      products ? products.map((product, idx) => (
        <div key = {idx} className='products-card'>
          <h4>{product.name}</h4>
          <div className='products-card-image'>
          <img src={product.image} alt=''/>
        </div>
             
            
             <p>Net-price: {product.net_price}</p>
             <p> Taxes: {product.taxes}</p>
             <p>Price: {product.price}</p>

           </div>
         )) : null
    }
      

    </div>
  )
}

export default Products


