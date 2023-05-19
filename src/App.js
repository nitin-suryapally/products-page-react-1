import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useState } from "react";
import ProtechtedRoute from "./pages/ProtechtedRoute";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={SharedLayout}>
            <Route index Component={Home} />
            <Route path="about" Component={About} />
            <Route path="products" Component={Products} />
            <Route path="products/:productsid" Component={SingleProduct} />
            <Route path="login" element={<Login setUser={setUser} />} />
            <Route
              path="dashboard"
              element={
                <ProtechtedRoute user = {user}>
                  {" "}
                  <Dashboard user={user} />{" "}
                </ProtechtedRoute>
              }
            />
            <Route path="*" Component={Error} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
