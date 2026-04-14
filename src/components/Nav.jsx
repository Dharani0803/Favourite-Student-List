import Logo from "../assets/logo1.png"
import { useNavigate } from "react-router-dom"

function Nav(){
    const navigate=useNavigate()
    return(
        <div className="nav-box p-5 shadow-xl sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
        <nav className="nav flex justify-between">
            <div className="nav-logo flex items-center ">
            <img  className=" w-25" src={Logo} alt="Logo"></img>
            <h1 className="nav-title text-3xl font-extrabold text-[#045289]">Favourite <span className="text-[#6f6f70]">Student</span> List</h1></div>
            <div className="nav-content flex items-center gap-10 text-[#4e4e4f] text-lg font-bold">
                <p className="p-2 hover:font-extrabold hover:text-[#2e2e2e] hover:border-b-2 hover:border-[#045289] " onClick={() => navigate('/landing', { replace: true })}>Home</p>
                <p className="p-2 hover:font-extrabold hover:text-[#2e2e2e] hover:border-b-2 hover:border-[#045289] " onClick={() => navigate('studentlist')}>Student list</p>
                <p className="p-2 hover:font-extrabold hover:text-[#2e2e2e] hover:border-b-2 hover:border-[#045289] " onClick={() => navigate('favouritestudent')}>Favourite Students</p>
            </div>
        </nav></div>
    )
}

export default Nav