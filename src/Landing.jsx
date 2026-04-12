import { Outlet } from 'react-router-dom'
import Nav from "./components/Nav"
import Footer from "./components/Footer"

function Landing(){

    return(
      <div>
      <Nav/>
  <Outlet/>
  <Footer/>
  </div>
    )
}

export default Landing