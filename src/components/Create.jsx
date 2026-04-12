import { useState } from "react"

function Create(){
  const [form, setForm] = useState({
    name: "",
    studentId: "",
    department: "",
    year: "",
    core: ""
  })

  const [registered, setRegistered] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (registered) return
    
    alert("Successfully registered")
    setRegistered(true)


    setForm({
      name: "",
      studentId: "",
      department: "",
      year: "",
      core: ""
    })
  }

    return(
       <div className="flex flex-col items-center justify-center text-center my-15">

  <div className="form-box w-[80%] shadow-2xl rounded-4xl py-25">

    <h1 className="form-title text-3xl font-bold mb-15">
      Register Now for Upcoming Events <i class="fa-regular fa-calendar"></i>
    </h1>
    <div className=" px-70">
<form onSubmit={handleSubmit}>
    <div className="flex flex-col gap-5 form-row">

      <div className="form-row flex items-center gap-5">
        <label className="form-label w-32 font-medium text-left">Name :</label>
        <input
          type="text" name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter Student Name"
          className="form-input flex-1 border rounded-lg p-2 " required
        />
      </div>

      <div className="flex items-center gap-5">
        <label className="form-label w-32 font-medium text-left">Student ID :</label>
        <input
          type="text" name="studentId"
          value={form.studentId}
          onChange={handleChange}
          placeholder="Enter student ID"
          className="form-input flex-1 border rounded-lg p-2 " required
        />
      </div>

      <div className="flex items-center gap-5">
        <label className="form-label w-32 font-medium text-left">Department :</label>
        <input
          type="text" name="department"
          value={form.department}
          onChange={handleChange}
          placeholder="Enter department"
          className="form-input flex-1 border rounded-lg p-2" required
        />
      </div>

      <div className="flex items-center gap-5">
        <label className="form-label w-32 font-medium text-left">Year :</label>
        <input
          type="text" name="year"
          value={form.year}
          onChange={handleChange}
          placeholder="Enter year"
          className="form-input flex-1 border rounded-lg p-2" required
        />
      </div>

      <div className="flex items-center gap-5">
        <label className="form-label w-32 font-medium text-left">Core :</label>
        <input
          type="text" name="core"
          value={form.core}
          onChange={handleChange}
          placeholder="Enter core subject"
          className="form-input flex-1 border rounded-lg p-2" required
        />
      </div>

      <button  type="submit" disabled={registered} className= {`form-btn  text-white py-2 rounded-lg mt-5 ${
            registered
              ? "bg-gray-400 cursor-not-allowed text-gray-950"
              : "bg-[#286eca] hover:bg-[#1F5AA6]"
          }`}>
        {registered ? "Registered" : "Register Now"}
      </button>

    </div></form></div>
  </div>
</div>
    )
}

export default Create