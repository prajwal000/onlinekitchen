import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Cart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(cartItems);

  const clearAllContacts = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const handleDelete = (image) => {
    const updatedCart = cart.filter((product) => product.image !== image);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Header />
      <section className="container py-5">
        <h2 className="font pb-4">Cart</h2>
        <button onClick={clearAllContacts} className="font clear">
          Clear all Cart
        </button>
        <button className="font clear ms-5">order</button>
        {cart.map((product) => (
          <div className="cart_container" key={product.image}>
            <div className="cart mx-5 my-3 p-3">
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <img
                    src={product.image}
                    width="100px"
                    alt=""
                    height="100px"
                  />
                </div>
                <div className="col-lg-3 pe-5 font">
                  <div>{product.name}</div>
                </div>
                <div className="col-lg-2 font">
                  <div>{product.price}</div>
                </div>
                <div className="col-lg-2 font">
                  <button
                    className="danger"
                    onClick={() => handleDelete(product.image)}
                  >
                    Delete
                  </button>
                </div>
                <div className="col-lg-2 font">
                  <button className="secondary-button" onClick={() => {}}>
                    order
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <p className="pt-5">
          <img
            src={require("../images/hero-image2.jpg")}
            alt=""
            width="1200px"
          />
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Cart;
