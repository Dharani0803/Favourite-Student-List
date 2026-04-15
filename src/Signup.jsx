import Image from "./assets/bg.1.avif"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(props) {
    const navigate=useNavigate()
    const users=props.users
    const setusers=props.setusers

    const[euser,seteuser]=useState()
    const[epassword,setepasswoed]=useState()

    const [cpassword, setcpassword] = useState()
    const [error, setError] = useState("")
     
    function handleUInput(evt){
        seteuser(evt.target.value)
    }

    function handlePInput(evt){
        setepasswoed(evt.target.value)
    }

    function handleCInput(evt){
    setcpassword(evt.target.value)
    }  

   function addUser() {
        if (!euser || !epassword || !cpassword) {
            setError(" Please fill all fields")
            return
        }

        if (epassword !== cpassword) {
            setError(" Your password is mismatch, enter carefully")
            return
        }

        setusers([...users, { username: euser, password: epassword }])
        setError("")
        navigate("/")
    }


    return (
        <div 
            className="flex h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${Image})` }}
        >
            <div className="bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-center w-full h-full text-center p-10 text-white">
                
                <h1 className="text-3xl font-bold mb-2">Hey Hii👋</h1>

                <p className={`mb-4 ${error ? "text-red-400" : "text-white"}`}>
                    {error && <i className="fa-solid fa-triangle-exclamation"></i>}
                    {error ? error : "You can Signup here :)"}
                </p>


                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        className="w-60 border border-white p-2 bg-transparent rounded-md focus:outline-none focus:ring-1 "
                        placeholder="Username" onChange={handleUInput}
                    />

                    <input
                        type="password"
                        className="w-60 border border-white p-2 bg-transparent rounded-md focus:outline-none focus:ring-1"
                        placeholder="Password" onChange={handlePInput}
                    />

                    <input
                        type="password"
                        className="w-60 border border-white p-2 bg-transparent rounded-md focus:outline-none focus:ring-1"
                        placeholder="Confirm Password" onChange={handleCInput}
                    />

                    <button className="bg-amber-300 text-black w-60 p-2 rounded-md" onClick={addUser}>
                        Sign Up
                    </button>

                    <p>Already have an account ? <Link to={"/"} className="underline">Log In</Link></p>
                </div>

            </div>
        </div>
    )
}

export default Login