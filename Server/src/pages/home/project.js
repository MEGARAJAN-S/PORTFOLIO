import React from "react";
import Sectiontitle from "../../components/Sectionheader";

function Project(){
    return (
        <div>
            <Sectiontitle title={"Project"} />
            <div className="flex flex-col gap-11">
            <div className="flex flex-row sm:flex-col gap-5">
                <div className="h-[20vh] sm:h-[15vh] w-1/2 sm:w-full">
                <dotlottie-player src="https://lottie.host/c6615e4e-8be6-433c-ab4e-5b1ce9ecddbf/tqKxABcrfm.json" 
                background="transparent" 
                speed="1" 
                autoplay>
                </dotlottie-player>
                </div>
                <h1 className="text-white text-3xl sm:text-xl w-1/2 sm:w-full">Done a Machine learning project on detecting number of coronavirus cases will be admitted in future using polynomial regression using scitkit-learn library.</h1>
            </div>
            <div className="flex flex-row sm:flex-col gap-5">
                <h1 className="text-white text-3xl sm:text-xl w-1/2 sm:w-full">Done a Artificial Intelligence project on Hand gesture which will detect sign language using convolutional neural network using Tensorflow library. </h1>
                <div className="h-[20vh] sm:h-[15vh] w-1/2 sm:w-full">
                <dotlottie-player src="https://lottie.host/67c50fb0-b8f9-406e-ba82-7fe557109821/B2i0gVDyiW.json" 
                background="transparent" 
                speed="1" 
                autoplay>
                </dotlottie-player>
                </div>
            </div>
            <div className="flex flex-row sm:flex-col gap-5">
                <div className="h-[20vh] sm:h-[15vh] w-1/2 sm:w-full">
                <dotlottie-player src="https://lottie.host/bb44bdf8-1b6f-4cb3-b859-3d8eaa88b3ec/qKnWvKlCbH.json" 
                background="transparent" 
                speed="1" 
                autoplay>
                </dotlottie-player>
                </div>
                <h1 className="text-white text-3xl sm:text-xl w-1/2 sm:w-full">Done a College Social media site in which people of same college upload notes, question bank and can see the different event happening in the college and connect with different people using Django, MySQL and HTML/CSS</h1>
            </div>
            </div>
        </div>
    )
}
export default Project