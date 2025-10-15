import "./App.css";
import "./index.css";
import "flowbite";
import Sidebar from "./components/layout/sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="main-container flex" dir="rtl">
        <Sidebar />
        
        <div className="content">
          <h1 className=" m-4 text-2xl font-bold text-black">لوحة التحكم</h1>
        </div>
      </div>
    </>
  );
}

export default App;
