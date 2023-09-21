import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Chicken from "../Pages/Chicken";
import Momo from "../Components/Momo";
import Matka from "../Pages/Matka";
import Indian from "../Pages/Indian";
import Burger from "../Pages/Burgers";
import Pizza from "../Pages/Pizzas";
import Aboutus from "../Pages/Aboutus";
import Contactus from "../Pages/Contactus";
import Cart from "../Pages/Cart";
import Order from "../Pages/Order";

const Routes = () => {
  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/chicken" component={Chicken} />
      <Route path="/momo" component={Momo} />
      <Route path="/matka" component={Matka} />
      <Route path="/indian" component={Indian} />
      <Route path="/burgers" component={Burger} />
      <Route path="/pizza" component={Pizza} />
      <Route path="/aboutus" component={Aboutus} />
      <Route path="/menu" component={Menu} />
      <Route path="/contact" component={Contactus} />
      <Route path="/cart" component={Cart} />
      <Route path="/order" component={Order} />
    </>
  );
};
export default Routes;
