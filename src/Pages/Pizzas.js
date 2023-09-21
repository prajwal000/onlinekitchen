import React from "react";
import Pizza from "../Data/Pizza.json";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Pizzas() {
  return (
    <>
      <Header />
      <section className="container py-5">
        <h2 className=" font">Pizza</h2>
        <div className="row">
          {Pizza.map((a) => {
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
                    <button href="#" className="primary-button">
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

export default Pizzas;
