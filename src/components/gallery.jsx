import React from "react";
import ImageGallery from "react-image-gallery";

const bucketBase = "https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu";
const images = [
    "2Z0A6448.jpg",
    "2Z0A6821.jpg",
    "2Z0A6930.jpg",
    "lakodalom134.jpg",
    "lakodalom211.jpg",
    "2Z0A6455.jpg",
    "2Z0A6823.jpg",
    "lakodalom145.jpg",
    "lakodalom220.jpg",
    "2Z0A6460.jpg",
    "2Z0A6886.jpg",
    "lakodalom16.jpg",
    "lakodalom266.jpg"
];

export default function Gallery() {
    const items = images.map(i => ({
        original: bucketBase + "/" + i,
        thumbnail: bucketBase + "/thumb." + i,
    }));

    return (
        <div>
            <ImageGallery items={items} />
        </div>
    );
}