import React,{useState} from 'react'
import "./Style.css"
import {Link} from "react-router-dom"


const Navbar = () => {

  const[mode,setMode]=useState('Dark Mode');
  const [isDark, setIsDark] = useState(false);

  const modefun = ()=>{


    if (!isDark) {
      document.body.style.backgroundColor = "#042743";
      document.body.style.backgroundImage = " repeating-linear-gradient(45deg, #ffffff3d 0px, #63636352 2px, #00000000 8px, #00000000 5px)";
      document.body.style.color = "white";

      document.querySelector(".navbar").style.backgroundColor = "black";
      document.querySelector(".navbar").style.color = "white";
      let menus = document.querySelectorAll(".menu");
      menus.forEach(function(item) {
        item.style.color = "White";
      });



      setMode('White Mode')
      setIsDark(true)
  } else {
        document.body.style.backgroundColor = "white";
        document.body.style.backgroundImage = "repeating-linear-gradient(45deg, #00000010 0px, #0000001e 2px, #0000 8px, #0000 5px)";
        document.body.style.color = "black";

        document.querySelector(".navbar").style.color = "black";
        let menus = document.querySelectorAll(".menu");
        menus.forEach(function(item) {
          item.style.color = "black";
        });

        document.querySelector(".navbar ").style.backgroundColor = "grey";
        
       
        setMode('Dark Mode')
        setIsDark(false)
  }
    
 
  }
  return (
    <> 
      <div className="navbar">
        <Link className="menu" to='/'><b>Text-Convert</b></Link>
        <Link className="menu" to='/about'><b>About</b></Link>


        <div className="form-check form-switch">
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><b>{mode}</b></label>
          <input className="form-check-input" onClick={modefun} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        </div>
      </div>
    </>
  )
}

export default Navbar
