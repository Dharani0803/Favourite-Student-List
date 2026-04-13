import Banner from "../assets/banner.png"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { StudentContext } from "../context/StudentContext"

function Content(){
    const navigate=useNavigate()
    const { user } = useContext(StudentContext)
    
    return(
        <div className="flex content-wrapper ">
            <div className="p-5 ml-5 content-text">
            <h1 className=" content-title text-3xl font-bold my-5 text-gray-800">Welcome {user} !!</h1>
            <p className="content-desc text-xl mb-10">Manage your student records and highlight your favourite students in one place. Add students, organize information, and keep track of favourites with a clean and easy-to-use interface.</p>
            <button className="btn-primary bg-[#1F5AA6] p-3 rounded-4xl font-bold mr-6 text-gray-50 border-2 border-gray-300" onClick={() => navigate('studentlist')}>
                Open Student  list <i className="fa-solid fa-graduation-cap"></i></button>
            <button className="btn-secondary font-bold text-[#1F5AA6] hover:bg-[#1F5AA6] p-3 rounded-4xl hover:text-gray-50 border-2 border-gray-300" onClick={() => navigate('favouritestudent')}>
                Go to Favourite Students <i className="fa-solid fa-user-graduate"></i></button></div>
            <div  className="m-5">
                <img  className="content-image w-300" src={Banner} alt="Image"></img>
            </div>
        </div>
    )
}

export default Content