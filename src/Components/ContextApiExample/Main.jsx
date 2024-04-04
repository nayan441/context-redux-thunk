import { UserProvider } from "./MyContext";
import Page from "./Page";
import TopNav from "./TopNav";

function Main() {
    return (
      <div className="main-content">
        <p> Component     Main</p>
        
        <TopNav  />
        <Page />
      </div>
    )
  }
  
  
  
  
  
  export default Main;