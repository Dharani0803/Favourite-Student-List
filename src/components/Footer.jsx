function Footer(){
    return(
        <div className="fot-con flex bg-[#1F5AA6] px-15 py-5 gap-20 items-center">
            <div>
                <h1 className="fot-title text-[20px] font-bold">Favourite student List</h1>
                <p className="fot-content text-sm">A simple and modern application to create student lists and manage favourite students easily.</p>
                <p className="text-[10px] text-gray-700 mt-5">@2026 Favourite Student List.com | All Right Reserved</p>
            </div>

            <div className="flex bg-[#3a65a3] p-5 rounded-4xl">
            <div>
            <h2 className="foot-title text-[16px] font-semibold">Download Favourite Student List App</h2>
            <p className="foot-content text-[13px] mt-1">Modern Application to Create and List Favourite Students.</p>
        </div>
        
        <div className="flex bg-[#476ba5] p-2 rounded-2xl">
            <div className="flex items-center">
                <i className="fa-brands fa-google-play"></i>
                <div className="text-[8px] pl-2"><p>Get it on</p>
                <p >Google Play</p></div>
            </div>
            <div className="flex items-center">
                <i className="fa-brands fa-apple"></i>
                <div className="text-[8px] pl-2"><p>Download on</p>
                <p >Apple Store</p></div>
            </div>
        </div></div>
        </div>
    )
}

export default Footer