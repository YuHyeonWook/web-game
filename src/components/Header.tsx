import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";

const Header = () => {
  return (
    <header className="w-full bg-neutral-10 sticky top-0 border-solid border-b-1 border-indigo-900 shadow-custom-light z-[1000]">
      <nav className="flex justify-between items-center px-6 py-4">
        <Link to="/">Web Game</Link>
        <ul className="flex gap-3 items-center">
          <li>
            <GoogleLogin />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
