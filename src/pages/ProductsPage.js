import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import { Link } from "react-router-dom";
import Cart from "./CartPage";
import { initialState } from "../store/cartSlice"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

function ProductsPage() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Products</h1>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
          <Link to="/cart">Cart</Link>
        </Col>

        <Col md={6}>
          <Cart />
        </Col>
      </Row>
      <div>
        { initialState.items }
      </div>
    </Container>
  );
}

export default ProductsPage;
