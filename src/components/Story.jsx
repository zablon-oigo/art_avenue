import { FaQuoteLeft , FaQuoteRight} from "react-icons/fa6";

export default function Story({img}){
    return(
        <>
        <section className="my-10 ">
            <h2 className="text-6xl font-semibold text-center text-yellow-400 mb-8">My Inspiration</h2>
            <div className="w-full bg-about-image bg-center bg-cover bg-clip-border">
                <div className="bg-black bg-opacity-60">
                    <div className="md:px-12 md:py-12 px-6 py-6 flex items-center md:flex-row flex-col-reverse justify-between">
                        <div className="md:w-3/4 w-full bg-white rounded-xl p-10 shadow-2xl">
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 justify-items-center place-content-center justify-center ">
                            <div className="col-span-1 md:mx-4 mx-0">
                                <img src={img.artist} alt="" className="md:-rotate-12 shadow-2xl  skew-y-6 md:skew-y-0 hover:scale-110 hover:ease-in-out hover:transition-all hover:duration-700 hover:delay-300 rounded-2xl  w-full mb-4" />
                                
                            </div>
                            <div className="md:col-span-2 col-span-1 mx-0  md:mx-4">
                                
                                <h2 className="text-4xl mb-2 px-2 text-yellow-500 font-semibold capitalize text-center md:text-start">My story</h2>
                                <p className="text-xl -mx-12 text-justify px-6  md:-mx-4  md:text-start text-gray-500 line-clamp-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sapiente voluptates modi minima consequuntur et excepturi odit reprehenderit vel asperiores. Id libero similique provident labore veniam impedit aliquam ipsam nihil excepturi nostrum tempora quam vero, corrupti quibusdam. Inventore, autem rem.</p>
                                <div className="mt-6 mx-2">
                                    <a href="" className="text-lg text-center text-yellow-500 hover:text-yellow-700 capitalize">readmore.....</a>
                                </div>
                            </div>
                            
                        </div>
                 
                        </div>
                        <div className="md:w-1/4 w-full mx-4 relative ">
                            <p className="text-lg text-center  text-cyan-500 font-semibold  font-mono">
                        <FaQuoteLeft className=" text-white text-2xl inline-flex justify-start "/>
                                <span className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Voluptates, eveniet.</span>
                                <FaQuoteRight className=" text-white text-2xl  inline-flex items-end justify-end"/><br></br>
                                   <span className=" text-white text-center capitalize "> &#8212; john doe</span>
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    );
}