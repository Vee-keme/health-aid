import React from "react";
import useMediaQuery from "../Hooks/useMediaQuery";

import bannerImage from "../assets/images/svg/bannerImage.svg";

const Home = () => {
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isAboveMediumScreens = useMediaQuery("(min-width: 700px)");
  const flexBetween = "flex justify-between items-center ";

  return (
    <main className="w-full bg-softBlue pt-[6%]">
      <div className="">
        {/* <div className={`${flexBetween}`}> */}
        <div className={`flex items-start justify-between`}>
          {/* LEFT TEXT */}
          <div className={`${flexBetween} h-full py-10 px-8 flex-col gap-8`}>
            <h2 className="text-darkBlue font-bold text-4xl text-center">
              Find the nearest hospital
              <br /> to you and make an appointment
            </h2>
            <p className="font-semibold text-wrap">
              Discover Your Perfect Care: Find <br />
              Your Hospital, Anytime, Anywhere!
            </p>

            <div className={`flex flex-col gap-8`}>
              <button>Get started</button>
              <button>Learn more</button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          {/* <div> */}
          <img src={bannerImage} alt="Banner Image" className="w-3/5" />
          {/* </div> */}
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
