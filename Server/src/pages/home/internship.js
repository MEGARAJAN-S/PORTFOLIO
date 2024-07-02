import React from "react";
import Sectiontitle from "../../components/Sectionheader";

function Internship(){
    return (
        <div>
            <Sectiontitle title={"Internship Experience"} />
            <div className="flex flex-row gap-5 text-2xl sm:text-xl">
                <h1 className="text-tertiary">2024</h1>
                <h1 className="text-white">I am excited to share I have completed my internship training in Bharat Sanchar Nigam Limited{"(BSNL)"} on Data Networking where I learn about concept of Networking, optical fiber, how Networking happen in industry, different types of Networking medium and many more</h1>
            </div>
        </div>
    )
}

export default Internship