import React from "react";
import logo from "../assets/Title_final.png"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar =()=>{
    return (
    <nav className=" mb-20 flex items-center justify-between py-6 ">
        <div className="flex fllex-shrink-0 items-center">
        <img className= "mx-2 w-80" src={logo} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaGithub/>
            <FaLinkedin/>
            <FaSquareXTwitter/>
        </div>
    </nav>
    )
}

export default Navbar;