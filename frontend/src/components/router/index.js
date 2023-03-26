import {
    Home,
    SingleProduct,
    ProductList,
    Wishlist,
    Cart,
    SignIn,
    LogIn,
  } from "../../pages/index";
  import { Routes, Route } from "react-router-dom";
  import { Navigate, useLocation } from "react-router-dom";
import { NotFoundPage } from "../../pages/notFoundPage";
  
  export const Router = () => {
    const location = useLocation()
    const useAuth = () => {
      const user_data = localStorage.getItem("token");
      return user_data !== null;
    };
  
    const PrivateRoute = ({ children }) => {
      const auth = useAuth();
      return auth ? children : <Navigate to="/login" state={{ location }} replace />
    };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-list" element={<ProductList />} />
      <Route path="/product/:productId" element={<SingleProduct />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />

      <Route
        path="/wishlist"
        element={
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        }
      />

      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
