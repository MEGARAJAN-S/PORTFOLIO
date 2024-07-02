import React from "react";
import Sectiontitle from "../../components/Sectionheader";
import { education } from "../../resource/education";

function Experience(){
    const [selecteditem, setselecteditem] = React.useState(0);
    return (
        <div>
            <Sectiontitle title="Education" />
            <div className="flex py-10 gap-40 sm:flex-col">
                <div className="flex flex-col gap-11 border-l-2 border-tertiary w-1/6 sm:flex-row sm:overflow-x-scroll sm:w-full">
                    {education.map((edu,index) => (
                    <div onClick={() => {
                        setselecteditem(index);
                    }} className="curson-pointer"><h1 className={`text-2xl px-5 ${selecteditem === index ? 'text-tertiary border-l-4 border-tertiary bg-[#98ffb01b] py-5' : 'text-white'}`}>{edu.period}</h1></div>
                    ))}
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-secondary text-4xl sm:text-2xl">{education[selecteditem].name}</h1>
                    <div className="flex flex-wrap gap-5">
                    <h1 className="text-white text-2xl sm:text-xl">{education[selecteditem].gname}</h1>
                    <h1 className="text-white text-2xl sm:text-xl">{education[selecteditem].grade}</h1>
                    </div>
                    <h1 className="text-white text-2xl sm:text-xl">{education[selecteditem].par}</h1>
                </div>
            </div>
        </div>
        
        
    )
}

export default Experience