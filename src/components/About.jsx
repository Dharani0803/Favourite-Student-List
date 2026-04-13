function About(){
    return(
        
        <div className="abt-container flex flex-col items-center justify-center text-center mt-30">
            <div className="abt-box w-[80%] shadow-2xl p-15 rounded-4xl">
            <h1  className="abt-title text-3xl font-bold mb-7">About Us <i class="fa-solid fa-users"></i></h1>
            <p className="abt-content text-lg">
                Favourite Student List is a modern student management web application that allows users to create student records, view listed students, and manage favourite students easily. Users can add students to the favourite list and remove them whenever needed, ensuring better organization and quick access to important student information. The application is built with React, Vite, and Tailwind CSS to provide a fast, responsive, and user-friendly experience.</p>
        </div></div>
    )
}

export default About