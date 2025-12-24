import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
} from "./store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h2>Your cart is empty 🛒</h2>;
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />

          <div className="cart-info">
            <h3>{item.title}</h3>
            <p>₹ {item.price}</p>

            <div className="qty-controls">
              <button onClick={() => dispatch(decreaseQty(item.id))}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQty(item.id))}>
                +
              </button>
            </div>

            <button
              className="remove-btn"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <hr />
      <div className="total_price">
        <h2>Total: ₹ {totalPrice.toFixed(2)}</h2>

        <button className="clear-cart" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button></div>
    </div>
  );
};

export default Cart;
