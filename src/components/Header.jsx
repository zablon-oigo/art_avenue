export default function Header({img}){
    return (
        <>
        <header className="bg-hero-image relative top-0 z-10 bg-cover bg-center">
            <section className="bg-black top-0 right-0 w-full min-h-screen bg-opacity-70">
                <nav className="p-6 text-white max-w-6xl mx-auto flex items-center justify-between">
                    <div className="">
                        <a href="" className="text-3xl">ArtHaven</a>
                    </div>
                    <div className="space-x-6">
                        <a href="" className="text-xl font-medium transition-all hover:delay-300 hover:text-yellow-500 hover:duration-1000 hover:scale-75 hover:-translate-y-1 hover:ease-in-out">Home</a>
                        <a href="" className="text-xl font-medium transition-all hover:delay-300 hover:text-yellow-500 hover:duration-1000 hover:scale-125 hover:-translate-y-1 hover:ease-in-out">Portfolio</a>
                        <a href="" className="text-xl font-medium transition-all hover:delay-300 hover:text-yellow-500 hover:duration-1000 hover:scale-125 hover:-translate-y-1 hover:ease-in-out">About</a>
                        <a href="" className="text-xl font-medium transition-all hover:delay-300 hover:text-yellow-500 hover:duration-1000 hover:scale-125 hover:-translate-y-1 hover:ease-in-out">Contact</a>

                        </div>
                </nav>
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center md:flex-row flex-col-reverse justify-between">
                        <div className="md:w-2/5">
                            <h2 className="font-semibold text-2xl text-white uppercase text-center md:text-start mb-2">All my artworks are </h2>
                            <h2 className="md:text-8xl text-6xl text-center md:text-start font-bold text-yellow-500  capitalize mb-6">inspired by nature</h2>
                            <p className="text-lg text-white mb-6 md:text-start text-center">
                            Welcome to my art emporium, a haven for creativity. Discover <span className="underline decoration-4 underline-offset-8 decoration-yellow-500 font-semibold">masterpieces</span> and artisan treasures, where brushstrokes meet imagination. Explore a world of color, inspiration, and boundless artistic expression.
                            </p>
                            <div className="flex items-center justify-center md:justify-start">
                                <button className="uppercase border px-6 py-3 hover:rounded-xl text-white hover:bg-yellow-500 hover:border-0 hover:transition-all hover:duration-1000 hover:delay-500 hover:scale-110">see gallerry</button>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full ">
                                 
                                  <img src={img} alt="" className="  hover:scale-110 hover:-translate-y-2 my-20 rounded hover:transition-all hover:delay-300 hover:duration-700 " />
                                  
                           
                        </div>
                    </div>
                </div>
            </section>

        </header>
        </>
    )
}