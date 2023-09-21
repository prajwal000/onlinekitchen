import React from "react";
import Featured from "../Data/Featured.json";

function Herobanner3() {
  const addToCart = (productName, productPrice, productImage) => {
    const productData = {
      image: productImage,
      name: productName,
      price: productPrice,
    };

    // Retrieve existing cart items from local storage
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new product data to the cart
    existingCartItems.push(productData);

    // Store the updated cart items in local storage
    localStorage.setItem("cart", JSON.stringify(existingCartItems));
  };

  return (
    <>
      <section className="container">
        <h3 className="font py-3 pt-5">Featured</h3>
        <div className="row">
          {Featured.map((product) => {
            return (
              <div className="col-lg-3 my-2" key={product.id}>
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
                      className="primary-button"
                      onClick={() =>
                        addToCart(product.name, product.price, product.image)
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
    </>
  );
}

export default Herobanner3;
