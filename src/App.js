import React from "react";
import {
  //Route,
  RouterProvider,
  //Routes,
  createBrowserRouter,
} from "react-router-dom";
//import Navigation from "./Components/Navigation";
//import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
//import About from "./Components/About";
import Courses from "./Components/Courses";
//import MyAppBar from "./Components/MyAppBar";
//import NavLink from "./Components/NavLink";
//import HomePage from "./Components/HomePage";
//import ProductPage from "./Components/ProductPage";
//import MyAppBar from "./Components/MyAppBar";
import RootLayout from "./Components/RootLayout";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";
import ErrorPage from "./Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/Courses", element: <Courses /> },
      { path: "/Signup", element: <Signup /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />

    //  <NavLink />
    // <MyAppBar />
    //  <Navbar />
    //  <Navigation />
    // <Routes>
    //   <Route path="/" element={<Home />}></Route>
    //   <Route </Routes>path="/About" element={<About />}></Route>
    //   <Route path="/Courses" element={<Courses />}></Route>
    // </Routes>
    // </div>
  );
}

export default App;
