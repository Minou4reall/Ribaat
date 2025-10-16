import { Dropdown, DropdownItem } from "flowbite-react";
function AddUserPopup() {
  return (
    <>
      <div className="w-[500px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  rounded-lg shadow-lg">
        <div className="bg-gray-500 flex justify-between p-4  rounded-t-lg">
          <h1 className="text-white">إضافة مستخدم جديد</h1>
          <button className="text-white">X</button>
        </div>
        <div className="flex flex-col bg-white p-4 !pb-28 gap-4 rounded-b-lg">
          <label htmlFor="">المعلومات الشخصية</label>
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="الإسم الكامل"
              className="rounded-lg bg-gray-100  !outline-none focus:ring-purple-700 "
            />
            <input type="file" className="rounded-lg bg-gray-100 outline-none focus:ring-purple-700 focus:border-none " />
          </div>
          <div className="flex justify-between">
            <input type="number" name="" id="" placeholder="رقم الهاتف" className="rounded-lg bg-gray-100 outline-none focus:ring-purple-700 focus:border-none " />

            <input type="date" name="" id="" className="rounded-lg bg-gray-100 outline-none focus:ring-purple-700 focus:border-none " />
          </div>
          <label htmlFor="">كلمة المرور</label>
          <input
            type="password"
            name=""
            id=""
            placeholder="كلمة المرور"
            className="rounded-lg bg-gray-100 outline-none focus:ring-purple-700 focus:border-none "
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="تأكيد كلمة المرور"
            className="rounded-lg bg-gray-100 outline-none focus:border-purple-900 hover:outline-none"
          />
          <label htmlFor="">الوظيفة</label>
          <Dropdown
            className="text-black justify-between [&_ul]:bg-gray-300 [&_ul]:  bg-gray-400  cursor-pointer"
            label="المهام"
            dismissOnClick={false}
          >
            <DropdownItem className="!text-black ">مربي</DropdownItem>
            <DropdownItem className="!text-black ">مداوم</DropdownItem>
          </Dropdown>
        </div>
      </div>
    </>
  );
}
export default AddUserPopup;
