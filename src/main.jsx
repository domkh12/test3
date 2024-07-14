import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DeveloperTemplate from "./pages/template/developerTemplate.jsx";
import BusinessTemplate from "./pages/template/businessTemplate.jsx";
import MarketingTemplate from "./pages/template/MarketingTemplate.jsx";
import PhotographyTemplate from "./pages/template/photographyTemplate.jsx";
import Register from "./pages/auth/Register.jsx";
import LoginSection from "./components/Login/LoginSection.jsx";
import HomepageComponent from "./components/photography/Homepage.jsx";
import AboutComponent from "./components/photography/About.jsx";
import ProjectComponent from "./components/photography/Project.jsx";
import BlogComponent from "./components/photography/Blog.jsx";
import ContactUsComponent from "./components/photography/ContactUs.jsx";
import ReadMoreComponent from "./components/photography/ReadMore.jsx";

// import { Provider } from 'react-redux';
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import MarketingAbout from "./pages/template/MarketingAbout.jsx";
import OtpVerification from "./components/OTP/OtpScreen.jsx";
import AuthGuard from "./pages/auth/AuthGuard.jsx";
import OtpGuard from "./pages/auth/OtpGuard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/developer",
    element: <DeveloperTemplate />,
  },
  {
    path: "/business",
    element: <BusinessTemplate />,
  },
  //Marketing Start
  {
    path: "/marketing",
    element: <MarketingTemplate />,
  },
  {
    path: "/marketing-about",
    element: <MarketingAbout />,
  },
  //Marketing Ending
  {
    path: "/photography",
    element: <PhotographyTemplate />,
  },
  {
    path: "/photography/about",
    element: <AboutComponent />,
  },
  {
    path: "/photography/project",
    element: <ProjectComponent />,
  },
  {
    path: "/photography/blog",
    element: <BlogComponent />,
  },
  {
    path: "/photography/contact",
    element: <ContactUsComponent />,
  },
  {
    path: "/photography/blog/blog-detail",
    element: <ReadMoreComponent />,
  },
  {
    path: "/dashboard",
    element: <AuthGuard component={<Dashboard />} />,
  },
  {
    path: "/login",
    element: <LoginSection />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/register/verify",
    element: <OtpGuard component={<OtpVerification />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
