import Footer from "./components/Footer"
import Header from "./components/Header"
import { Routes , Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import ContactusPage from "./pages/ContactusPage"
import ProtfolioPage from "./pages/ProtfolioPage"
import AboutPage from "./pages/AboutPage"
import DigitalAgencyPage from "./pages/DigitalAgencyPage"
import BlogPage from "./pages/BlogPage"
import BlogDetails from "./pages/BlogDetails"
import TeamDetailsPage from "./pages/TeamDetailsPage"

function App() {
 

  return (
    <>
       <Header/>

       <Routes>

        <Route  path="/" element={<HomePage/>}/>
        <Route  path="/contactus" element={<ContactusPage/>}/>
        <Route  path="/portfolio" element={<ProtfolioPage/>}/>
        <Route  path="/aboutus" element={<AboutPage/>}/>
        <Route  path="/digital-agency" element={<DigitalAgencyPage/>}/>
        <Route  path="/blog" element={<BlogPage/>}/>
        <Route  path="/blog-details" element={<BlogDetails/>}/>
        <Route  path="/team-details" element={<TeamDetailsPage/>}/>

       </Routes>
       
       <Footer/>
    </>
  )
}

export default App
