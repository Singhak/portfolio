import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Milestone from "./components/Milestone.jsx";
// ReactDOM.createRoot(document.getElementById("root")).render(
//   // <React.StrictMode>
//   // <App />
//   // </React.StrictMode>

// );
const router = createBrowserRouter([
  {
    path: "myself/",
    element: <App />,
    errorElement: <h1>Hi Error hai</h1>,
    children: [
      { index: true, element: <Navigate to={"home"} replace={true} /> },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "milestone",
        element: <Milestone />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"myself/home"} replace={true} />,
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
