import React, { useEffect, useState } from 'react'

const useSingleProduct = prodId => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    useEffect(() => {
        fetchProductDetails();
    }, [prodId]);



    return {product,loading,error}
}

export default useSingleProduct