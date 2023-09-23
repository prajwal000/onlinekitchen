import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Cart() {
  const increment = (price) => {
    console.log(price);
  };
  const history = useHistory();
  const clear = () => {
    localStorage.removeItem("cart");
    history.push("/cart");
  };
  const [cartData, setCartData] = useState([]);
  const removeItem = (name) => {
    alert(name);
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
        <section className="py-5">
          {cartData && cartData.length === 0 ? (
            <>Nothing to show in Cart</>
          ) : (
            <>
              {" "}
              {cartData.map((product, index) => {
                return (
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
                      <span className="bg-secondary me-3 p-2">
                        <i className="bi bi-dash-lg"></i>
                      </span>
                      1
                      <span
                        className="bg-secondary m-3 p-2"
                        onClick={() => {
                          increment(product.price);
                        }}
                      >
                        <i className="bi bi-plus-lg"></i>
                      </span>
                      {product.price}
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
                );
              })}
            </>
          )}
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
