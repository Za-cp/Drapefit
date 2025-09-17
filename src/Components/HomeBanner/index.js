import React, { Suspense } from "react";
import "../../Components/HomeBanner/HomeBanner.css";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const HomeBanner = () => {
  return (
    <div className="homeBannerContainer">
      <div className="homeBannerSection">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="spline-container">
            <Spline scene="https://prod.spline.design/pry-Y-2U5rzeJAmc/scene.splinecode" />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default HomeBanner;