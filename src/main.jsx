import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import Shop from "./Pages/Shop.jsx";
import Cart from "./Pages/Cart.jsx";
import ShopContextProvider from "./Context/ShopContext.jsx";
import men_bannner from './Components/Assests/banner_mens.png';
import women_banner from './Components/Assests/banner_women.png';
import kid_banner from './Components/Assests/banner_kids.png';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginSignUp from "./Pages/LoginSignUp.jsx";

//  const basename = '/ecommerce'; // Set this to your base path

const router = createBrowserRouter(
  [
    {
      path : "/",
      element: <App />,
      children: [
        {
          //  path: "/",
           element: <Shop />,
           index : true
        },
        {
          path: "mens",
          element: <ShopCategory category="men" banner={men_bannner} />,
        },
        {
          path: "womens",
          element: <ShopCategory category="women" banner={women_banner} />,
        },
        {
          path: "kids",
          element: <ShopCategory category="kid" banner={kid_banner} />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/product/:productId",
          element: <Product />,
        },
        {
          path: "/login",
          element: <LoginSignUp />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ],
  //  { basename } // Pass the basename here
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <RouterProvider router={router} />
  </ShopContextProvider>
);
