import React from 'react'
import { useState, useEffect } from "react";
import jordisPic from "../Assets/img/team/jordis.jpg"


export const useMemberData = () => {
    const [memberData,setMemberData] = useState([])

    useEffect(()=>{
        const members = [{
            name: "Adonis De Paula",
            picture: "http://drive.google.com/uc?export=view&id=1ERUlarspag6dzrjZ-M5CqJyaofh899zn",
            linkedin: "https://www.linkedin.com/in/adonsfco/"
        },{
            name: "Winser Espinal",
            picture: "http://drive.google.com/uc?export=view&id=1UYXC9B1ITm3jXZlCnvW0rXPtgdwLILAc",
            linkedin: "https://www.linkedin.com/in/winser-espinal/"
        },{
            name: "Juan Tomas De peña",
            picture: "http://drive.google.com/uc?export=view&id=1SNU4BVA3MNDnTWhXnpv7KNpD8tohhgJi",
            linkedin: "https://www.linkedin.com/in/juan-tomas-de-pena-medina/"
        }]
    
        setMemberData(members)
    },[])
   


  return [memberData,setMemberData]
}

export default useMemberData;



