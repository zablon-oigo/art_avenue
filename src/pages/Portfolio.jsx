
import Footer from "../components/Footer";
export default function Portfolio({img}){
    return (
        <>
        
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