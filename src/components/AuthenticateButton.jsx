function AuthenticateButton({label, onClick}){
    return(
        <button onClick={onClick}
            className="w-[411px] h-[70px] bg-[#0061FF] rounded-[10px] shadow-lg shadow-[#19918F] 
                       text-white font-semibold text-[24px] leading-[100%] tracking-[0%] text-center
                       shadow-[0px_0px_10px_0px_#19918F]"
        >{label}</button>
    )
    
}
export default AuthenticateButton