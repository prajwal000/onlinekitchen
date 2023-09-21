import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Chickens from "../Data/chicken.json";

function Chicken() {
  const addToCart = (productImage, productPrice, productName) => {
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
          {Chickens.map((product) => {
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

                    <button
                      id="btn"
                      href="#"
                      className="primary-button"
                      onClick={() =>
                        addToCart(product.image, product.price, product.name)
                      }
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
      <Footer />
    </>
  );
}

export default Chicken;
