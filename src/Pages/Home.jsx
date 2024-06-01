import React from "react";
import useMediaQuery from "../Hooks/useMediaQuery";

import bannerImage from "../assets/images/svg/bannerImage.svg";

const Home = () => {
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isAboveMediumScreens = useMediaQuery("(min-width: 700px)");
  const flexBetween = "flex justify-between items-center ";

  return (
    <main className="w-full">
      <div className="">
        <div className={`${flexBetween}`}>
          <div>
            <h2>Find the nearest hospital to you and make an appointment</h2>
            <p>
              Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!
            </p>

            <div>
              <button>Get started</button>
              <button>Learn more</button>
            </div>
          </div>
          <img src={bannerImage} alt="Banner Image" className="w-3/5" />
        </div>

        {isAboveMediumScreens ? (
          <div className="text-3xl font-bold underline text-red-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A id,
            sapiente molestias commodi incidunt ut. Pariatur qui totam sed
            deserunt. Beatae animi iusto nisi minima laudantium ratione pariatur
            dicta? Quaerat iure voluptas incidunt fuga odit eius ipsa. Dolorem,
            quam ad?
          </div>
        ) : (
          <div className="text-3xl font-bold underline text-purple-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            veritatis placeat animi aspernatur error reprehenderit aliquam
            expedita, libero neque quos eaque illo ut nisi quia repellendus
            nobis tempore quae accusantium iure blanditiis odio. Earum dolore
            distinctio totam! Officiis, ratione ipsum.
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
