import React, { useContext, useState } from 'react'
import { useProfile } from './components/hooks/useProfile'
import { ThemeContext } from './components/utills/ThemeContext'

export const Profile = () => {
   const {isDark} = useContext(ThemeContext)
  console.log(isDark)

    const { userDetails, error } = useProfile()
      const { name, location, avatar_url, bio, followers, following } =
            userDetails;
    return (
       <div className="profile-card">
                <img className="avatar" src={avatar_url} alt={name} />

                <h2 className="name">{name}</h2>
                <p className="location">{location || "Location not available"}</p>
                <p className="bio">{bio || "No bio available"}</p>

                <div className="stats">
                    <span>Followers: {followers}</span>
                    <span>Following: {following}</span>
                </div>


            </div>
    )
}
