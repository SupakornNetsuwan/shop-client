import React from "react";
import Lottie from "lottie-react";
import loading from "../../../public/loading.json";

const LoadingAnimation = () => {
  return <Lottie animationData={loading} loop={true} autoPlay />;
};

export default LoadingAnimation;
