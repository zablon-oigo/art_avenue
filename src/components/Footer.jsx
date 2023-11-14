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
                        <h2 className="text-3xl mb-6 font-semibold text-yellow-500">Contact</h2>
                       <div className="space-y-2.5 flex-col flex">
                        <a href="" className="text-lg font-medium transition-all hover:delay-300 hover:duration-700 hover:ease-in-out hover:translate-x-2 hover:text-teal-400">Home</a>
                        <a href="" className="text-lg font-medium transition-all hover:delay-300 hover:duration-700 hover:ease-in-out hover:translate-x-2 hover:text-teal-400">Contact</a>
                        <a href="" className="text-lg font-medium transition-all hover:delay-300 hover:duration-700 hover:ease-in-out hover:translate-x-2 hover:text-teal-400">Privacy Policy</a>
                       </div>
                        </div>
                        <div className="">
                            <h2 className="text-3xl font-semibold mb-6 text-yellow-500">Follow</h2>
                            <div className="space-x-4 flex ">
                                <FaPinterest className="text-2xl hover:text-red-400 hover:bg-white hover:rounded-xl hover:rotate-12 hover:ease-in-out hover:transition-all hover:delay-200 hover:duration-700 hover:scale-125"/>
                                <FaSquareFacebook className="text-2xl hover:text-blue-400 hover:bg-white hover:rounded hover:rotate-12 hover:ease-in-out hover:transition-all hover:delay-200 hover:duration-700 hover:scale-125"/>
                                <FaSquareTwitter className="text-2xl hover:text-blue-600 hover:bg-white  hover:rounded hover:rotate-12 hover:ease-in-out hover:transition-all hover:delay-200 hover:duration-700 hover:scale-125"/>
                                <FaSquareYoutube className="text-2xl hover:text-red-600 hover:bg-white  hover:rounded hover:rotate-12 hover:ease-in-out hover:transition-all hover:delay-200 hover:duration-700 hover:scale-125"/>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-4 text-gray-500 text-lg">&copy; Copyrights ArtHaven <span id="year">{myYear}</span></p>
            </div>
        </footer>
        </>
    );
}
