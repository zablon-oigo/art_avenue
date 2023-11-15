import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaBars, FaBurger,FaX} from "react-icons/fa6";
export default function Home(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    <>
    <section className="">
    <nav className=" p-6 mb-6 text-white max-w-6xl mx-auto flex items-center justify-between">
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
                        <Link to="/" className="text-xl underline decoration-2 underline-offset-4 hover:no-underline font-medium transition-all hover:delay-300 hover:text-yellow-500 hover:duration-1000 hover:scale-75 hover:-translate-y-1 hover:ease-in-out">Home</Link>
                        <Link to="/portfolio" className="text-xl font-medium transition-all hover:delay-300 hover:text-yellow-500 hover:duration-1000 hover:scale-125 hover:-translate-y-1 hover:ease-in-out">Portfolio</Link>
                        <Link  to="/about" className="text-xl font-medium transition-all hover:delay-300 hover:text-yellow-500 hover:duration-1000 hover:scale-125 hover:-translate-y-1 hover:ease-in-out">About</Link>
                        <Link  to="/contact" className=" text-xl font-medium transition-all hover:delay-300 hover:text-yellow-500 hover:duration-1000 hover:scale-125 hover:-translate-y-1 hover:ease-in-out">Contact</Link>
                             
                        </div>
                        <Outlet/>
                </nav>
                <section className={`absolute bg-white top-20 right-0 w-full origin-top animate-open-menu  ${isMenuOpen ? 'block' : 'hidden'}`}>
                            <ul className="space-y-4 mx-2 my-4">
                                <li className="text-lg font-semibold hover:bg-gray-100 hover:rounded px-6 py-4    hover:text-yellow-500 hover:translate-x-2 hover:transition-all hover:delay-300 hover:duration-700 "><a href="" className="">Home</a></li>
                                <hr className="border-1 border-gray-400" />
                                <li className="text-lg font-semibold hover:bg-gray-100 hover:rounded px-6 py-4 hover:text-yellow-500 hover:translate-x-2 hover:transition-all hover:delay-300 hover:duration-700"><a href="" className="">Portfolio</a></li>
                                <hr className="border-1 border-gray-400" />

                                <li className="text-lg font-semibold hover:bg-gray-100 hover:rounded px-6 py-4 hover:text-yellow-500 hover:translate-x-2 hover:transition-all hover:delay-300 hover:duration-700"><a href="" className="">About</a></li>
                                <hr className="border-1 border-gray-400" />

                                <li className="text-lg font-semibold hover:bg-gray-100 hover:rounded px-6 py-3 hover:text-yellow-500 hover:translate-x-2 hover:transition-all hover:delay-300 hover:duration-700"><a href="" className="">Contact</a></li>
                           
                            </ul>
                </section>
    </section>
    </>
}