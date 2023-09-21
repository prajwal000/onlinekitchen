import React from "react";
import Header from "../Components/Header";
import chicken from "../Data/chicken.json";
import Matkka from "../Data/Matka.json";
import Pizza from "../Data/Pizza.json";
import Momo from "../Components/Momo";
import Burger from "../Data/Burger.json";
import indian from "../Data/indian.json";
import Footer from "../Components/Footer";

function Menu() {
  const addToCart = (productName, productPrice, productImage) => {
    const productData = {
      name: productName,
      price: productPrice,
      image: productImage,
    };
    const existingCartItems = JSON.parse(localStorage.getItem("cart"));
    existingCartItems.push(productData);
    localStorage.setItem("cart", JSON.stringify(existingCartItems));
  };
  return (
    <>
      <Header />
      <section className="container">
        <h2 className="py-4 font">Chicken</h2>
        <div className="row">
          {chicken.map((a) => {
            return (
              <div className="col-lg-3 my-2">
                <div className="card mob-card">
                  <img
                    src={a.image}
                    className="card-img-top p-4"
                    alt="..."
                    height="230px"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{a.name}</h6>
                    <p className="card-text">{a.price}</p>
                    <button
                      href="#"
                      className="primary-button"
                      onClick={() => addToCart(a.name, a.price, a.image)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container py-5">
        <h2 className=" font">Biryani</h2>
        <div className="row">
          {Matkka.map((a) => {
            return (
              <div className="col-lg-3 my-2">
                <div className="card mob-card">
                  <img
                    src={a.image}
                    className="card-img-top p-4"
                    alt="..."
                    height="230px"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{a.name}</h6>
                    <p className="card-text">{a.price}</p>
                    <button
                      href="#"
                      className="primary-button"
                      onClick={() => addToCart(a.name, a.price, a.image)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container py-5">
        <h2 className=" font">Pizza</h2>
        <div className="row">
          {Pizza.map((a) => {
            return (
              <div className="col-lg-3 my-2">
                <div className="card mob-card">
                  <img
                    src={a.image}
                    className="card-img-top p-4"
                    alt="..."
                    height="230px"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{a.name}</h6>
                    <p className="card-text">{a.price}</p>
                    <button
                      href="#"
                      className="primary-button"
                      onClick={() => addToCart(a.name, a.price, a.image)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container py-5">
        <h2 className="py-4 font">Burger</h2>
        <div className="row">
          {Burger.map((a) => {
            return (
              <div className="col-lg-3 my-2">
                <div className="card mob-card">
                  <img
                    src={a.image}
                    className="card-img-top p-4"
                    alt="..."
                    height="230px"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{a.name}</h6>
                    <p className="card-text">{a.price}</p>
                    <button
                      href="#"
                      className="primary-button"
                      onClick={() => addToCart(a.name, a.price, a.image)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container">
        <h2 className="py-4 font">Indian</h2>
        <div className="row">
          {indian.map((a) => {
            return (
              <div className="col-lg-3 my-2">
                <div className="card mob-card">
                  <img
                    src={a.image}
                    className="card-img-top p-4"
                    alt="..."
                    height="230px"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{a.name}</h6>
                    <p className="card-text">{a.price}</p>
                    {a.isAdded ? (
                      <p>Already Added to cart</p>
                    ) : (
                      <button
                        id="btn"
                        href="#"
                        className="primary-button"
                        onClick={() => addToCart(a.name, a.price, a.image)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Momo />
      <Footer />
    </>
  );
}

export default Menu;
