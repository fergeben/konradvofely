import React from "react";
import ReactPlayer from "react-player";

export default function Video() {
    return (
        <div className="player-wrapper">
            <ReactPlayer
                className="react-player"
                url={[{ src: "https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu/kisvofely.mp4", type: "video/mp4" }]}
                controls
                playing
                width="100%"
                height="100%"
                light={"https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu/kisvofely_preview.jpg"}
                config={{
                    file: {
                        attributes: {
                            controlsList: "nodownload"
                        }
                    }
                }}
            />
        </div>
    );
}