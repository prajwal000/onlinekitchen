import React, { useState } from "react";
import Header from "../Components/Header";
import chickenData from "../Data/chicken";
import matka from "../Data/Matka";
import pizzaData from "../Data/Pizza";
import Momo from "../Components/Momo";
import indianData from "../Data/indian";
import Footer from "../Components/Footer";
import burger from "../Data/Burgerdata";
import { useProductContext } from "../context/productContext";

function Menu() {
  const { cartHandler } = useProductContext(); // Access cartHandler from context
  const [selectedProducts, setSelectedProducts] = useState({});

  const hello = (product) => {
    if (localStorage.getItem("refreshtoken")) {
      setSelectedProducts((prevSelectedProducts) => ({
        ...prevSelectedProducts,
        [product.name]: !prevSelectedProducts[product.name],
      }));
      cartHandler(product);
    } else {
      alert("please login to order");
    }
  };
  return (
    <>
      <Header />
      <section className="container">
        <h2 className="py-4 font">Chicken</h2>
        <div className="row">
          {chickenData.map((product) => {
            const isProductSelected = selectedProducts[product.name];
            return (
              <div className="col-lg-3 my-2">
                <div className="card mob-card">
                  <img
                    src={product.image}
                    className="card-img-top p-4"
                    alt="..."
                    height="230px"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{product.name}</h6>
                    <p className="card-text">{product.price}</p>
                    {isProductSelected ? (
                      <span className="sucessful text-light">
                        added to cart
                      </span>
                    ) : (
                      <button
                        className="primary-button"
                        onClick={() => hello(product)}
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
      <section className="container py-5">
        <h2 className=" font">Biryani</h2>
        <div className="row">
          {matka.map((product) => {
            const isProductSelected = selectedProducts[product.name];
            return (
              <div className="col-lg-3 my-2">
                <div className="card mob-card">
                  <img
                    src={product.image}
                    className="card-img-top p-4"
                    alt="..."
                    height="230px"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{product.name}</h6>
                    <p className="card-text">{product.price}</p>
                    {isProductSelected ? (
                      <span className="sucessful text-light">
                        added to cart
                      </span>
                    ) : (
                      <button
                        className="primary-button"
                        onClick={() => hello(product)}
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
      <section className="container py-5">
        <h2 className=" font">Pizza</h2>
        <div className="row">
          {pizzaData.map((product) => {
            const isProductSelected = selectedProducts[product.name];
            return (
              <div className="col-lg-3 my-2">
                <div className="card mob-card">
                  <img
                    src={product.image}
                    className="card-img-top p-4"
                    alt="..."
                    height="230px"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{product.name}</h6>
                    <p className="card-text">{product.price}</p>
                    {isProductSelected ? (
                      <span className="sucessful text-light">
                        added to cart
                      </span>
                    ) : (
                      <button
                        className="primary-button"
                        onClick={() => hello(product)}
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
      {
        <section className="container py-5">
          <h2 className="py-4 font">Burger</h2>
          <div className="row">
            {burger.map((product) => {
              const isProductSelected = selectedProducts[product.name];
              return (
                <div className="col-lg-3 my-2">
                  <div className="card mob-card">
                    <img
                      src={product.image}
                      className="card-img-top p-4"
                      alt="..."
                      height="230px"
                    />
                    <div className="card-body">
                      <h6 className="card-title">{product.name}</h6>
                      <p className="card-text">{product.price}</p>
                      {isProductSelected ? (
                        <span className="sucessful text-light">
                          added to cart
                        </span>
                      ) : (
                        <button
                          className="primary-button"
                          onClick={() => hello(product)}
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
      }
      <section className="container">
        <h2 className="py-4 font">Indian</h2>
        <div className="row">
          {indianData.map((product) => {
            const isProductSelected = selectedProducts[product.name];
            return (
              <div className="col-lg-3 my-2">
                <div className="card mob-card">
                  <img
                    src={product.image}
                    className="card-img-top p-4"
                    alt="..."
                    height="230px"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{product.name}</h6>
                    <p className="card-text">{product.price}</p>

                    {isProductSelected ? (
                      <span className="sucessful text-light">
                        added to cart
                      </span>
                    ) : (
                      <button
                        className="primary-button"
                        onClick={() => hello(product)}
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
