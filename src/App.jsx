import "./App.css";
import "./index.css";
import "flowbite";
import Sidebar from "./components/layout/sidebar/Sidebar";
import AddUserPopup from "./components/ui-component/addUserPopup";

function App() {
  return (
    <>
      <div className=" flex p-10 bg-gray-700" dir="rtl">
        {/* <div><Sidebar /></div> */}
        

        <div className="content relative h-screen w-full ">
          <AddUserPopup />
          
        </div>
      </div>
    </>
  );
}

export default App;
