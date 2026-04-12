import { useState } from "react"
import Image from "./assets/bg.2.avif"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {
    const navigate=useNavigate()
    const[euser,seteuser]=useState()
    const[epassword,setepasswoed]=useState()
    const[ruser,setruser]=useState(true)
    const users=props.users
    
    function handleUInput(evt){
        seteuser(evt.target.value)
    }

    function handlePInput(evt){
        setepasswoed(evt.target.value)
    }

    function checkUser(){

        var userfound=false

        users.forEach(function(item)
        {
            if(item.username==euser && item.password==epassword){
                userfound=true
                navigate("/landing",{state:{user:euser}})
            }
        
        })
        if(userfound==false){
            setruser(false)
        }
    }

    return (
        <div 
            className="flex h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${Image})` }}
        >
            <div className="bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-center w-full h-full text-center p-10 text-white">
                
                <h1 className="text-3xl font-bold mb-2">Hey Hii👋</h1>

                {ruser?<p className="mb-4">I help you manage your activities after you login :)</p>:<p className="text-red-500 mb-4">Please Sign Up before you Log In!!</p>}

                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        className="w-55 border border-white p-2 bg-transparent rounded-md focus:outline-none focus:ring-1 "
                        placeholder="Username" onChange={handleUInput}
                    />

                    <input
                        type="password"
                        className="w-55 border border-white p-2 bg-transparent rounded-md focus:outline-none focus:ring-1"
                        placeholder="Password" onChange={handlePInput}
                    />

                    <button className="bg-amber-300 text-black w-55 p-2 rounded-md" onClick={checkUser}>
                        Log In
                    </button>

                    <p>Don't have an account ? <Link to={"/signup"} className="underline">Sign Up</Link></p>
                </div>

            </div>
        </div>
    )
}

export default Login