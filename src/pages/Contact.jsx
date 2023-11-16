import { FaSquarePhoneFlip ,FaSquareWhatsapp,FaSquareTwitter,FaSquareFacebook,FaShop,FaSquareEnvelope  } from "react-icons/fa6";
import { Outlet, Link } from "react-router-dom";
import { FaBurger,FaX} from "react-icons/fa6";
import Footer from "../components/Footer";
import { useState } from "react";
 export default function Contact ({img}){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
          <nav className="bg-black text-white p-6 flex itmes-center justify-between relative">
        <div className="">
                        <a href="" className="md:text-4xl text-3xl">ArtHaven</a>
                        <hr className="border-dotted border-2 border-yellow-500 w-1/2 rounded-xl" />
                    </div>
                    <button className="md:hidden block" onClick={toggleMenu} >
                    {isMenuOpen ? (
                        <span className="" ><FaX className="text-3xl animate-pulse"/></span>
                    ) : (
                        <span className="" ><FaBurger className="text-3xl animate-pulse"/></span>
                    )}
                                    
                        
                    </button>
                    <div className="space-x-6 md:block hidden">
                        <Link to="/" className="text-xl  font-medium transition-all hover:delay-300 hover:text-yellow-500 hover:duration-1000 hover:scale-75 hover:-translate-y-1 hover:ease-in-out">Home</Link>
                        <Link to="/portfolio" className="text-xl   font-medium transition-all hover:delay-300 hover:text-yellow-500 hover:duration-1000 hover:scale-125 hover:-translate-y-1 hover:ease-in-out">Portfolio</Link>
                        <Link  to="/about" className=" text-xl font-medium transition-all hover:delay-300 hover:text-yellow-500 hover:duration-1000 hover:scale-125 hover:-translate-y-1 hover:ease-in-out">About</Link>
                        <Link  to="/contact" className="underline decoration-2 underline-offset-4 hover:no-underline  text-xl font-medium transition-all hover:delay-300 hover:text-yellow-500 hover:duration-1000 hover:scale-125 hover:-translate-y-1 hover:ease-in-out">Contact </Link>
                             
                        </div>
                        <Outlet/>
          
        </nav>
        <section className={` bg-white absolute top-20 md:hidden  w-full origin-top animate-open-menu  ${isMenuOpen ? 'block' : 'hidden'}`}>
                            <ul className="space-y-4 mx-2 my-4">
                                <li className="text-lg font-semibold hover:bg-gray-100 hover:rounded px-6 py-4    hover:text-yellow-500 hover:translate-x-2 hover:transition-all hover:delay-300 hover:duration-700 "><Link to="/">Home</Link></li>
                                <hr className="border-1 border-gray-400" />
                                <li className="text-lg font-semibold hover:bg-gray-100 hover:rounded px-6 py-4 hover:text-yellow-500 hover:translate-x-2 hover:transition-all hover:delay-300 hover:duration-700"><Link to="portfolio">Portfolio</Link></li>
                                <hr className="border-1 border-gray-400" />

                                <li className="text-lg font-semibold hover:bg-gray-100 hover:rounded px-6 py-4 hover:text-yellow-500 hover:translate-x-2 hover:transition-all hover:delay-300 hover:duration-700"><Link to="about">About</Link></li>
                                <hr className="border-1 border-gray-400" />

                                <li className="text-lg font-semibold hover:bg-gray-100 hover:rounded px-6 py-3 hover:text-yellow-500 hover:translate-x-2 hover:transition-all hover:delay-300 hover:duration-700"><Link to="contact">Contact</Link></li>
                           
                            </ul>
                            <Outlet/>
                </section>
                <section className="">
            <div className="bg-gray-100 px-20 py-20">
                <h2 className="md:text-8xl text-6xl font-bold text-yellow-500 text-center md:text-start">Contact</h2>
            </div>
            <div className="my-20 mx-12">
                <div className="flex items-center justify-between gap-10 flex-col md:flex-row">
                     <div className="md:w-1/2 w-full">
                    <img src={img.map} alt="" className="rounded-lg mb-6" />
                     </div>
                     <div className="md:w-1/2 w-full">
                        <h2 className="md:text-6xl mb-6 text-yellow-500 text-5xl text-center md:mb-8 font-semibold capitalize">say hello</h2>
                        <div className="flex items-center justify-between md:flex-row flex-col-reverse">
                            <div className="mb-6">
                                <h2 className="text-4xl mb-6 font-semibold text-yellow-500 text-center md:text-start uppercase">get in touch</h2>
                                     
                                     <div className="grid grid-cols-1 place-content-center justify-items-center justify-center">
                                     <p className=" inline-flex items-center justify-between text-lg text-center mb-2 font-medium"> 
                                     <FaSquareEnvelope className="mx-4  "/>              janedoe@mail.com
                                     </p>
                                     <p className="inline-flex items-center justify-between text-lg text-center mb-2 font-medium">
                                          <FaSquarePhoneFlip className="mx-4"/>                 +254-78-956-565
                                     </p>
                                     <p className=" inline-flex items-center justify-between text-lg text-center mb-2 font-medium">
                                            <FaShop className="mx-4"/>              7th Steet Kimathi, Nairobi
                                     </p>
                                     </div>
                            </div>
                            <div className="mb-6">
                            <h2 className="text-4xl font-semibold mb-6 text-yellow-500 text-center md:text-start uppercase">connect</h2>
                            <div className="space-x-4 flex items-center justify-center">
                                <FaSquareFacebook className="text-xl  bg-white text-blue-500"/>
                                <FaSquareTwitter className="text-xl  bg-white text-blue-700"/>
                                <FaSquareWhatsapp className="text-xl  bg-white text-green-500"/>
                            </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
            </section>
            <Footer/>
          </>
    )
}

