import { FaSquarePhoneFlip ,FaSquareWhatsapp,FaSquareTwitter,FaSquareFacebook,FaShop,FaSquareEnvelope  } from "react-icons/fa6";
import Footer from "../components/Footer";
 export default function Contact ({img}){
    return (
        <>
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

