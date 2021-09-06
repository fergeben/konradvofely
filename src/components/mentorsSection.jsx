import React from "react";

const Mentor = ({ name, img, linkTo }) => (
    <a
        href={linkTo}
        target="_blank"
        className="flex flex-col sm:w-1/2 place-items-center pointer-events-none"
        onClick={e => e.preventDefault()}
    >
        <img src={img} alt={name} style={{
            width: "250px",
            borderRadius: "100%",
        }} />
        <h5>{name}</h5>
    </a>
);

export default function MentorsSection() {
    return (
        <div id="tanaraim" className="container max-w-5xl mx-auto pt-8 pb-80">
            <h2 className="pb-6">Tanáriam</h2>
            <div className="flex flex-wrap flex-row place-items-center">
                <Mentor name="Gabi" linkTo="https://ceremoniamesterfg.hu" img="https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu/tanaraim_gabi.jpg" />
                <Mentor name="Robi" img="https://my-bucket.eu-central-1.linodeobjects.com/konradvofely_hu/tanaraim_robi.jpg" />
            </div>
        </div>
    );
}