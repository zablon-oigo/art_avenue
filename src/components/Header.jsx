import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaBurger,FaX} from "react-icons/fa6";
export default function Header({img}){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <header className="bg-hero-image relative top-0 bg-cover bg-center">
            <section className="bg-black top-0 right-0 w-full min-h-screen bg-opacity-70">
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
                        <Link  to="/contact" className=" text-xl font-medium transition-all hover:delay-300 hover:text-yellow-500 hover:duration-1000 hover:scale-125 hover:-translate-y-1 hover:ease-in-out">Contact </Link>
                             
                        </div>
                        <Outlet/>
                </nav>
                <div className="max-w-6xl mx-auto ">
                    <div className="flex items-center md:flex-row flex-col-reverse justify-between">
                        <div className="md:w-2/5 my-6">
                            <h2 className="font-semibold text-2xl text-white uppercase text-center md:text-start mb-2">All my artworks are </h2>
                            <h2 className="md:text-8xl text-6xl text-center md:text-start font-bold text-yellow-500  capitalize mb-6">inspired by nature</h2>
                            <p className="text-lg text-white mb-6 md:text-start mx-4 md:mx-0 text-center">
                            Welcome to my art emporium, a haven for creativity. Discover <span className="text-teal-500 font-semibold">masterpieces</span> and artisan treasures, where brushstrokes meet imagination. Explore a world of <span className="underline decoration-4 underline-offset-8 decoration-yellow-500">color</span>, <span className="underline decoration-4 underline-offset-8 decoration-yellow-500">inspiration</span>, and <span className="">boundless</span> artistic expression.
                            </p>
                            <div className="flex items-center justify-center md:justify-start">
                                <button className="uppercase border-2 px-6 py-3 hover:rounded-xl text-white hover:bg-yellow-500 hover:border-0 hover:transition-all hover:duration-1000 hover:delay-500 hover:scale-110">see gallerry</button>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full -my-20 md:my-0">
                                 
                                  <img src={img} alt="" className=" border-8 border-gray-950 h-96 w-full  object-cover object-bottom md:object-center md:h-full hover:scale-110 hover:-translate-y-2 my-20 rounded hover:transition-all hover:delay-300 hover:duration-700 " />
                                  
                           
                        </div>
                    </div>
                </div>
                <section className={`absolute bg-white top-20 md:hidden right-0 w-full origin-top animate-open-menu  ${isMenuOpen ? 'block' : 'hidden'}`}>
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
            </section>

        </header>
        </>
    )
}