import Footer from '../components/Footer'
export default function About ({img}){
    return (
        <>
        <section className="">
            <div className="bg-gray-100 px-20 py-20">
                <h2 className="md:text-8xl text-6xl font-bold text-yellow-500 text-center md:text-start">About Me</h2>
            </div>
            <div className="my-16 mx-10">
                <div className="flex items-center md:flex-row flex-col-reverse justify-between">
                    <div className="md:w-2/5 w-full">
                        <h2 className="md:text-6xl text-4xl text-center md:text-start text-yellow-500 font-semibold mb-6">Canvas is life....</h2>
                        <div className="">
                            <p className="md:columns-2 columns-lg text-justify md:text-start text-lg text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, sunt, facere harum laudantium architecto doloribus modi, assumenda voluptates voluptatum vel asperiores. Perferendis deserunt iste reiciendis delectus eius fugit quis id. Sint quas quam optio eaque sed rem, odit architecto tenetur ad libero provident molestias neque eligendi totam nam ducimus aut. Unde molestiae delectus esse nam quam animi voluptatibus tempore. Corrupti sequi eius repudiandae architecto, tempore corporis at atque soluta odio cum sit voluptates quaerat sed veniam reprehenderit eum! Eligendi, velit.</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <img src={img.artist} alt="" className="object-cover object-center w-full rounded-full shadow-2xl mb-6 hover:transition-all hover:ease-in-out hover:delay-300 hover:duration-700 hover:-translate-y-2 hover:scale-110" />
                    </div>
                </div>

            </div>
            <div className="bg-story-image bg-cover bg-local bg-clip-border bg-right bg-origin-padding ">
            <div className="bg-black  my-16   bg-opacity-60  md:h-[48rem] h-[36rem]">
                    <div className="inline-flex md:justify-end justify-center items-end px-20 md:py-20 py-6 text-white">
                       <div className="md:w-1/2 w-full -mx-4">
                       <h3 className="text-3xl text-center mx-4 md:text-start font-semibold mb-2">I am</h3>
                        <h2 className="md:text-5xl text-4xl text-yellow-500 mx-4 text-center md:text-start capitalize mb-6">jane doe</h2>
                        <div className="">
                        <p className="text-lg  mb-6 md:text-xl -mx-20 text-center  leading-relaxed  md:mx-4   md:text-start ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, dignissimos exercitationem! Illo fuga deserunt quaerat autem eum at quod quos ducimus voluptates! Amet doloribus, cumque maiores exercitationem magni eius consectetur veniam, quibusdam repudiandae beatae nihil. Impedit explicabo, illo ea, magni repellat dolor tempore itaque ad, maiores voluptate consectetur libero eligendi?</p>
                          
                          <p className="font-sign capitalize text-4xl text-end">jane doe</p>
                        </div>
                       </div>
                    </div>
            </div>
            </div>
            <div className="my-6 mx-10">
                <div className="flex items-center md:flex-row flex-col justify-between">
                    <div className="md:w-1/2 w-full">
                        <img src={img.abstract1} alt="" className="h-96 w-full object-cover object-center border-8 border-gray-950 mb-6" />
                    </div>
                    <div className="md:w-2/5 w-full">
                        <h2 className="mb-6 text-yellow-500 md:text-6xl text-5xl text-center md:text-start">Popular painting</h2>
                        <p className="text-lg text-center md:text-start mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vel et officia deleniti. Deleniti ipsam similique hic nisi blanditiis. Pariatur!</p>
                        <div className="flex items-center justify-center md:justify-start">
                            <button className="text-lg font-medium border border-gray-950 px-6 py-3 hover:bg-teal-500 hover:text-white hover:border-0 hover:transition-all hover:scale-x-125 hover:delay-300 hover:duration-700 hover:rounded-xl uppercase text-gray-800">see gallery</button></div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}