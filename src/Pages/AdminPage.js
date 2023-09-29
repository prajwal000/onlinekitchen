import React, { useState } from "react";

function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const checkAdmin = (event) => {
    const accessToken = "jsdbbskdjblsknladkjabcjvuyyqfdwuyqgidcbjksbdchb";

    event.preventDefault();
    if (email.length < 1) {
      alert("Please add email ");
    } else if (password.length < 1) {
      alert("please add password");
    }

    //
    if (email === "admin@gmail.com" && password === "123456") {
      alert("logged in");
      localStorage.setItem("accessToken", accessToken);
      window.location.reload();
    } else if (password.length >= 1) {
      alert("your password Doesnot match");
    }
    event.preventDefault(); // Prevent the default form submission behavior
  };
  const signOut = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  const addData = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form input values
    const productName = event.target.elements.productName.value;
    const productPrice = event.target.elements.productPrice.value;
    const productImage = event.target.elements.productImage.value;

    // Check if any of the fields are empty
    if (!productName || !productPrice || !productImage) {
      alert("Please fill in all fields");
      return;
    }

    // Create an object to represent the new product
    const newProduct = {
      name: productName,
      price: parseFloat(productPrice), // Assuming the price is a number
      image: productImage,
    };

    // Retrieve the existing featuredData array from local storage
    const featuredData = JSON.parse(localStorage.getItem("featured")) || [];

    // Add the new product to the array
    featuredData.push(newProduct);

    // Store the updated featuredData array back in local storage
    localStorage.setItem("featured", JSON.stringify(featuredData));

    // Log the product data to the console (optional)
    console.log("Product Data:", newProduct);

    // Clear the form fields
    event.target.reset();
  };

  return (
    <>
      {!localStorage.getItem("accessToken") ? (
        <>
          <section className="admin-panel bg-danger-subtle my-5">
            <form className="p-5" onSubmit={checkAdmin}>
              <div className="mb-3">
                <h4 className="py-3 text-center">Admin Panel</h4>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={handleEmailChange} // Add onChange handler
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={handlePasswordChange} // Add onChange handler
                />
              </div>

              <button type="submit" className="primary-button">
                Submit
              </button>
            </form>
          </section>
        </>
      ) : (
        <>
          <button onClick={signOut}>Sign Out</button>
          <form className="p-5" onSubmit={addData}>
            <div className="mb-3">
              <h4 className="py-3 text-center">Add Product</h4>
              <label htmlFor="productName" className="form-label">
                Name of Product
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                name="productName" // Add the 'name' attribute
                aria-describedby="productNameHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">
                Price of Product
              </label>
              <input
                type="number"
                className="form-control"
                id="productPrice"
                name="productPrice" // Add the 'name' attribute
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productImage" className="form-label">
                Image Link
              </label>
              <input
                type="text"
                className="form-control"
                id="productImage"
                name="productImage" // Add the 'name' attribute
              />
            </div>

            <button type="submit" className="primary-button">
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default AdminPage;
