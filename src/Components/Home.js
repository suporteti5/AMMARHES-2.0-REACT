import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

/* Images */

import BannerImage from "../Assets/Banners/Banner-001.png";
import BannerImage2 from "../Assets/Banners/Banner-002.png";
import BannerImage3 from "../Assets/Banners/Banner-003.png";
import BannerImage4 from "../Assets/Banners/Banner-004.png";
import BannerImage5 from "../Assets/Banners/Banner-005.png";
import BannerImage6 from "../Assets/Banners/Banner-006.png";

/* Components */
import NavBar from "./NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        emulateTouch={true}
        width="100%"
      >
        <div>
          <img alt="Banner-001" src={BannerImage} />
        </div>
        <div>
          <img alt="Banner-002" src={BannerImage2} />
        </div>
        <div>
          <img alt="Banner-003" src={BannerImage3} />
        </div>
        <div>
          <img alt="Banner-004" src={BannerImage4} />
        </div>
        <div>
          <img alt="Banner-005" src={BannerImage5} />
        </div>
        <div>
          <img alt="Banner-006" src={BannerImage6} />
        </div>
      </Carousel>
    </>
  );
};

export default Home;
