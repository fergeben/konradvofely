import React from "react";
import ReactPlayer from "react-player";

export default function Video() {
    return <ReactPlayer
        url={[{ src: "https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu/kisvofely.mp4", type: "video/mp4" }]}
        controls={true}
        light={"https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu/kisvofely_preview.jpg"}
        config={{
            file: {
                attributes: {
                    controlsList: "nodownload"
                }
            }
        }}
    />;
}