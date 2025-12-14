


import React, { useEffect, useState } from 'react'

const UseFetch = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            setLoading(true)
            setError(null)
            const res = await fetch("https://fakestoreapi.com/products");
            if (!res.ok) {
                throw new Error("Something went wrong");
            }
            const data = await res.json();
            setProducts(data)
        }
        catch (e) {
            setError(e.message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

return {products,loading,error}

}

export default UseFetch