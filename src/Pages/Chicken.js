import Header from "../Components/Header";
import Footer from "../Components/Footer";
import chickenData from "../Data/chicken";
import { useProductContext } from "../context/productContext";

function Chicken() {
  const { cartHandler } = useProductContext(); // Access cartHandler from context

  return (
    <>
      <Header />
      <section className="container">
        <h2 className="py-4 font">Chicken</h2>
        <div className="row">
          {chickenData.map((product) => {
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
                      onClick={() => cartHandler(product)} // Pass the product
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
