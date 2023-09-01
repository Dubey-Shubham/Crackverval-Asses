import React from 'react'
import './Compo4.css'
import { arunji, kurupji } from '../images'

const Compo4 = () => {
    return (
        <div className='co'>
            <div className='contain'>
                <h1 className='head7'>About Us</h1>
                <div className='para7'>Crackverbal is composed of diverse team members who are united by the mission to build a world-class test-prep and admissions company to help students make smarter career choices</div>
                <div className='container12'>
                    <div className='container13' data-aos="zoom-out-right">
                        <img className='im' src={arunji} alt="Arun Sir" />
                        <div className='container11'>
                            <h2 className='head8'>Arun Jagannathan</h2>
                            <h4 className='head9'>Co-Founder CEO | Crackverbal | GMAT Verbal & MBA Coach</h4>
                            <p className='para7'>Arun has trained and mentored over 30K students for the GMAT, GRE and applications in the past 12 years. Arun has personally designed the Crackverbal GMAT curriculum from the ground up to include every feature he saw as missing in traditional courses and has also devised all-new techniques to help out students. He is an active and well-respected member on popular online GMAT forums such as Pagalguy.com (member since 2003, and one of the official MBA consultants), beatthegmat.com and gmatclub.com.His students have made it into top B-Schools such as INSEAD, Wharton, Harvard, Stanford, and ISB to name a few.</p>
                        </div>
                    </div>
                    <div className='container13' data-aos="zoom-out-left">
                        <img className='im' src={kurupji} alt="Arun Sir" />
                        <div className='container11'>
                            <h2 className='head8'>Shree Kurup</h2>
                            <h4 className='head9'>Co-Founder COO | Crackverbal | MBA Admissions Coach</h4>
                            <p className='para7'>Fellow of the ISB Goldman Sachs 10,000 Women Entrepreneurs program.

Mentor with the Cherie Blair Foundation where she mentors women entrepreneurs from across the world.

"As an entrepreneur, if there is one lesson you learn it is this: There is no problem that cannot be fixed."

Grew Crackverbal from 30 students to 30,000+ students through growth hacking and gumption.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Compo4