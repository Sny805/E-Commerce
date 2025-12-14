import React from 'react'

const Product = ({product}) => {
     const {image,title,rating,price}=product
  return (
    <div className='product'>
        <div className='img_div'>
        <img className='product_img' src={image} alt="img" />
        </div>
         <h1>{title}</h1>
         <p>ratings :{rating?.rate}</p>
         <p>Price : {price}</p>
    </div>
  )
}

export default Product