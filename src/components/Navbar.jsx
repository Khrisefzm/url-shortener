import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 w-full">
      <div className="container p-4 mx-auto flex justify-between">
        <Link to="/" className="text-white text-xl">
          <img
            src="./logo.png"
            alt="logo"
            width={60}
            height={60}
            loading="lazy"
          />
        </Link>
        <div>
          <Link to="/" className="text-gray-300 mx-2">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 mx-2">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
