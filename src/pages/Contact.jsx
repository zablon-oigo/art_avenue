export default function Contact (){
    return (
        <>
                <section className="">
            <div className="bg-gray-100 px-20 py-20">
                <h2 className="md:text-8xl text-6xl font-bold text-yellow-500 text-center md:text-start">Contact</h2>
            </div>
            <div className="my-20 mx-12">
                <div className="flex items-center justify-between flex-col md:flex-row">
                     <div className="md:w-1/2 w-full">

                     </div>
                     <div className="md:w-1/2 w-full">
                        <h2 className="md:text-6xl mb-6 text-yellow-500 text-5xl text-center md:mb-8 font-semibold capitalize">say hello</h2>
                        <div className="flex items-center justify-between md:flex-row flex-col-reverse">
                            <div className="mb-6">
                                <h2 className="text-4xl mb-6 font-semibold text-yellow-500 text-center md:text-start uppercase">get in touch</h2>
                                     <p className="text-md text-center mb-2 font-medium"> 
                                     janedoe@mail.com
                                     </p>
                                     <p className="text-md text-center mb-2 font-medium">
                                        +254-78-956-565
                                     </p>
                                     <p className="text-md text-center mb-2 font-medium">
                                        7th Steet Kimathi, Nairobi
                                     </p>
                            </div>
                            <div className="mb-6">
                            <h2 className="text-4xl font-semibold text-yellow-500 text-center md:text-start uppercase">connect</h2>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
            </section>
          </>
    )
}