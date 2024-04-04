import React from 'react'
import { UserContext, UserDispatchContext } from "./MyContext";

function SideNav() {
    const [userDetails] = React.useContext(UserContext);
    const [setUserDetails] = React.useContext(UserDispatchContext);

    console.log("0000000000000000",userDetails);
    return (
      <nav className="side-nav">
        <p> Component     SideNav</p>
        <h1>ID: {userDetails.activeProfileId}</h1>
        <input  
    type="text"  
    onChange={(e)=>setUserDetails((prev)=>({ ...prev,activeProfileId:e.target.value}))}
    />
      </nav>
    )
  }
  export default SideNav;