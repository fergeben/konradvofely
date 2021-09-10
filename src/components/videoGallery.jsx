import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import ReactPlayer from "react-player";

const bucketBase = "https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu";

const videos = [
  "video-1630843095.mp4",
  "video-1630842827.mp4",
  "video-1630843278.mp4",
];

function Video(src) {
  return <ReactPlayer
    className="react-player"
    url={[{ src, type: "video/mp4" }]}
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
  />;
}

export default function VideoGallery() {
  return (
    <div className="flex flex-row flex-wrap content-around place-content-center">
      {videos.map(f =>
        <div className="m-3" style={{width: "225px", height: "300px"}}>
          <ReactPlayer
            className=""
            url={[{ src: `${bucketBase}/${f}`, type: "video/mp4" }]}
            controls
            playing
            width="225px"
            height="300px"
            light={`${bucketBase}/preview.${f.replace("mp4", "png")}`}
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload"
                }
              }
            }}
          />
        </div>
      )}
    </div>
  );
}