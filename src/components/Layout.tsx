
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Particles } from "./ui/particles";
import CustomCursor from "./Cursor";

const Layout = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Particles />
      </div>
      <CustomCursor/>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
