import React, { useEffect, useState } from 'react'

export const useProfile = () => {
    const [userDetails, setUserDetails] = useState({})
    const [error, setError] = useState("");

    const getUserDetails = async () => {
        try {
            const res = await fetch("https://api.github.com/users/Sny805");
            if (!res.ok) throw new Error("Failed to fetch user data");
            const data = await res.json();
            setUserDetails(data)
        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        getUserDetails();
    }, [])

    return { userDetails, error }

}
