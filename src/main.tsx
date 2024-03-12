import { initializeApp } from "firebase/app";

import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import "./index.css";

import LoginPage from "./screens/LoginPage";
import LandingPage from "./screens/LandingPage";

import Footer from "./Components/Footer";
import MyUrl from "./screens/MyUrl";
import RootLayout from "./layout";
import SignIn from "./screens/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/my-url",
    element: <MyUrl />,
  },
]);

const firebaseConfig = {
  apiKey: 'AIzaSyALjdcXZE1ph92muSvzFXCy6K_PXs4C8EQ',
  authDomain: 'capstone-altschool.firebaseapp.com',
  projectId: 'capstone-altschool',
  storageBucket: 'capstone-altschool.appspot.com',
  messagingSenderId: '312206897373',
  appId: '1:312206897373:web:2e391e1328fdc83bedab34',
  measurementId: 'G-B6B4W96CEF',
};


function App() {
  console.log(import.meta.env)
  return (
    <div
      style={{
        position: "fixed",
        overflow: "scroll",
        inset: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: "1 1 0%" }}>
        <RootLayout>
          <RouterProvider router={router} />
        </RootLayout>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
