import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSingleProduct from "./hooks/useSingleProduct";

const ProductDetail = () => {
  const { prodId } = useParams();
  const { loading, error, product } = useSingleProduct(prodId)


  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!product) return null;

  const { title, description, price, category, image, rating } = product;

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

        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
