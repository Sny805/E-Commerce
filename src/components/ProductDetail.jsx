import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { prodId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://fakestoreapi.com/products/${prodId}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [prodId]);

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
