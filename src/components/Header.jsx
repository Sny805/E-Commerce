import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar">
      <h1 className="logo">Shop</h1>

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
        <li className="cart">🛒 Cart</li>
      </ul>
    </header>
  );
};

export default Header;
