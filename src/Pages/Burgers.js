import React, { useState } from "react";
import burger from "../Data/Burgerdata";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useProductContext } from "../context/productContext";

function Home() {
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
                    <p className="card-text">Rs {product.price}</p>
                    <div className="text-center">
                      {isProductSelected ? (
                        <span className="sucessful text-light mb-5">
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
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
