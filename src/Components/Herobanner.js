import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Herobanner() {
  const history = useHistory();
  const order = () => {
    if (!localStorage.getItem("refreshtoken")) {
      history.replace("/");
      alert("please login");
    }
  };
  return (
    <>
      <section className="container py-5">
        <div className="row">
          <div className="col-lg-6 pt-4">
            <p className="text-secondary">
              Online Kitchen is not just a company; it's a platform where
              foodies, home cooks, and aspiring chefs come together to embark on
              a flavorful journey. Our website and mobile app offer a vast array
              of resources and services, providing everything from inspiring
              recipes and high-quality ingredients to kitchen tools and expert
              advice.
            </p>
            <p className="text-secondary">
              At Online Kitchen, we are committed to providing a seamless and
              delightful culinary journey for every user. Our team of food
              experts, chefs, and technology enthusiasts work tirelessly to
              curate the best resources, ensuring you experience the utmost
              satisfaction in your culinary pursuits.
            </p>

            <button className="primary-button" onClick={order}>
              <Link to="/menu">Order Now</Link>
            </button>
          </div>
          <div className="col-lg-6">
            <img
              className="mob-hero-img"
              src={require("../images/hero-image.jpg")}
              height="300px"
              width="600px"
              alt="hero"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Herobanner;
