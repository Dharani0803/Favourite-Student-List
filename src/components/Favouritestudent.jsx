import { StudentContext } from "../context/StudentContext"
import { useState, useContext } from "react"

function FavouriteStudents() {

  const { favourites, removeFavourite } = useContext(StudentContext)
 const [liked, setLiked] = useState([])
 const toggleHeart = (id) => {
  setLiked(prev =>
    prev.includes(id)
      ? prev.filter(item => item !== id)
      : [...prev, id]
  )
}

  return (
    <div className="std-container p-7">
      <div className="std-box min-h-screen border border-gray-300 rounded-2xl p-10">
      <h1 className="std-title text-3xl font-bold mb-3">Favourite Students</h1>
      <p className="std-content mb-5">A responsive student list UI built to display favourite student profiles in a clean and modern layout.</p>

      {favourites.length === 0 ? (
        
        <p className="std-content text-gray-500 mt-10 text-xl font-semibold">No favourites yet</p>) : 
        (favourites.map(student => {
          const isLiked = liked.includes(student.id)
          return(
          
          <div key={student.id} className="py-10 flex border-b border-gray-300">
            <div className="std-1 flex-1">
            <img
              src={student.photo}
              alt={student.name}
              className="std-photo w-25 h-25 rounded-full mx-auto"
            /></div>

            <div className="std-2 flex-4">
            <h2 className="std-name text-xl font-bold">{student.name}</h2>

            <p className="std-id text-gray-500">ID: {student.studentId}</p>
            <p className="std-dep text-[17px] font-semibold pt-5">Department: <span className="text-gray-500 font-normal"> {student.department}</span></p>
            <p className="std-year text-[17px] font-semibold">Year: <span className="text-gray-500 font-normal"> {student.year}</span></p>
            <p className="std-core text-[17px] font-semibold">Core: <span className="text-gray-500 font-normal"> {student.core}</span></p>
          </div>
          
          <div  className="std-3 flex-1  text-center">
            <p className="std-save text-lg text-red-500 cursor-pointer mt-5" onClick={() => toggleHeart(student.id)}>
             <i className={ isLiked ? "fa-solid fa-heart text-red-500" : "fa-regular fa-heart text-red-500"}></i>
              {" "}Save</p>
            <button
              className="std-btn bg-red-500 text-white rounded-2xl font-semibold p-3 mt-10"
              onClick={() => removeFavourite(student.id)}>Remove</button>

          </div></div>
        )})
      )}

    </div></div>);};

export default FavouriteStudents