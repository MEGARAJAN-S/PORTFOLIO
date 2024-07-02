import React from "react";
import Sectiontitle from "../../components/Sectionheader";

function About(){
    const languages = ["Python", "C", "Java", "JavaScript", "HTML", "CSS", "SQL"]
    const skills = ["Django", "React", "Node", "Machine Learning", "AWS"]
    return (
        <div className="py-20">
            <Sectiontitle title={"About"}/>
            <div className="flex items-center gap-5 sm:flex-col">
                <div className="h-[50vh] w-1/2 sm:w-full">
                <dotlottie-player src="https://lottie.host/219e18f4-0299-4f0e-b935-f6c1cf98d515/7AK0FkMM5v.json" 
                background="transparent" 
                speed="1" 
                autoplay></dotlottie-player>
                </div>
                <div className="text-white text-2xl gap-5 w-1/2 sm:w-full flex flex-col sm:text-xl">
                    <p>I am MEGARAJAN S currently pursuing Third year on BTech Computer Science in Internet of Things at Shiv Nadar University, Chennai. I was passionate about programming and started to learn new programming languages.</p>
                    <p>Coding became a hobby for me in young age. So, I concentrated more on my coding skill and stared doing my own projects. I learn programming through my project experience and debugging all the errors in my project.</p>
                    <p>I have learn to build website on my own also I have learn about machine learning and started doing projects in machine learning</p>
                </div>
            </div>
            <div className="flex flex-col py-10 gap-5 sm:gap-3 ">
                <h1 className="text-tertiary text-2xl">Hear are the few coding languages I have been working recently</h1>
                <div className="flex flex-wrap gap-11 py-5">
                    {languages.map((language,index) => (
                        <h1 className="text-tertiary border border-tertiary px-10 py-3 rounded">{language}</h1>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-5 py-10 sm:gap-3 sm:py-2">
                <h1 className="text-tertiary text-2xl ">Hear are the few computer skill I have been working recently</h1>
                <div className="flex flex-wrap gap-11 py-5">
                    {skills.map((skill,items) => (
                        <div className="border border-tertiary px-10 py-3 rounded">
                            <h1 className="text-tertiary">{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default About