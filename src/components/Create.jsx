import { useState } from "react"


function Create({setStudents}){
   const [form, setForm] = useState({
  photo: "",   // ✅ ADD THIS LINE
  name: "",
  studentId: "",
  department: "",
  year: "",
  core: ""
})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setStudents((prev) => [
      ...prev,
      {
        ...form,
        id: Date.now()
      }
    ])

    alert("Successfully Created")

    setForm({
      name: "",
      studentId: "",
      department: "",
      year: "",
      core: ""
    })
  }

    return(
       <div className="cre-con flex flex-col items-center justify-center text-center my-15">

  <div className="form-box w-[80%] shadow-2xl rounded-4xl py-20">

    <h1 className="form-title text-3xl font-bold mb-15">
      Create your Student List Here <i class="fa-solid fa-user-graduate"></i>
    </h1>
    <div className="form-area px-60">
<form onSubmit={handleSubmit}>
    <div className="flex flex-col gap-5 form-row">

<div className="flex items-center gap-5">
  <label className="form-label w-32 font-medium text-left">Profile :</label>
  <label className="form-input flex-1 border rounded-lg p-2 cursor-pointer text-gray-500 text-left">
    {form.photo ? "Image uploaded" : "Upload profile image"}

    <input
      type="file"
      accept="image/*"
      onChange={(e) => {
        const file = e.target.files[0]
        if (file) {
          const imageUrl = URL.createObjectURL(file)
          setForm({ ...form, photo: imageUrl })
        }
      }}
      className="hidden"
    />
  </label>
  
</div>


      <div className=" flex items-center gap-5">
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
          placeholder="Enter pursuing year"
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

      <button  type="submit" className= "form-btn bg-[#286eca] hover:bg-[#1F5AA6] text-white py-2 rounded-lg mt-5 ">
            Create Now
      </button>

    </div></form></div>
  </div>
</div>
    )
}

export default Create