import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Contactus() {
  return (
    <>
      <Header />
      <section className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="form bg-danger-subtle">
              <form className="p-5">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label pt-3"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label pt-3"
                  >
                    Message
                  </label>
                  <textarea
                    rows="6"
                    cols="62"
                    name="comment"
                    form="usrform"
                    placeholder="Type Your Message"
                    className="text-input p-2 border-0"
                  ></textarea>
                </div>

                <button type="submit " className="secondary-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={require("../images/Products-in-real-time-1.webp")}
              alt="sas"
              width="600px"
              className="p-5 "
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contactus;
