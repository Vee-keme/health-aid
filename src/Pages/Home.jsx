import React from "react";
import useMediaQuery from "../Hooks/useMediaQuery";

const Home = () => {
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isAboveMediumScreens = useMediaQuery("(min-width: 700px)");
  return (
    <div>
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
          expedita, libero neque quos eaque illo ut nisi quia repellendus nobis
          tempore quae accusantium iure blanditiis odio. Earum dolore distinctio
          totam! Officiis, ratione ipsum.
        </div>
      )}
    </div>
  );
};

export default Home;
