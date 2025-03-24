import React from "react";

function InputForm({ type, name, value, onChange, placeholder }) {
  return (
    <div className="w-[411px] h-[60px]">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-full px-4 py-3 border border-gray-300 rounded-[10px] bg-[#FAFBFD] focus:outline-none focus:ring-2 focus:ring-blue-500 
               placeholder-black placeholder:font-semibold placeholder:text-[18px] placeholder:leading-[100%] placeholder:tracking-[0%]"
      />
    </div>
  );
};

export default InputForm;
