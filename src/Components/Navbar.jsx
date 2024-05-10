import React from "react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 700px)");

  return (
    <nav className="flex w-full justify-between py-2 px-4">
      <div>Carefinder</div>

      {isAboveMediumScreens ? (
        <div className="flex justify-between gap-3">
          <div className="flex justify-between gap-3">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Find Hospital</Link>
          </div>

          <div className="flex justify-between gap-3">
            <button className="bg-blue-700 py-2 px-4 rounded">Login</button>
            <button>Signup</button>
          </div>
        </div>
      ) : (
        <div>bars</div>
      )}
    </nav>
  );
};

export default Navbar;
