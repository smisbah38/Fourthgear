import React from "react";
import LatestCollection from "../components/LatestCollection";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <div>
      <LatestCollection />

      {/* Add an ID to the OurPolicy component */}
      <div id="our-policy">
        <OurPolicy />
      </div>

      {/* <NewsLetterBox /> */}
    </div>
  );
};

export default Home;
