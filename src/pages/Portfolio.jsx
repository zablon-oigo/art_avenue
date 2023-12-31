import { Outlet, Link } from "react-router-dom";
import { FaBurger,FaX} from "react-icons/fa6";
import Footer from "../components/Footer";
import { useState } from "react";
export default function Portfolio({img}){
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
                        <Link to="/portfolio" className="text-xl  underline decoration-2 underline-offset-4 hover:no-underline font-medium transition-all hover:delay-300 hover:text-yellow-500 hover:duration-1000 hover:scale-125 hover:-translate-y-1 hover:ease-in-out">Portfolio</Link>
                        <Link  to="/about" className="text-xl font-medium transition-all hover:delay-300 hover:text-yellow-500 hover:duration-1000 hover:scale-125 hover:-translate-y-1 hover:ease-in-out">About</Link>
                        <Link  to="/contact" className=" text-xl font-medium transition-all hover:delay-300 hover:text-yellow-500 hover:duration-1000 hover:scale-125 hover:-translate-y-1 hover:ease-in-out">Contact </Link>
                             
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
            <div className="bg-gray-100 p-10 py-14">
            <h2 className="text-8xl font-bold text-center md:text-start text-yellow-500">My Artwork</h2>
            </div>
            <div className="my-10 mx-10">
                <div className="">
                    <div className=" flex items-center justify-between flex-col-reverse md:flex-row">
                      <div className="md:w-2/5 w-full">
                      <h2 className="md:text-6xl text-4xl font-semibold text-center md:text-start text-yellow-500 capitalize mb-6">abstract painting</h2>
                        <p className="text-xl text-justify  md:text-start font-light text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, laborum, non tempore architecto recusandae beatae in consectetur nihil eius id mollitia molestias qui dignissimos asperiores libero natus quibusdam repellendus atque!</p>
                        <div className="flex items-center justify-center md:justify-start">
                            <button className="border-2 font-medium text-gray-600 hover:bg-teal-500 hover:border-none hover:transition-all hover:translate-y-2 hover:delay-300 hover:duration-700 hover:rounded hover:scale-125 hover:text-white border-gray-800 capitalize px-6 py-3">buy now</button>
                        </div>
                      </div>
                      
                      <div className="md:w-3/4 w-full flex gap-10 items-center md:flex-row flex-col-reverse justify-between">
                            <div className="flex items-center gap-10 justify-between flex-col">
                               <img src={img.abstract1} alt="" className="h-96 w-full object-center object-cover border-8 border-gray-950 hover:transition-all hover:delay-300 hover:duration-700 hover:ease-in-out hover:scale-110 hover:-translate-y-2 cursor-pointer" />
                               <img src={img.abstract2} alt="" className="h-96 w-full object-center object-cover border-8 border-gray-950 hover:transition-all hover:delay-300 hover:duration-700 hover:ease-in-out hover:scale-110 hover:-translate-y-2 cursor-pointer" />
                            </div>
                            <div className="w-full">
                                <img src={img.abstract3} alt="" className="h-96 w-full object-center object-cover border-8 border-gray-950 hover:transition-all hover:delay-300 hover:duration-700 hover:ease-in-out hover:scale-110 hover:-translate-y-2 cursor-pointer" />
                            </div>
                        </div>
                     

                    </div>
                </div>
                <div className="my-20">
                    <div className=" flex items-center justify-between  gap-10 flex-col-reverse md:flex-row">
                      <div className="md:w-3/4 w-full flex gap-10 items-center md:flex-row flex-col-reverse justify-between">
                            <div className="flex items-center gap-10 justify-between flex-col">
                               <img src={img.drawing1} alt="" className="h-96 w-full object-center object-cover border-8 border-gray-950 hover:transition-all hover:delay-300 hover:duration-700 hover:ease-in-out hover:scale-110 hover:-translate-y-2 cursor-pointer" />
                               <img src={img.drawing2} alt="" className="h-96 w-full object-center object-cover border-8 border-gray-950 hover:transition-all hover:delay-300 hover:duration-700 hover:ease-in-out hover:scale-110 hover:-translate-y-2 cursor-pointer" />
                            </div>
                            <div className="w-full">
                                <img src={img.drawing3} alt="" className="h-96 w-full object-center object-cover border-8 border-gray-950 hover:transition-all hover:delay-300 hover:duration-700 hover:ease-in-out hover:scale-110 hover:-translate-y-2 cursor-pointer" />
                            </div>
                        </div>
                        <div className="md:w-2/5 w-full">
                      <h2 className="md:text-6xl text-4xl font-semibold text-center md:text-start text-yellow-500 capitalize mb-6">drawing canvas</h2>
                        <p className="text-xl text-justify  md:text-start font-light text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, laborum, non tempore architecto recusandae beatae in consectetur nihil eius id mollitia molestias qui dignissimos asperiores libero natus quibusdam repellendus atque!</p>
                        <div className="flex items-center justify-center md:justify-start">
                            <button className="border-2 font-medium text-gray-600 hover:bg-teal-500 hover:border-none hover:transition-all hover:translate-y-2 hover:delay-300 hover:duration-700 hover:rounded hover:scale-125 hover:text-white border-gray-800 capitalize px-6 py-3">buy now</button>
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