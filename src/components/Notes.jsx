import { useState } from "react";

function Notes({ onChange, value }) {
    return (
        <div className="relative w-[551px] h-[60px] bg-[#FAFBFD] rounded-[20px] flex items-center px-6 mt-5 mb-3">
            <label className="text-black font-semibold text-[16px] font-['Open_Sans']">Notes:</label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                className="w-full h-[50px] bg-[#FAFBFD]
                           rounded-[20px] px-4 py-3 text-black
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>
    );
    
}

export default Notes;
