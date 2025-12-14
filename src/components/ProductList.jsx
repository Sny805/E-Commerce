import React from 'react'
import Product from './Product'
import UseFetch from './hooks/UseFetch'

const ProductCart = () => {

    const {products,loading,error}=UseFetch();
      console.log(products);

       if(loading){
          return <h1>Loading</h1>
       }

  return (
    <div className='product_cart'>
        {
          products?.map((product)=>(
             <Product product={product} key={product.id}/>
          ))
        }
    </div>
  )
}

export default ProductCart