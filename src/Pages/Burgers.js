import React from "react";
import burgers from "../Data/Burger.json";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Home() {
  const addToCart = (productImage, productName, productPrice) => {
    const productData = {
      image: productImage,
      name: productName,
      price: productPrice,
    };
    const existingCartItems = JSON.parse(localStorage.getItem("cart"));
    existingCartItems.push(productData);
    localStorage.setItem("cart", JSON.stringify(existingCartItems));
  };
  return (
    <>
      <Header />
      <section className="container py-5">
        <h2 className="py-4 font">Burger</h2>
        <div className="row">
          {burgers.map((product) => {
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
                    <p className="card-text">{product.price}</p>) : (
                    <div className="text-center">
                      <button
                        id="btn"
                        href="#"
                        className="primary-button"
                        onClick={() =>
                          addToCart(product.image, product.name, product.price)
                        }
                      >
                        Add to Cart
                      </button>
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
