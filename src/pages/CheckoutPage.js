import { useSelector } from "react-redux";

function CheckoutPage() {
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div>
      <h1>Checkout</h1>
      <p>Total Amount: ₹{totalAmount}</p>
      <button>Place Order</button>
    </div>
  );
}

export default CheckoutPage;
