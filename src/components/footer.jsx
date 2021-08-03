import React from "react";

export default function Footer() {
    return (
        <footer className="text-center pb-8">
            <p>
                © {new Date().getFullYear()}
                {` `}
                Kovács Konrád
            </p>
            <p>Az oldalt <a href="mailto:benjamin.ferge@protonmail.com">Ferge Benjámin</a> készítette</p>
        </footer>
    );
}