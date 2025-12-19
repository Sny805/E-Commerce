import React, { useMemo, useState } from 'react'
import Product from './Product'
import Skeleton from './Skeleton'
import useProduct from './hooks/useProduct';

const ProductCart = () => {
  const { products, loading, error } = useProduct(
    "https://fakestoreapi.com/products"
  );
  const [showTopRated, setShowTopRated] = useState(false)
  const [search, setSearch] = useState("")


  const filteredProducts = useMemo(() => {
    let list = products;

    if (showTopRated) {
      list = list.filter(product => product?.rating?.rate >= 4)
    }

    if (search.trim()) {
      list = list.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    return list
  }, [products, search, showTopRated])


  return (
    <>
      <div className="filter_bar">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          className="search_input"
        />

        <button
          className={`filter_btn ${showTopRated ? "active" : ""}`}
          onClick={() => setShowTopRated((prev) => !prev)}
        >
          {showTopRated ? "All Products" : "Top Rated"}
        </button>
      </div>


      <div className='product_cart'>
        {
          loading ? (Array(20).fill("").map((_, i) => <Skeleton key={i} />)) : filteredProducts?.map((product) => (
            <Product product={product} key={product.id} />
          ))

        }
      </div>
    </>
  )
}

export default ProductCart