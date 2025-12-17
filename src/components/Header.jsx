import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='navbar'>
            <h1>Logo</h1>
            <ul className='menu_items'>
              <li>  <Link to="/men">Mens</Link> </li> 
               <li><Link to="/women">Womens</Link></li>
                <li><Link to="/kid">Kids</Link></li> 
                <li>Cart</li>
            </ul>
        </div>
    )
}

export default Header