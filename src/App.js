import { Fragment, useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Cart from "./pages/Cart/Cart";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import { UserContext } from "./contexts/UserContext";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { user, login } = useContext(UserContext);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (user) {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => setProducts(res.data));
    }
  }, [user]);

  useEffect(() => {
    login();
    //TODO: button de log-out
  }, []);

  console.log({ products, user });

  return (
    <div className="app">
      <Router>
        {user ? (
          <Fragment>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/products/:categoryName"
                element={<Category products={products} />}
              />
              <Route
                path="/products/:categoryName/:productId"
                element={<Product />}
              />
            </Routes>
          </Fragment>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
