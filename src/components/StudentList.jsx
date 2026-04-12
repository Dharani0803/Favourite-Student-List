import { useContext } from "react"
import { StudentContext } from "../context/StudentContext"
import  {students} from "../data/students"
import { useState } from "react"


function StudentList() {
  const { favourites, addFavourite } = useContext(StudentContext)


  return (
    <div className="p-7">
      <div className="border border-gray-300 rounded-2xl p-10">
      <h1 className="text-3xl font-bold mb-3">Student List</h1>
      <p className="mb-5">A responsive student list UI built to display student profiles in a clean and modern layout.</p>

        {students.map((student) =>{
          const isLiked = favourites.some(f => f.id === student.id)
          const alreadyAdded = favourites.some((f) => f.id === student.id )

          return(
          <div key={student.id} className="py-10 flex border-b border-gray-300">
            <div className="flex-1">
            <img
              src={student.photo}
              alt={student.name}
              className="w-25 h-25 rounded-full mx-auto"
            /></div>
            <div className="flex-4">
            <h2 className="text-xl font-bold">{student.name}</h2>

            <p className="text-gray-500">ID: {student.studentId}</p>
            <p className="text-[17px] font-semibold pt-5">Department: <span className="text-gray-500 font-normal"> {student.department}</span></p>
            <p className="text-[17px] font-semibold">Year: <span className="text-gray-500 font-normal"> {student.year}</span></p>
            <p className="text-[17px] font-semibold">Core: <span className="text-gray-500 font-normal"> {student.core}</span></p>
          </div>
          <div  className="flex-1  text-center">
            <p className="text-lg text-red-500 cursor-pointer mt-5"  onClick={() => addFavourite(student)}>
               <i className={ isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>{" "}Save</p>
            <button className="mt-10 bg-[#1F5AA6] p-3 text-white rounded-2xl font-semibold disabled:opacity-50 disabled:bg-[#D8D8D8] disabled:text-gray-900" onClick={() => addFavourite(student)} disabled={alreadyAdded}>
               {alreadyAdded ? "Added" : "Add to Favourites"}</button>
          </div>
          </div>
        )})}
      
    </div></div>
  );
}

export default StudentList;