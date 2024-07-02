import React from "react";
import Sectiontitle from "../../components/Sectionheader";

function Achivements(){
    const achivements = [
        {
        period : "2023",
        des : "Awarded Merit cum Means Scholarship from Deenabandu, IAS (Retired), Chairman of SEAC in recognition of outstanding academic achievements and demonstrated financial need.",
        },
        {
        period : "2022",
        des : "Awarded Merit cum Means Scholarship from Mr. Lakshmi Narayanan, former Vice Chairman and ex-CEO of Cognizant and former Chairman of NASSCOM and ICT Academy in recognition of outstanding academic achievements and demonstrated financial need.",    
        }]
    return (
        <div>
            <Sectiontitle title={"Achivements"}/>
            <div>
                {achivements.map((achiv) => (
                    <div className="flex flex-row gap-5 py-5 text-2xl sm:text-xl">
                        <h1 className="text-tertiary">{achiv.period}</h1>
                        <h1 className="text-white">{achiv.des}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Achivements