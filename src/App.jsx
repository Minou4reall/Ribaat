import "./App.css";
import "./index.css";
import "flowbite";
import Sidebar from "./components/layout/sidebar/Sidebar";
import AddUserPopup from "./components/ui-component/AddUserPopup";
import UsersManagement from "./pages/usersManagment";

function App() {
  return (
    <>
      <div className="font-Cairo  flex bg-gray-50" dir="rtl">

        <Sidebar />
        
        <div className="content relative h-screen flex-1 overflow-y-auto ">
          <UsersManagement />
          
        </div>
      </div>
    </>
  );
}

export default App;
