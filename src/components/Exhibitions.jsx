import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
export default function Exhibition({img}){
    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ];
    return (
        <>
        <section className="my-20">
            <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row  items-center justify-between">
                <div className="md:w-2/5 w-full">
                        <h2 className="text-6xl text-center md:text-start text-yellow-500 font-bold mb-6">Exhibitions</h2>
                        <p className="text-xl text-center md:text-start mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam debitis fuga error labore, blanditiis beatae ea vero quae voluptate esse.</p>
                </div>
                <div className="md:w-1/2 w-full">
                    <img src={img.library} alt="" className="rounded h-96 object-cover object-center w-full border-8 border-gray-950 hover:transition-all hover:duration-1000 hover:delay-500 hover:ease-in-out hover:scale-110 hover:-translate-y-2" />
                    <div className="mt-6">
                        <p className="text-xl text-center">10 Dec 2023 - 20 Jan 2024 </p>
                        <h3 className="uppercase text-center text-2xl md:text-4xl font-semibold text-yellow-500">British Embassy Mega Meet</h3>
                    </div>
                </div>
                
            </div>
            <section className="">
            <div className="my-14  grid md:grid-cols-3 grid-cols-1 place-content-center justify-center justify-items-center gap-3  ">

           
                
                   <div className="mb-6">
                   <img src={img.library3} alt="" className="h-80 border-8 border-gray-200 w-full rounded-xl object-center object-cover" />
                   <div className="mt-6">
                   <p className="text-xl text-center">10 Jan 2024 - 20 Feb 2024 </p>
                   <h3 className="uppercase text-center text-2xl  font-semibold text-yellow-500">USA Embassy Mega Expo</h3>
               </div>
                   </div>
               <div className="mb-6">
                   <img src={img.library2} alt="" className="h-80 w-full border-8 border-gray-200 rounded-xl object-center object-cover" />
                   <div className="mt-6">
                   <p className="text-xl text-center">10 Feb 2024 - 20 March 2024 </p>
                   <h3 className="uppercase text-center text-2xl  font-semibold text-yellow-500">Nairobi national park Expo</h3>
               </div>
               </div>
               <div className="mb-6">
                   <img src={img.library1} alt="" className="border-8 border-gray-200 h-80 rounded-xl w-full object-center object-cover" />
                   <div className="mt-6">
                   <p className="text-xl text-center">10 June 2024 - 20 July 2024 </p>
                   <h3 className="uppercase text-center text-2xl  font-semibold text-yellow-500">British Embassy Mega Meet</h3>
                   </div>
               
               </div>
              

                  
           
                
               

            </div> 
            </section>
        </section>
        </>
    );
}