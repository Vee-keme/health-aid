import React from "react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 700px)");
  const flexBetween = "flex justify-between items-center ";

  return (
    <nav>
      <div className="flex justify-between items-center fixed top-0 py-6 w-full ">
        <div className={`${flexBetween} w-5/6 mx-auto`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <h1 className="text-darkBlue text-xl font-bold">Healthaid</h1>

            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-3/5`}>
                <div className={`${flexBetween} gap-8`}>
                  <Link>Home</Link>
                  <Link>About</Link>
                  <Link>Find Hospital</Link>
                </div>

                <div className={`${flexBetween} gap-8`}>
                  <button className="bg-blue-700 py-2 px-4 rounded">
                    Login
                  </button>
                  <button>Signup</button>
                </div>
              </div>
            ) : (
              <div>bars</div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
