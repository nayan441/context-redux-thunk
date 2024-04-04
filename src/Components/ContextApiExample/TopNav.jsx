// SideNav immediately consumes the activeProfileId prop, and Main continues to relay the title and username props further down the tree.
function TopNav() {
    return (
      <nav className="top-nav">
        <p> Component     TopNav</p>
        {/* <h1> {title} </h1> */}
      </nav>
    )
  }
  
  
  
  export default TopNav;