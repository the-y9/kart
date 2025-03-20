import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <p>{item.qty}</p>

            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ₹{totalAmount}</h3>
      <button onClick={handleClearCart}>Clear Cart</button>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
}

export default CartPage;
