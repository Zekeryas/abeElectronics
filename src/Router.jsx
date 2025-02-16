import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results.jsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";

const stripePromise = loadStripe(
  "pk_test_51QtAPgKnIMnNnjtwoDeEpyhmXoUz3hEYZNEPPJNPAKETLxk2qIkhNzVTLcZQ24Su3GqLC9ADbiWikkXr69YKfb1M002crIAIgp"
); 

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectRoute msg={"You must log in to pay"} redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectRoute
              msg={"You must log in to access your orders"}
              redirect={"/orders"}>
              <Orders />
            </ProtectRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
