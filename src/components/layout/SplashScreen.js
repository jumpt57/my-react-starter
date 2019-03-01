import React from "react";
import Image from "./Image";

const SplashScreen = ({onNext}) => (
    <div onClick={onNext}>
        <Image className="home-background"
               name="Brand" src="images/brand.png"/>
    </div>
);

export default SplashScreen;