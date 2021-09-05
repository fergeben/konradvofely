import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const data = [
    {
        message: `Nem ceremóniamester, igazi vőfély. Gyerekkorunk lagzis hangulatát hozta el nekünk. Neki ez nem munka, ez hivatás. 
        Egy mondattal tudnánk jellemezni: Tudja mi kell a népnek!
        Anita&Dávid`,
        image: "https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu/testimonial-1.jpg",
    },
    {
        message: `Nagyon-nagyon jó volt minden. Mindenkitől pozitív visszajelzést kaptunk. :)`,
        image: "https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu/testimonial-2.jpg",
    },
    {
        message: `Tisztelettudóan és mégis csibészként állt hozzá a feladataihoz...
        Végig figyelt a lagzi hangulatára, 
        és feldobta azt párszor egy-egy verseléssel, játékkal ahol szükséges volt. 
        Összefoglalva az egész rendezvény egy káosz lett volna a közreműködése nélkül. Köszönjük.`,
        image: "https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu/testimonial-3.jpg",
    },
    {
        message: `...Végig figyelmes volt, a váratlan helyzeteket is szempillantás alatt megoldotta. 
        Az egész nap folyamán kontaktban volt velünk, igyekezett mindent úgy lebonyolítani, 
        hogy minden úgy sikerüljön, ahogy azt megálmodtuk, ezáltal egy igazán emlékezetes 
        napot zárjunk...        
        Őszinte szívvel ajánljuk minden házasulandó párnak! 
        Keressétek bizalommal`,
        image: "https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu/testimonial-4.jpg",
    },
    {
        message: `Konrád a vőfélyek Vőfélye! Mindent kezében tartva és mindenre , 
        mindenkire figyelve vezényelte le a lagzinkat . Nagyon hálásak vagyunk mivel neki köszönhetjük
         hogy olyan jol sikerült a lakodalom . Mindenkinek szívből ajánlom Konrádot`,
        image: "https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu/testimonial-5.jpg",
    },
];

const Testimonial = ({ message, image }) => (
    <div className="">
        <div className="" style={{
            position: "relative",
            textAlign: "center",
            color: "white",
            textShadow: "0 0 5px #888",
        }}>
            <img src={image} alt="A véleményező" style={{
                filter: "brightness(50%)",
            }} />
            <div style={{
                position: "absolute",
                top: "75%",
                left: "10%",
                transform: "translate(-5%, -75%)",
            }}>
                <p className="sm:text-lg md:text-xl lg:text-2xl">"{message}"</p>
            </div>
        </div>
    </div>
);

export default function TestimonialSection() {

    return <div>
        <h2>Vélemények</h2>
        <p className="py-4">
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6500}
            >
                {data.map((d, i) => <Testimonial key={i} {...d} />)}
            </Carousel>
        </p>
    </div>;
}