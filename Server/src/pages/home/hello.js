import React from "react";
import Sectiontitle from "../../components/Sectionheader";

function Hello(){
    const user = {
        name : "MEGARAJAN S",
        gender : "Male",
        age : "19",
        phone : "6374573281",
        email : "megarajanmegan@gmail.com",
        country : "INDIA",
    }
    return (
        <div>
            <Sectiontitle title={"Pleased to meet you....."}/>
            <div className="">
            <h1 className="text-tertiary text-2xl sm:text-xl">{"{"}</h1>
            <div className="text-2xl sm:text-xl w-2/3 sm:w-full flex flex-row sm:flex-col items-center gap-40 sm:gap-5">
                <div className="p-2 px-5">
                    {Object.keys(user).map((key) => (
                        <div className="flex flex-row gap-5 text-tertiary">
                        <span>{key} :</span>
                        <span>{user[key]}</span>
                        </div>
                    ))}
                </div>
                <div className="h-[40vh] sm:h-[20vh] w-1/3 sm:w-full ">
                <dotlottie-player src="https://lottie.host/3514222c-c732-4e7e-afcc-b1dfede8ed6a/JXlXZDVF48.json" 
                background="transparent" 
                speed="1" 
                autoplay>
                </dotlottie-player>
                </div>
            </div>
            <h1 className="text-tertiary text-2xl sm:text-xl">{"}"}</h1>
            </div>
        </div>

    )
}

export default Hello