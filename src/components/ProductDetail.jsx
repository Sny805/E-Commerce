import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSingleProduct from "./hooks/useSingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItem } from "./store/cartSlice";

const ProductDetail = () => {
  const { prodId } = useParams();
  const { loading, error, product } = useSingleProduct(prodId)
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch()


  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!product) return null;

  const { title, description, price, category, image, rating, id } = product;


  const handleAddToCart = () => {
    dispatch(addItems(product))
  }

  return (
    <div className="product-detail">
      {/* Left - Image */}
      <div className="product-detail__image">
        <img src={image} alt={title} />
      </div>

      {/* Right - Details */}
      <div className="product-detail__info">
        <h1>{title}</h1>
        <p className="category">{category}</p>

        <div className="rating">
          ⭐ {rating?.rate} ({rating?.count} reviews)
        </div>

        <h2 className="price">₹ {price}</h2>

        <p className="description">{description}</p>
        {
          cartItems.find((item) => item.id == id) ?
           (<button className="remove_from_cart" onClick={()=>dispatch(removeItem(id))}>Remove From Cart</button>)
            : (<button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>)
        }


      </div>
    </div>
  );
};

export default ProductDetail;
