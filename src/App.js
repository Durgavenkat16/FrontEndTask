import { Routes,Route } from 'react-router-dom';
import './App.css';
import EmployeeDetails from './component/employeeDetails';
import Header from './component/header';
import ProjectMembers from './component/projectMembers';
import Sidebar from './component/sidebar';

function App() {
  return (
    <>
    <div class="home_page">
        <Header/>
        <div className="main_content">
          <div className="contents">
            <div className="content_wrapper flex">
              <div className="sidebarContent">
                <Sidebar />
              </div>
              <div className="page_content_items">
                <Routes>
                  <Route path="/projectMembers" element={<ProjectMembers/>}/>
                  <Route path="/projectMembers/employeeDetails" element={<EmployeeDetails/>}/>
                </Routes>
                {/* <ProjectMembers /> */}
                {/* <EmployeeDetails/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
