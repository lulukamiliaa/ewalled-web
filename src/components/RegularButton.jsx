function RegularButton({onClick}){
    return(
        <button 
            className="w-[551px] h-[70px] bg-[#0061FF] text-white text-lg font-semibold 
                       rounded-[10px] text-[24px] shadow-[0px_0px_10px_0px_#19918F] mt-4 mb-2"
            onClick={onClick} // Add click event
        >
            Transfer
        </button>
    )
}
export default RegularButton