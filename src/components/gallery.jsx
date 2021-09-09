import React from "react";
import ImageGallery from "react-image-gallery";

const bucketBase = "https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu";
const images = [
    "239378473_212196054212724_8876144197604290167_n.jpg",
    "2Z0A6448.jpg",
    "DM-337.jpg",
    "DM-344.jpg",
    "240548754_564809141503848_8895774937204750461_n.jpg",
    "DM-346.jpg",
    "2Z0A6821.jpg",
    "240699214_863441301216075_7462389520096223836_n.jpg",
    "2Z0A6930.jpg",
    "lakodalom145.jpg",
    "239649183_527435045151129_3708705381949613551_n.jpg",
    "lakodalom220.jpg",
    "DM-351.jpg",
    "2Z0A6460.jpg",
    "240613546_927959667755836_5107061920040075635_n.jpg",
    "lakodalom16.jpg",
    "240638256_1740242829516310_1288487950803296889_n.jpg",
    "lakodalom266.jpg",
    "DM-349.jpg",
    "240629911_165361052400581_5253546523754668232_n.jpg",
    "2Z0A6886.jpg",
    "DM-365.jpg",
    "240640993_856551211904909_7510189309255581123_n.jpg",
    "DM-384.jpg",
    "240675910_868453344078008_7149248878078040940_n.jpg",
    "DM-396.jpg",
    "240678554_380825286790345_2341646389501379904_n.jpg",
    "DM-400.jpg",
    "lakodalom134.jpg",
    "lakodalom211.jpg",
    "2Z0A6823.jpg",
    "240694469_355267719628856_6142350047467398336_n.jpg",
    "DM-403.jpg",
    "2Z0A6455.jpg",
    "DM-514.jpg",
    "240708495_404848061284342_2071323884431765800_n.jpg",
    "DM-536.jpg",
    "240737126_353427289758702_1923717387804273623_n.jpg",
    "DM-570.jpg",
    "240805431_542751253597121_5565034665001842087_n.jpg",
    "DM-599.jpg",
    "240871748_2979737975645079_190050994018355557_n.jpg",
    "DM-608.jpg",
    "DM-332.jpg",
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