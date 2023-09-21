import React from "react";
import momo from "../Data/momo.json";

function Momo() {
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
      <section className="container py-5">
        <h2 className=" font">Momos</h2>
        <div className="row">
          {momo.map((a) => {
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
    </>
  );
}

export default Momo;
