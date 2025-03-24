import { useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/solid"; // For dropdown icon
import { ChevronDownIcon } from "@heroicons/react/24/solid"; 

function Dropdown({data, label, showId = false}){
    const [selectedData, setSelectedData] = useState(data[0]);

    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-[20px] p-6 mt-3">
            <div className="relative w-[551px]">
                {/* Label "To" */}
                <div className="absolute top-1/2 transform -translate-y-1/2 w-[112px] h-[60px] rounded-[21px] flex items-center justify-center bg-gray-200 text-black font-bold text-[24px] leading-[100%] tracking-[0%] font-['Open_Sans'] pointer-events-none">
                    {label}
                </div>

                {/* Dropdown */}
                <select
                    value={selectedData ? selectedData.id : ""}
                    onChange={(e) => {
                        const selected = data.find((r) => r.id.toString() === e.target.value);
                        setSelectedData(selected || null); // Ensure state updates properly
                    }}
                    className="w-[551px] h-[60px] py-3 pl-[135px] pr-12 
                        rounded-[21px] bg-[#FAFBFD] text-gray-900 font-regular
                        shadow-[0px_0px_10px_0px_rgba(91,91,91,0.1)] 
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 
                        appearance-none"
                >
                    {data.map((item) => (
                        <option key={item.id} value={item.id}>
                            {showId ? `${item.id} (${item.name})` : item.name}
                        </option>
                    ))}
                </select>


                {/* Dropdown Icon */}
                <ChevronDownIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h- text-black pointer-events-none z-10" />
            </div>
        </div>
    );
}

export default Dropdown