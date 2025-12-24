import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "./utills/ThemeContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  const cart = useSelector((store) => store.cart.cartItems)
  console.log(cart)
  return (
    <header className="navbar">
      <h1 className="logo"><Link to="/">Shop</Link></h1>

      <ul className="menu_items">
        <li>
          <NavLink to="/men" className="nav_link">
            Men
          </NavLink>
        </li>
        <li>
          <NavLink to="/women" className="nav_link">
            Women
          </NavLink>
        </li>
        <li>
          <NavLink to="/kid" className="nav_link">
            Kids
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav_link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/grocery" className="nav_link">
            Grocery
          </NavLink>
        </li>
        <p className="theme-changer" onClick={

          toggleTheme
        }>
          <i className={`fa-regular fa-${isDark ? "sun" : "moon"}`} />
          &nbsp;&nbsp;{!isDark ? "Dark Mode" : "Light Mode"}
        </p>
        <li className="cart"><NavLink to="/cart">🛒 Cart - {cart.length}</NavLink></li>
      </ul>
    </header>
  );
};

export default Header;
