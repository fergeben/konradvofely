import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax";

export default function ProfileImage() {
    return (
        <div className="">
        {/* <Parallax className="flex-grow custom-class" y={[-20, 20]} tagOuter="figure"> */}
            <div class="profile-image"></div>
            {/* <img src="https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu/lakodalom16-removebg-preview.png" alt="Kovács Konrád"/> */}
            {/* <StaticImage
                src="https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu/lakodalom16-removebg-preview.png"
                width={408}
                quality={100}
                layout="fixed"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Kovács Konrád"
                className="mx-auto"
            /> */}
        {/* </Parallax> */}
        </div>
    );
}