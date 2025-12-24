import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
     const {image,title,rating,price,id}=product
  return (
     <Link to={`/product/${id}`}>
    <div className='product'>
        <div className='img_div'>
        <img className='product_img' src={image} alt="img" />
        </div>
         <h1 className='text-3xl underline'>{title}</h1>
         <p>ratings :{rating?.rate}</p>
         <p>Price : {price}</p>
          
    </div>
    </Link>
  )
}

export default React.memo( Product);

