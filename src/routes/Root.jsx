import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="site-wrapper">
      <Outlet />
    </div>
  );
};

export default Root;
