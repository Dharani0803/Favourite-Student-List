import Content from "./Content"
import Create from "./Create"
import About from "./About"
import Contact from "./Contact"

function Home(){
    return(
        <div>
            <Content/>
            <Create/>
            <About/>
            <Contact/>   
        </div>
    )
}

export default Home