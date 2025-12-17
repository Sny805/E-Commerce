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
      <div>
        <input type="text" onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())} value={search} />
        {/* <button onClick={handleSearch}>Search</button> */}
      </div>
      <button onClick={() => setShowTopRated(true)}>Top Rated Products</button>
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