import React from "react";
import "./Landing.css";
import landinglogo from "./landingimage.png";
import textile from "../../assets/images/textile.png";
import blouse from "../../assets/images/blouse.png";
import blur from "../../assets/images/blur.png";
import fashion from "../../assets/images/fashion.png";
import maleclothes from "../../assets/images/male-clothes.png";
import fitness from "../../assets/images/fitness.png";
import hanger from "../../assets/images/hanger.png";
import needle from "../../assets/images/needle.png";
import womenclothes from "../../assets/images/woman-clothes.png";
import overalls from "../../assets/images/overalls.png";
import fittingroom from "../../assets/images/fitting-room.png";
import hawaii from "../../assets/images/hawaiian-shirt.png";
import winterhat from "../../assets/images/winter-hat.png";
import hoodie from "../../assets/images/hoodie.png";
import MobileViewCard from "../../sharedcomponents/cards/mobileviewCard/MobileViewCard";
import { Link } from "react-router-dom";

function Landing({}) {
  return (
    <div className="landing">
      <div className="landing__left">
        <img src={landinglogo} alt="landinglogo" />
        <h2 className="landing__left__display">
          get the best trendy-fit
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="animate-charcter">clothes</h3>
              </div>
            </div>
          </div>
          for you
        </h2>
        <p className="landing__left__paragraph">
          {" "}
          Revolutionize your wardrobe with Toned Threads, the app that
          recommends <span>perfect outfits based on your selected filters</span>
          , bringing personalized fashion effortlessly to your fingertips.
        </p>
        <div className="btnBar">
          <p>You are few clicks away</p>
          <Link to={`/formpage`}>
            <button>Try tonedThreads →</button>
          </Link>
        </div>

        <div className="tonedcreator">
          <p>
            Created by
            <a href="https://www.linkedin.com/in/rounit08">Rounit Sinha</a>
          </p>
        </div>
      </div>
      <div className="background-container">
        <img className="small-image" src={textile} alt="Small  1" />
        <img className="small-image" src={blouse} alt="Small  2" />
        <img className="small-image" src={blur} alt="Small  3" />
        <img className="small-image" src={fashion} alt="Small  4" />
        <img className="small-image" src={maleclothes} alt="Small  5" />
        <img className="small-image" src={fitness} alt="Small  6" />
        <img className="small-image" src={needle} alt="Small  7" />
        <img className="small-image" src={hanger} alt="Small  8" />
        <img className="small-image" src={womenclothes} alt="Small  9" />
        <img className="small-image" src={overalls} alt="Small  10" />
        <img className="small-image" src={fittingroom} alt="Small  11" />
        <img className="small-image" src={hawaii} alt="Small  12" />
        <img className="small-image" src={winterhat} alt="Small  13" />
        <img className="small-image" src={hoodie} alt="Small  14" />
        <img className="small-image" src={overalls} alt="Small  15" />
      </div>
      <div className="landing__right">
        <h3>
          Empower Your Wardrobe with Toned Threads, Where Fashion Meets
          Innovation
        </h3>
        <hr />
        <MobileViewCard
          title="Effortless Outfit Recommendations"
          description="With our intuitive app, we've simplified the art of fashion selection.

          Say goodbye to those endless hours spent pondering what to wear."
        />
        <MobileViewCard
          title="Effortless Fashion Revolution"
          description="Join us on a journey to revolutionize your wardrobe.
           With Toned Threads, you'll experience fashion like never before.
           Get the best look as per your body shape and size, most important as per the trend. "
        />
        <MobileViewCard
          title="Streamlined Wardrobe Management"
          description="Tired of the closet chaos? Our smart tools make it easy to manage your wardrobe, so you can spend less time searching and more time looking fabulous"
        />
        <h3>
          Unlock a world of fashion possibilities with <br />
          <span>Toned Threads</span>
        </h3>
      </div>
    </div>
  );
}

export default Landing;
