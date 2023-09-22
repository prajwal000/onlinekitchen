import React from "react";
import momoData from "../Data/momo";

function Momo() {
  return (
    <>
      <section className="container py-5">
        <h2 className=" font">Momos</h2>
        <div className="row">
          {momoData.map((a) => {
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
    </>
  );
}

export default Momo;
