import "./Components/Style.css"
import Navbar from "./Components/Navbar"
import Textform from "./Components/Textform";
import About from "./Components/About.js";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  return (
  <>
 {/* <Router> */}
    <Navbar/>
   
    {/* <Routes> */}
     
        {/* <Route exact path="/" element={<Textform />} /> */}
        <Textform/>
     
    
        {/* <Route exact path="/about" element={<About />} /> */}
     
    {/* </Routes> */}

  {/* </Router> */}
  </>
  );
}

export default App;
