import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

const Root = () => {
  return (
    <div className="site-wrapper">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
