import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useProductContext } from "../context/productContext";

function Specials() {
  const { cartHandler } = useProductContext(); // Access cartHandler from context
  const featuredData = JSON.parse(localStorage.getItem("featured") || []);
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
      <h3 className="text-center py-4">Our Specials</h3>
      <section className="container">
        <div className="row">
          {featuredData.map((featuredProduct, index) => {
            const isProductSelected = selectedProducts[featuredProduct.name];
            return (
              <div className="col-lg-3 my-2" key={index}>
                <div className="card mob-card">
                  <img
                    src={featuredProduct.image}
                    className="card-img-top p-4"
                    alt="..."
                    height="230px"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{featuredProduct.name}</h6>
                    <p className="card-text">{featuredProduct.price}</p>
                    {isProductSelected ? (
                      <span className="sucessful text-light">
                        added to cart
                      </span>
                    ) : (
                      <button
                        className="primary-button"
                        onClick={() => hello(featuredProduct)}
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
      <Footer />
    </>
  );
}

export default Specials;
