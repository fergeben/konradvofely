import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { sendMail } from "../services/email";

function Form() {
    const [givenName, setGivenName] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [fullName, setFullName] = useState("");
    useEffect(() => {
        setFamilyName(`${familyName} ${givenName}`);
    }, [givenName, familyName]);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-family-name">
                        Családnév
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Gipsz"
                        value={familyName}
                        onChange={e => setFamilyName(e.target.value)}
                    />
                    {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Gipsz" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-given-name">
                        Keresztnév
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Jakab"
                        value={givenName}
                        onChange={e => setGivenName(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        E-mail cím
                        </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        type="email"
                        placeholder="gipsz.jakab@mail.hu"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <p className="text-gray-600 text-xs italic">Nem osszuk meg harmadik féllel az email címét.</p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Üzenet
                    </label>
                    <textarea
                        className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                        id="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    ></textarea>
                    <p className="text-gray-600 text-xs italic">Mondja el, mire van szüksége!</p>
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                    <button
                        className="shadow bg-blue-200 hover:bg-blue-300 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
                        type="button"
                        onClick={() => {
                            sendMail({
                                email,
                                fullName,
                            }, message)
                                .then(res => res.json())
                                .then(_ => {
                                    toast.success("Üzenetét elküldtük! Köszönjük!");
                                })
                                .catch(err => {
                                    console.error(err);
                                    toast.error("Sajnos valami hiba történt. Kérjük próbálja meg később!");
                                });
                        }}
                    >
                        Elküldés
                    </button>
                </div>
                <div className="md:w-2/3"></div>
            </div>
        </form>
    );
}

export default function Contact() {
    return (
        <div>
            <h3 className="pb-2 text-3xl text-gray-800 leading-none mb-3">Lépjen velem kapcsolatba!</h3>
            <Form />
        </div>
    );
}