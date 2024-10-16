import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>E-wallet</h1>
      </Link>
    </header>
  );
};
