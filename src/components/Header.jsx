import { Link } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";

export const Header = () => {
  return (
    <header>
      <IoSettingsSharp className="hidden" size="1.3em" />

      <Link to="/">
        <h1>E-Wallet</h1>
      </Link>

      <IoSettingsSharp color="white" size="1.3em" />
    </header>
  );
};
