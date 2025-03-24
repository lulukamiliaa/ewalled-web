import { useState } from "react";

function InputAmount({ value, onChange }) {
    const formatToRupiah = (value) => {
        if (!value) return "0,00"; // Default value

        // Remove non-numeric characters
        let numericValue = value.replace(/\D/g, "");

        // Ensure at least 3 characters (avoid leading zeros issue)
        if (numericValue.length < 3) {
            numericValue = numericValue.padStart(3, "0");
        }

        // Extract integer and decimal parts
        let integerPart = numericValue.slice(0, -2) || "0"; 
        let decimalPart = numericValue.slice(-2);

        // Remove leading zeros in the integer part
        integerPart = parseInt(integerPart, 10).toString(); 

        // Add thousands separator `.`
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        return `${integerPart},${decimalPart}`;
    };

    const handleChange = (e) => {
        let rawValue = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric
        onChange(formatToRupiah(rawValue));  // Use onChange prop instead of setAmount
    };

    return (
        <div className="w-[551px] h-[144px] bg-[#FAFBFD] rounded-[20px] p-8 flex flex-col justify-center mt-3">
            {/* Amount Label */}
            <label className="text-gray-700 font-semibold text-[18px] leading-[100%] tracking-[0%] font-['Open_Sans'] mb-2">
                Amount
            </label>

            {/* Input Wrapper */}
            <div className="flex items-center space-x-2 border-b border-gray-400 pb-2">
                {/* Static "IDR" Text */}
                <span className="text-[36px] font-semibold text-gray-900 font-['Open_Sans']">IDR</span>
                
                {/* Input Field */}
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    className="w-full bg-transparent text-[36px] font-semibold 
                               leading-[100%] tracking-[0%] font-['Open_Sans'] text-gray-900 
                               focus:outline-none"
                    placeholder="0,00"
                />
            </div>
        </div>
    );
}

export default InputAmount;
