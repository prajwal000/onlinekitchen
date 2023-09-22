import React from "react";
import burger from "../Data/Burgerdata";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Home() {
  return (
    <>
      <Header />
      <section className="container py-5">
        <h2 className="py-4 font">Burger</h2>
        <div className="row">
          {burger.map((product) => {
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
                    <div className="text-center">
                      <button id="btn" href="#" className="primary-button">
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
