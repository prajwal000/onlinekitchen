import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";
import { useProductContext } from "../context/productContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Cart() {
  const history = useHistory();
  const { order } = useProductContext();
  const [quantity, setQuantity] = useState(1);
  const navi = () => {
    if (!localStorage.getItem("cart")) {
      alert("noting to order");
    } else {
      alert("orderplaced");
      localStorage.removeItem("cart");
      history.push("/order");
    }
  };
  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const clear = () => {
    localStorage.removeItem("cart");
  };
  const [cartData, setCartData] = useState([]);
  const removeItem = (name) => {
    const updatedCart = cartData.filter((item) => item.name !== name);
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  useEffect(() => {
    // Retrieve cart data from local storage
    const storedCartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartData(storedCartData);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <button onClick={clear} className="btn btn-danger mt-3">
          clear cart
        </button>
        <button
          onClick={() => {
            order(cartData, quantity);
            navi(); // Call your second function here
          }}
          className="btn btn-success ms-3 mt-3 order"
        >
          order
        </button>
        <div className="text-end"> Grand total:{} </div>
        <section className="py-5 my-5">
          {cartData && cartData.length === 0 ? (
            <>Nothing to show in Cart</>
          ) : (
            <>
              {" "}
              {cartData.map((product, index) => {
                return (
                  <>
                    <div
                      className="row mb-5 bg-light ps-3 align-items-center fs-6 fw-bolder"
                      key={index}
                    >
                      <div className="col-lg-3">
                        <img
                          src={product.image}
                          alt=""
                          width="200px"
                          height="150px"
                        />
                      </div>
                      <div className="col-lg-3">{product.name}</div>
                      <div className="col-lg-3">
                        <span
                          className="bg-secondary me-3 p-2 pointer"
                          onClick={decrement}
                        >
                          <i className="bi bi-dash-lg"></i>
                        </span>
                        {quantity}
                        <span
                          className="bg-secondary m-3 p-2 pointer "
                          onClick={() => {
                            increment(product.price, quantity);
                          }}
                        >
                          <i className="bi bi-plus-lg"></i>
                        </span>
                        <span className="text-center ms-3">
                          {" "}
                          Rs {product.price * quantity}
                        </span>
                      </div>
                      <div className="col-lg-3">
                        <button
                          className="border-0 bg-danger text-light py-2 px-3 rounded"
                          onClick={() => {
                            removeItem(product.name);
                          }}
                        >
                          Remove Item
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </section>
        <img
          src={require("../images/hero-image2.jpg")}
          alt=""
          width="100%"
          className="pt-5 "
        />
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
