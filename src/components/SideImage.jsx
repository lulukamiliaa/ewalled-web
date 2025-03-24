import image2 from "../assets/image2.svg" 

function SideImage() {
    return (
        <div className="hidden md:block w-full md:w-1/2 h-screen fixed md:absolute right-0">
            <img 
                src={image2} 
                alt="Side Image" 
                className="w-full h-full object-cover"
            />
        </div>
    );
}

export default SideImage