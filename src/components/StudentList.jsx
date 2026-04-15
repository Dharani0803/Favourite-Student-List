import { useContext } from "react"
import { StudentContext } from "../context/StudentContext"
import Profile from "../assets/profile.png"


function StudentList({students}) {
  const { favourites, addFavourite } = useContext(StudentContext)


  return (
    <div className="std-container p-7">
      <div className="std-box border border-gray-300 rounded-2xl p-10">
      <h1 className="std-title text-3xl font-bold mb-3">Student List</h1>
      <p className="std-content mb-5">A responsive student list UI built to display student profiles in a clean and modern layout.</p>

        {students.map((student) =>{
          const isLiked = favourites.some(f => f.id === student.id)
          const alreadyAdded = favourites.some((f) => f.id === student.id )

          return(
          <div key={student.id} className="std-area py-10 flex border-b border-gray-300">
            <div className="std-1 flex-1">
            <img
              src={student.photo || Profile}
              alt={student.name}
              className="std-photo w-25 h-25 rounded-full mx-auto object-cover"
            /></div>

            <div className="std-2 flex-4">
            <h2 className="std-name text-xl font-bold">{student.name}</h2>

            <p className="std-id text-gray-500">ID: {student.studentId}</p>
            <p className="std-dep text-[17px] font-semibold pt-5">Department: <span className="text-gray-500 font-normal"> {student.department}</span></p>
            <p className="std-year text-[17px] font-semibold">Year: <span className="text-gray-500 font-normal"> {student.year}</span></p>
            <p className="std-core text-[17px] font-semibold">Core: <span className="text-gray-500 font-normal"> {student.core}</span></p>
          </div>

          <div  className="std-3 flex-1  text-center">
            <p className="std-save text-lg text-red-500 cursor-pointer mt-5"  onClick={() => addFavourite(student)}>
               <i className={ isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>{" "}Save</p>
            <button className="std-btn mt-10 bg-[#1F5AA6] p-3 text-white rounded-2xl font-semibold disabled:opacity-50 disabled:bg-[#D8D8D8] disabled:text-gray-900 cursor-pointer" onClick={() => addFavourite(student)} disabled={alreadyAdded}>
               {alreadyAdded ? "Added" : "Add to Favourites"}</button>
          </div>
          </div>
        )})}
      
    </div></div>
  );
}

export default StudentList;