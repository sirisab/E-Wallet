import { Link } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";

export const Header = () => {
  return (
    <header>
      <IoSettingsSharp className="hidden" />

      <Link to="/">
        <h1>E-wallet</h1>
      </Link>

      <IoSettingsSharp size="1.5em" />
    </header>
  );
};
