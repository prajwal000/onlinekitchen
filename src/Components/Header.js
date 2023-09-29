import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          // setUser(result.user);
          const refreshToken = result.user.refreshToken;
          localStorage.setItem("refreshtoken", refreshToken);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());

          localStorage.removeItem("refreshtoken");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  return (
    <>
      <section className="navbarr">
        <nav className="navbar navbar-expand-lg border-bottom">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src={require("../images/logo.png")}
                alt="logo"
                width={"100px"}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {userName && localStorage.getItem("refreshtoken") ? (
              <>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className="nav-link  me-4"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link me-4" to="/aboutus">
                        About us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link me-4" to="/contact">
                        Contact us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link me-4" to="/specials">
                        Our Specials
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link me-4" to="/menu">
                        Menu
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link me-4" to="/order">
                        Order
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link me-4" to="/cart">
                        Cart
                      </Link>
                    </li>
                    <li className="nav-item">
                      <img
                        src={userPhoto}
                        alt={userName}
                        width="50px"
                        className="rounded-circle"
                      />
                    </li>
                    <li>
                      <span
                        className="ms-4  btn btn-danger"
                        onClick={handleAuth}
                      >
                        SignOut
                      </span>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                {" "}
                <button onClick={handleAuth} className="primary-button">
                  login
                </button>
              </>
            )}
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;
