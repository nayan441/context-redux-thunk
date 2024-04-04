import Main from "./Main";
import SideNav from "./SideNav";

function Dashboard() {
    return (
      <div className="dashboard">
        <p> Component     Dashboard</p>
        <SideNav  />
        <Main  />
      </div>
    )
  }
  export default Dashboard;