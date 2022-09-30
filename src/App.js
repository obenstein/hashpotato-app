import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="page">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="content">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
