import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const data = [
    {
        message: `Kovács Konrád kisvőfély.. csupa szív kisember. Örömmel gondolunk vissza az esküvőnk napjára, ugyanis Konrád a legnagyobb magabiztossággal, a legnagyobb hozzáértéssel vezényelte le a Nagy Napunkat. Nagyon örülök, hogy Őt választottuk, egy élmény volt Vele dolgozni. A megbeszélteken felül megannyi meglepetés várt még ránk. Örömet, jókedvet, meghittséget varázsolt.
        Nem ceremóniamester, igazi vőfély. Gyerekkorunk lagzis hangulatát hozta el nekünk. Neki ez nem munka, ez hivatás. 
        Egy mondattal tudnánk jellemezni: Tudja mi kell a népnek!
        Anita&Dávid`,
        image: "https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu/testimonial-1.jpg",
    },
    {
        message: `Meg szeretnénk köszönni még egyszer, hogy a nagy napunkat Te koordináltad végig.
        Nagyon-nagyon jó volt minden. Mindenkitől pozitív visszajelzést kaptunk. :)
        Ezzel a pár soros verssel szeretnénk megköszönni az általad végzett munkát:
        Komolyságból, vidámságból
        Bőven kaptunk tőled,
        Kedvvel, szívvel, figyelemmel
        Elhalmoztál bennünket.
        Viszonzásul fogadd
        Szívből jövő versünket.`,
        image: "https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu/testimonial-2.jpg",
    },
    {
        message: `Konrád volt a vőfély a mi esküvőnkön. Tisztelettudóan és mégis csibészként állt hozzá a feladataihoz. A megfelelő mederben tartotta az egész esküvőnk és lagzink menetrendjét. A közben szükséges szervezési feladatokra is odafigyelt, sőt többször improvizálni is kellett, amelyet sikerrel megoldott. Végig figyelt a lagzi hangulatára, és feldobta azt párszor egy-egy verseléssel, játékkal ahol szükséges volt. Összefoglalva az egész rendezvény egy káosz lett volna a közreműködése nélkül. Köszönjük.`,
        image: "https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu/testimonial-3.jpg",
    },
    {
        message: `Konrád egy talpraesett, magabiztos fiatalember. Kellemes hangszínével, szívhez szóló verseivel sokszor nemcsak a mi, de a velünk ünneplő násznép szemébe is öröm könnyeket csalt. Fiatalsága ellenére nagyon jól koordinálta a násznépet - a kicsiktől a fiatalokon át egészen az idősebb korosztályig - mindenkivel szót értett. Végig figyelmes volt, a váratlan helyzeteket is szempillantás alatt megoldotta. Az egész nap folyamán kontaktban volt velünk, igyekezett mindent úgy lebonyolítani, hogy minden úgy sikerüljön, ahogy azt megálmodtuk, ezáltal egy igazán emlékezetes napot zárjunk. Ez teljes mértékben sikerült, ezúton is köszönjük szépen Konrádnak, remek munkát végzett! Őszinte szívvel ajánljuk minden házasulandó párnak! Keressétek bizalommal`,
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
            textShadow: "0 0 5px #888"
        }}>
            <img src={image} alt="A véleményező" style={{
                filter: "brightness(50%)",
            }} />
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}>
                <p className="">"{message}"</p>
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
                interval={6100}
            >
                {data.map((d, i) => <Testimonial key={i} {...d} />)}
            </Carousel>
        </p>
    </div>;
}