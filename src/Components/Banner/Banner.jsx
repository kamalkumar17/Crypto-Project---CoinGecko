import bannerImage from "../../assets/banner-image.jpg";
function Banner(){
    return(
        <div className="w-full h-[25rem] relative">
            <img 
                src={bannerImage}
                className="w-full h-full"
             />
             
             <div className="absolute left-0 right-0 mx-auto top-10 w-[20rem]">
                <div className="flex flex-col gap-4">
                    <div className="text-5xl font-semibold text-white">
                        Crypto Tracker
                    </div>
                    <div className="text-sm font-semibold text-center text-white">
                        get all info regarding CryptoCurrencies
                    </div>
                </div>
             </div>
        </div>
    )
}
export default Banner;