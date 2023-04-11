import { useState, useEffect } from "react";
import logoReactflix from "../../Assets/img/reactflixLogo.png";
import mdbLogo from "../../Assets/img/mdbLogo.png";
import { Image } from "react-bootstrap";
import "./aboutPage.css"
import Member from "../../components/Member/Member";
import useMemberData from "../../hooks/useMemberData";

const AboutPage = () => {

    const [memberData,setMemberData] = useMemberData()
    return (
    <div className="body_about">
        <h1>About</h1>
        <p className="about_descrption">
        In order to improve our knowledge about React Js, 
        Professor Francis Fulgencio assigned us a project that 
        (with the use of the API of "The Movie DB") 
        emulates the main features of Netflix. This is how Reactflix was born.
        </p>
        <div className="aboutLogos">
            <div>
                <Image src={logoReactflix} fluid alt="Netflix Logo" className="pb-3" />
            </div>
            <div>
                <Image src={mdbLogo} fluid alt="Netflix Logo" className="pb-3" /> 
            </div>          
        </div>
        <h2>The Team</h2>
        <div className="about_team">
            {memberData.map((member)=>{
                return <Member
                key={member.name}
                name={member.name}
                imgLink={member.picture}
                linkedin={member.linkedin}
                />
            })}
        </div>
    </div> 
    );
}
 
export default AboutPage;