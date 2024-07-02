import React from "react";

function Sectiontitle({
    title,
}){
    return (
        <div className="flex gap-10 items-center py-10">
            <h1 className="text-secondary text-3xl">{title}</h1>
            <div className="w-60 h-[1px] bg-tertiary"></div>
        </div>
    )
}

export default Sectiontitle