import React from "react";
import Matkka from "../Data/Matka.json";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Matka() {
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
                      onClick={() => addToCart(a.image, a.price, a.name)}
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

export default Matka;
