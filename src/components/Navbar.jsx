import { logo, sun, bha } from "../images"
import './Navbar.css'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(true)

        const [theme, setTheme] = useState("light-theme")
        const toggleTheme =()=>{
            if(theme === "dark-theme"){
                setTheme("light-theme")
            }else{
                setTheme("dark-theme")
            }
        }
    
        useEffect(()=>{
            document.body.className = theme;
        }, [theme])

    return (
        <>
            <nav className='nav'>
                <div className='navleft'>
                    <img style={{ height: "46.5px", cursor: "pointer" }} src={logo} alt="crackverbal" />
                    <select style={{ border: "1px solid #d564df", fontSize: "20px", fontWeight: "500", backgroundColor: "#d564df", cursor: "pointer" }} name="cars" id="cars">
                        <option value="fer">Personal Coaching</option>
                        <option value="fer">Self Coaching</option>
                        <option value="fer">Group Coaching</option>
                        <option value="fer">GMAT Preperation</option>
                        <option value="fer">Study Plan</option>

                    </select>
                    <select style={{ border: "1px solid #d564df", fontSize: "20px", fontWeight: "500", backgroundColor: "#d564df", cursor: "pointer" }} name="cars" id="cars">
                        <option value="fer">Admission Consulting</option>
                        <option value="fer">MBA After 30</option>
                        <option value="fer">Profile analysis</option>
                        <option value="fer">MBA Admission</option>
                        <option value="fer">MBA Work Experience</option>

                    </select>
                </div>
                <div className='navright'>
                    <img style={{ height: "20px", cursor: "pointer" }} src={sun} alt="SEARCH" onClick={()=> toggleTheme()}/>
                    <p style={{ color: "black", margin: "1px 2px", fontSize: "20px", fontWeight: "500", cursor: "pointer" }}>Log In/Sign In</p>
                    <button className='but'>JOIN NOW</button>

                </div>
            </nav>
            {/* for small devices */}
            <nav className='nav2'>
                <img style={{ height: "46.5px", marginLeft: "20px", cursor: "pointer" }} src={logo} alt="crackverbal" />
                <img className="darkm" style={{ height: "20px", cursor: "pointer" }} src={sun} alt="SEARCH" onClick={()=> toggleTheme()}/>
                <div className='menu' onClick={() => { setMenuOpen(!menuOpen)}}>
                    <img style={{ height: "3rem", cursor: "pointer" }} src={bha} alt="Hamburger" />
                </div>

                <div className={menuOpen ? "left":"left yes"}>
                    <select style={{ border: "1px solid #d564df", width: "230px", fontSize: "20px", fontWeight: "500", backgroundColor: "#d564df", cursor: "pointer" }} name="cars" id="cars">
                        <option value="fer">Personal Coaching</option>
                        <option value="fer">Self Coaching</option>
                        <option value="fer">Group Coaching</option>
                        <option value="fer">GMAT Preperation</option>
                        <option value="fer">Study Plan</option>
                    </select>
                    <select style={{ border: "1px solid #d564df", width: "230px", fontSize: "20px", fontWeight: "500", backgroundColor: "#d564df", cursor: "pointer" }} name="cars" id="cars">
                        <option value="fer">Admission Consulting</option>
                        <option value="fer">MBA After 30</option>
                        <option value="fer">Profile analysis</option>
                        <option value="fer">MBA Admission</option>
                        <option value="fer">MBA Work Experience</option>

                    </select>
                    <p style={{ color: "black", margin: "1px 4px", fontSize: "20px", fontWeight: "450", cursor: "pointer" }}>Log In/Sign In</p>
                    <button className='but2'>JOIN NOW</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar