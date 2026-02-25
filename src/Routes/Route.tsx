import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import SkillsPage from "../Pages/SkillsPage";
import Contact from "../Pages/Contact";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      {path : "skills", element : <SkillsPage/>},
      {path : "contact",element : <Contact/>}
    ],
  },
]);
