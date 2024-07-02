import React from "react";

function Sider(){
    return (
        <div className="bg-primary fixed left-0 bottom-0 px-5 py-10 sm:static">
            <div className="flex flex-col sm:flex-row gap-2 items-center text-4xl sm:text-3xl sm:justify-center text-gray-400">
                <a href="https://www.linkedin.com/in/megarajan-s-794a30242/" target="_blank"><i className="ri-linkedin-box-line"></i></a>
                <a href="https://github.com/MEGARAJAN-S" target="_blank"><i className="ri-github-fill"></i></a>
                <div className="w-[1px] h-32 bg-gray-600 sm:hidden">
                </div>
            </div>
        </div>
    )
}

export default Sider