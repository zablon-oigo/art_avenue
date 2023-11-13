import React, { useState, useEffect } from 'react';
import { FaPinterest,FaSquareFacebook,FaSquareTwitter,FaSquareYoutube} from "react-icons/fa6";
export default function Footer(){
   
        const [myYear, setMyYear] = useState('');
      
        useEffect(() => {
          const currentYear = new Date().getFullYear();
          setMyYear(currentYear.toString());
        }, [])
    
    return (
        <>
        <footer className="bg-black px-12 py-12 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center flex-col md:flex-row justify-between">
                    <div className="w-full md:w-2/5 mb-6">
                        <h2 className="text-3xl mb-6 font-semibold text-yellow-500">About</h2>
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis vitae itaque ex! Fugiat maxime cum vitae excepturi, sunt repellat saepe?</p>
                    </div>
                    <div className="w-full md:w-1/2 flex  md:flex-row flex-col justify-around">
                        <div className="mb-6">
                        <h2 className="text-3xl font-semibold text-yellow-500">Contact</h2>
                       <div className="space-y-2.5 flex-col flex">
                        <a href="" className="text-lg font-medium">Home</a>
                        <a href="" className="text-lg font-medium">Contact</a>
                        <a href="" className="text-lg font-medium">Privacy Policy</a>
                       </div>
                        </div>
                        <div className="">
                            <h2 className="text-3xl font-semibold mb-6 text-yellow-500">Follow</h2>
                            <div className="space-x-4 flex ">
                                <FaPinterest className="text-2xl"/>
                                <FaSquareFacebook className="text-2xl"/>
                                <FaSquareTwitter className="text-2xl"/>
                                <FaSquareYoutube className="text-2xl"/>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center text-lg">&copy; Copyrights <span id="year">{myYear}</span></p>
            </div>
        </footer>
        </>
    );
}
