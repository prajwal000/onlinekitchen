import React, { useEffect, useState } from "react";
import featuredData from "../Data/Featured";
import { useProductContext } from "../context/productContext";

function Herobanner3() {
  const { cartHandler } = useProductContext(); // Access cartHandler from context

  const [selectedProducts, setSelectedProducts] = useState({});

  const hello = (product) => {
    setSelectedProducts((prevSelectedProducts) => ({
      ...prevSelectedProducts,
      [product.name]: !prevSelectedProducts[product.name],
    }));
    cartHandler(product);
  };

  return (
    <>
      <section className="container">
        <h3 className="font py-3 pt-5">Featured</h3>
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
    </>
  );
}

export default Herobanner3;
