// TopNav uses the title props, and Page sends username down, again, to Profile:
import React from 'react'

import { UserContext, UserDispatchContext } from "./MyContext";

function Profile() {
    const [userDetails] = React.useContext(UserContext);
    const [setUserDetails] = React.useContext(UserDispatchContext);
  console.log(userDetails);
    return  <>
    <h1> Username </h1>
    <h1> {userDetails.username} </h1>
    <input  
    type="text"  
    onChange={(e)=>setUserDetails((prev)=>({ ...prev,username:e.target.value}))}
    />
    </>
  }

export default Profile;