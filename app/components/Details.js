"use client"
import { useState } from "react";
import { parkDetails } from "../utils/content"

// Components for section just after images of parks and before footer
export default function Details() {
    // React hook to control expanded state of details
    const [activeIndices, setActiveIndices] = useState({});

    // Toggles different park details being expanded
    const toggleIndex = (index) => {
        setActiveIndices((prev) => ({
          ...prev,
          [index]: !prev[index],
        }));
    };

    return (
        <div className="lg:grid lg:grid-cols-2 mt-4 lg:gap-8 lg:pt-8">
            {parkDetails.map(({park, description}, index) => (
                <div key={index}>
                    <div className="flex justify-between p-4 text-4xl rounded-full hover:bg-gray-200 lg:hover:bg-transparent hover:cursor-pointer lg:hover:cursor-auto " onClick={() => toggleIndex(index)}>
                        <h3 className="font-serif">{park}</h3>
                        <div className="font-roboto lg:hidden">{activeIndices[index] ? "-" : "+"}</div>
                    </div>
                    <p className={`lg:block p-4 text-xl ${activeIndices[index] ? "block" : "hidden"}`}>{description}</p>
                </div>
            ))}
        </div>
    )
    
};