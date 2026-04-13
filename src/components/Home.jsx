import Content from "./Content"
import Create from "./Create"
import About from "./About"
import Contact from "./Contact"

function Home({setStudents}){
    return(
        <div>
            <Content/>
            <Create setStudents={setStudents}/>
            <About/>
            <Contact/>   
        </div>
    )
}

export default Home