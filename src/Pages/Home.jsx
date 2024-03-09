import React from "react";
import { useParams } from "react-router";
import NabVarComponet from "../components/NabVarComponet";
import Login from "./Login";

const Home =()=>{
    const params =useParams(); 
    return(

        <div>
            <h1>hgyg</h1>
            
            <h1>Welcome {params.profileId} tu UTCompass</h1>
        </div>
    )
}



export default Home;