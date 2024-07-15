import React from "react";


const Githubcatch = async()=>{

    const response = await fetch('https://api.github.com/users/hiteshchoudhary');

    return response.json()

}

export default Githubcatch;
