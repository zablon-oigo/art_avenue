export default function Main({img}){
    return (
        <>
       <section className="bg-slate-400">
       <section className="p-10 ">
            <div className=" flex md:flex-row flex-col-reverse items-center  gap-4 justify-between">
                      <div className="md:w-1/2 w-full md:p-8">
                        <img src={img.drawing} alt="" className="object-center border-8 border-gray-950 h-96 md:h-full hover:transition-all hover:duration-1000 hover:delay-500 hover:ease-in-out object-cover w-full  rounded hover:scale-110 hover:-translate-y-2"/>
                        <div className="mt-6">
                            <h2 className="font-semibold text-4xl mb-4 text-yellow-500">Abstract Acrylic</h2>
                            <p className="text-md text-white font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, maxime! Beatae, harum iusto. Corporis earum at asperiores qui dicta perferendis.</p>
                        </div>
                      </div>
                     <div className="md:w-1/2 w-full md:mx-8">
                        <h2 className="md:text-8xl text-6xl font-bold mb-6 text-yellow-500 text-center ">Recent Artworks</h2>
                        <p className="text-lg  text-justify mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odit est, nostrum, corporis eligendi sit perferendis, eum deleniti ipsa eaque excepturi dicta ut? Iusto asperiores debitis ullam maiores nihil? Possimus!</p>
                         <div className="mb-8 flex items-center justify-center  md:justify-start ">
                            <button className="border-2 border-white px-6 py-3 uppercase text-white hover:transition-all hover:delay-300 font-medium hover:duration-1000 hover:ease-in-out hover:border-0 hover:scale-105 hover:bg-teal-500 hover:text-white hover:rounded-xl">see gallery</button>
                         </div>
                         <img src={img.drawing2} alt="" className="rounded border-8 border-gray-950 hover:transition-all hover:duration-1000 hover:delay-500 hover:ease-in-out hover:scale-110 hover:-translate-y-2" />
                         <div className="mt-6">
                            <h2 className="font-semibold text-4xl mb-4 text-yellow-500">Abstract Acrylic</h2>
                            <p className="text-md text-white font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, maxime! Beatae, harum iusto. Corporis earum at asperiores qui dicta perferendis.</p>
                        </div>
                     </div>
            </div>
        </section>
       </section>
        </>
    );
}