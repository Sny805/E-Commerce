import React, { useCallback, useMemo, useState } from 'react'
import Product from './Product'
import Skeleton from './Skeleton'
import useProduct from './hooks/useProduct';
import HOC from './HOC';
import useBestSeller from './hooks/useBestSeller';

const HOComponent = HOC(Product);

const ProductCart = () => {
  const { products, loading, error } = useProduct("https://fakestoreapi.com/products");
  const [showTopRated, setShowTopRated] = useState(false)
  const [search, setSearch] = useState("")


   const handleSearch=useCallback((e)=>{
      setSearch(e.target.value.toLowerCase())
   },[])

      const toggleTopRated=useCallback(()=>{
           setShowTopRated(prev=>!prev)
      },[])

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
          onChange={handleSearch}
          className="search_input"
        />

        <button
          className={`filter_btn ${showTopRated ? "active" : ""}`}
          onClick={toggleTopRated}
        >
          {showTopRated ? "All Products" : "Top Rated"}
        </button>
      </div>


      <div className='product_cart'>
        {
          loading ? (Array(20).fill("").map((_, i) => <Skeleton key={i} />)) : filteredProducts?.map((product) => {
            const isBestSeller = useBestSeller(product?.rating?.rate)
             console.log(isBestSeller)
            return isBestSeller ? (<HOComponent product={product} key={product.id} />) : (<Product product={product} key={product.id} />)
          })

        }
      </div>
    </>
  )
}

export default ProductCart