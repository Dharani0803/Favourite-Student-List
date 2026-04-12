import Logo from "../assets/logo.jpg"
import { useNavigate } from "react-router-dom"

function Nav(){
    const navigate=useNavigate()
    return(
        <div className=" p-5 shadow-xl z-1">
        <nav className="flex justify-between">
            <div className="flex items-center">
            <img  className="w-25" src={Logo} alt="Logo"></img>
            <h1 className="text-3xl font-extrabold text-[#045289]">Favourite <span className="text-[#6f6f70]">Student</span> List</h1></div>
            <div className="flex items-center gap-10 text-[#4e4e4f] text-lg font-bold">
                <p className="hover:font-extrabold hover:text-[#2e2e2e] hover:border-b-2 hover:border-[#045289] hover:p-2" onClick={() => navigate('/landing', { replace: true })}>Home</p>
                <p className="hover:font-extrabold hover:text-[#2e2e2e] hover:border-b-2 hover:border-[#045289] hover:p-2" onClick={() => navigate('studentlist')}>Student list</p>
                <p className="hover:font-extrabold hover:text-[#2e2e2e] hover:border-b-2 hover:border-[#045289] hover:p-2" onClick={() => navigate('favouritestudent')}>Favourite Students</p>
            </div>
        </nav></div>
    )
}

export default Nav