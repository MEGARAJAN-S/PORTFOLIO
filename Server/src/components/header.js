import React from "react";

function Header(){
    return (
        <div className="p-5 bg-primary">
            <h1 className="text-secondary text-4xl font-semibold">MEGARAJAN S</h1>
            <div className="flex flex-wrap justify-end gap-5 sm:gap-1 sm:flex-col sm:justify-end sm:py-4">
            <h1 className="text-white text-2xl font-semibold ">About</h1>
            <h1 className="text-white text-2xl font-semibold ">Experience</h1>
            <h1 className="text-white text-2xl font-semibold ">Contact</h1>
            </div>
        </div>
    )
}

export default Header