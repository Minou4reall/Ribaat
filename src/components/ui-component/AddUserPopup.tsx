import { Dropdown, DropdownItem } from "flowbite-react";
import {
  HiUser,
  HiPhone,
  HiCalendar,
  HiLockClosed,
  HiPhotograph,
  HiBriefcase,
} from "react-icons/hi";

import { BiShieldQuarter } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsPersonVcardFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { HiShieldCheck, HiCalculator } from "react-icons/hi";
import { GiTeacher } from "react-icons/gi";
import { useRef, useEffect, useState, type ReactNode } from "react";
import { FaTableCellsRowLock } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
function AddUserPopup() {
  const dateRef = useRef<HTMLInputElement | null>(null);
  const [hasJob, setHasJob] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [userValue, setUserValue] = useState("");
  const [hasJobValue, setHasJobValue] = useState("");
  const [jobValue, setJobValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("اختر الدور");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  type Role = {
    name: string;
    icon: ReactNode;
  };

  const roles: Role[] = [
    {
      name: "متابع",
      icon: <BiShieldQuarter className="text-purple-600 text-lg" />,
    },
    {
      name: "مربي",
      icon: <GiTeacher className="text-blue-600 text-lg" />,
    },
    {
      name: "مداوم",
      icon: <BsFillDoorOpenFill className="text-green-600 text-lg" />,
    },
  ];

  const handleSelect = (role: Role) => {
    setSelectedRole(role.name);
    setIsOpen(false);
  };

  return (
    <div className="w-[500px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg">
      <div className="bg-blue-50 flex justify-between items-center p-4 py-3 rounded-t-2xl">
        <div className="font-bold  flex items-center gap-3 text-lg text-gray-900">
          <HiUserAdd className=" text-green-500 text-2xl " />
          إضافة مستخدم جديد
        </div>
        <button className=" text-gray-700 hover:text-red-500">
          <IoCloseSharp className="text-xl cursor-pointer" />
        </button>
      </div>

      <div className="flex flex-col bg-white p-4  gap-3 rounded-b-2xl">
        <label className="font-bold !font-tajawal text-gray-700 flex items-center gap-2">
          <BsPersonVcardFill className="  text-[22px] text-violet-500 bg-purple-200 rounded-sm p-[3px]" />
          المعلومات الشخصية
        </label>

        {/* الاسم الكامل + الصورة */}
        <div className="flex justify-between gap-2">
          {/* الاسم الكامل */}
          <div className="relative w-2/3">
            <HiUser className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 pointer-events-none" />
            <input
              type="text"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              id="fullname"
              placeholder="سيظهر على الملف الشخصي"
              className="peer w-full  pr-10 py-1.5  floating-input peer-placeholder-shown:placeholder-transparent rounded-lg text-[14px] border border-gray-300 bg-gray-100 transition duration-300 focus:bg-white focus:border-purple-900 focus:ring-purple-900 focus:ring-1 outline-none"
            />
            <label
              htmlFor="fullname"
              className={`absolute right-10 top-1/2 -translate-y-1/2 peer-focus:px-[3px] peer-focus:font-bold peer-focus:text-[12px] text-gray-500 text-sm transition-all duration-200
                         peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-[14px] peer-placeholder-shown:cursor-text peer-focus:cursor-default
                        peer-focus:top-[-3px] peer-focus:bg-white rounded-sm peer-focus:right-[12px] peer-focus:text-xs peer-focus:text-purple-900 px-1
                        ${
                          nameValue === ""
                            ? ""
                            : " !top-[-3px] !bg-gradient-to-b from-white from-75% to-gray-100 to-25% !rounded-sm !right-[12px] !font-bold !text-xs !text-purple-900"
                        }
                        `}
            >
              الإسم الكامل
            </label>
          </div>

          {/* رفع صورة */}
          <div className="w-1/3 flex">
            <label
              htmlFor="upload"
              className="w-full rounded-lg text-[14px] border border-gray-300 text-gray-500 cursor-pointer bg-gray-100 flex items-center px-2 gap-4"
            >
              <HiPhotograph className="text-gray-500 text-lg" />
              إضافة صورة
            </label>
            <input type="file" id="upload" className="hidden" />
          </div>
        </div>

        {/* الهاتف + التاريخ */}
        <div className="flex justify-between gap-2">
          <div className="relative w-2/3">
            <HiPhone className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
            <input
              type="tel"
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
              id="phone"
              placeholder=" "
              dir="rtl"
              className="peer floating-input w-full pr-10 py-1.5 rounded-lg text-[14px] border border-gray-300 bg-gray-100 transition duration-300 focus:bg-white focus:border-purple-900 focus:ring-purple-900 focus:ring-1 outline-none"
            />
            <label
              htmlFor="phone"
              className={`absolute right-10 top-1/2 -translate-y-1/2 peer-focus:px-[3px] peer-focus:font-bold peer-focus:text-[12px] text-gray-500 text-sm transition-all duration-200
                         peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-[14px] peer-placeholder-shown:cursor-text peer-focus:cursor-default
                        peer-focus:top-[-3px] peer-focus:bg-white rounded-sm peer-focus:right-[12px] peer-focus:text-xs peer-focus:text-purple-900 px-1
                        ${
                          phoneValue === ""
                            ? ""
                            : " !top-[-3px] !bg-gradient-to-b from-white from-75% to-gray-100 to-25% !rounded-sm !right-[12px] !font-bold !text-xs !text-purple-900"
                        }
                        `}
            >
              رقم الهاتف
            </label>
          </div>

          {/* التاريخ */}
          <div className="relative cursor-pointer w-1/3">
            <HiCalendar
              onClick={() => dateRef.current?.showPicker?.()}
              className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 text-gray-500"
            />
            <input
              ref={dateRef}
              type="date"
              className="w-full cursor-pointer pr-10 py-1.5 text-[14px] text-gray-500 rounded-lg border-gray-300 bg-gray-100 transition duration-300 focus:border-purple-900 focus:ring-purple-900 focus:ring-1 outline-none
              [&::-webkit-calendar-picker-indicator]:hidden"
            />
          </div>
        </div>

        {/* الحقل الجديد: هل يمتلك وظيفة؟ */}
        <div className="flex justify-between gap-2 items-center">
          <div className="relative w-1/3">
            <HiBriefcase className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
            <select
              id="hasJob"
              value={hasJob ? "yes" : "no"}
              onChange={(e) => {
                setHasJob(e.target.value === "yes");
                setHasJobValue(e.target.value);
              }}
              className="w-full peer  text-[14px] pr-10 py-1.5 rounded-lg border border-gray-300 bg-gray-100 text-gray-600 focus:bg-white focus:border-purple-900 focus:ring-1 focus:ring-purple-900 outline-none"
            >
              <option value="no" className="">
                لا
              </option>
              <option value="yes">نعم</option>
            </select>
            <label
              htmlFor="hasJob"
              className={`absolute right-10 top-1/2 -translate-y-1/2 peer-focus:px-[3px] peer-focus:font-bold peer-focus:text-[12px] text-gray-500 text-sm transition-all duration-200
                         peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-[14px] peer-placeholder-shown:cursor-text peer-focus:cursor-default
                        peer-focus:top-[-3px] peer-focus:bg-white rounded-sm peer-focus:right-[12px] peer-focus:text-xs peer-focus:text-purple-900 px-1 bg-gray-100
                        ${
                          hasJobValue === ""
                            ? ""
                            : " !top-[-3px] !bg-gradient-to-b from-white from-75% to-gray-100 to-25% !rounded-sm !right-[12px] !font-bold !text-xs !text-purple-900"
                        }
                        `}
            >
              يمتلك وظيفة
            </label>
          </div>

          <div className="relative w-2/3">
            <HiBriefcase className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
            <input
              disabled={!hasJob}
              value={jobValue}
              onChange={(e) => {
                setJobValue(e.target.value);
              }}
              type="text"
              id="jobName"
              placeholder="أدخل تسمية الوظيفة"
              className="peer floating-input w-full pr-10 py-1.5 rounded-lg text-[14px] border border-gray-300 bg-gray-100 transition duration-300 focus:bg-white focus:border-purple-900 focus:ring-purple-900 focus:ring-1 outline-none"
            />
            <label
              htmlFor="jobName"
              className={`absolute right-10 top-1/2 -translate-y-1/2 peer-focus:px-[3px] peer-focus:font-bold peer-focus:text-[12px] text-gray-500 text-sm transition-all duration-200
                         peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-[14px] peer-placeholder-shown:cursor-text peer-focus:cursor-default
                        peer-focus:top-[-3px] peer-focus:bg-white rounded-sm peer-focus:right-[12px] peer-focus:text-xs peer-focus:text-purple-900 px-1
                        ${
                          jobValue === ""
                            ? ""
                            : " !top-[-3px] !bg-gradient-to-b from-white from-75% to-gray-100 to-25% !rounded-sm !right-[12px] !font-bold !text-xs !text-purple-900"
                        }
                        `}
            >
              تسمية الوظيفة
            </label>
          </div>
        </div>

        {/* اسم المستخدم */}
        <div className="relative">
          <CgProfile className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={userValue}
            onChange={(e) => setUserValue(e.target.value)}
            id="username"
            placeholder="الدخول إلى الحساب"
            dir="rtl"
            className="peer w-full floating-input pr-10 py-1.5 rounded-lg text-[14px] border border-gray-300 bg-gray-100 transition duration-300 focus:bg-white focus:border-purple-900 focus:ring-purple-900 focus:ring-1 outline-none"
          />
          <label
            htmlFor="username"
            className={`absolute right-10 top-1/2 -translate-y-1/2 peer-focus:px-[3px] peer-focus:font-bold peer-focus:text-[12px] text-gray-500 text-sm transition-all duration-200
                         peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-[14px] peer-placeholder-shown:cursor-text peer-focus:cursor-default
                        peer-focus:top-[-3px] peer-focus:bg-white rounded-sm peer-focus:right-[12px] peer-focus:text-xs peer-focus:text-purple-900 px-1
                        ${
                          userValue === ""
                            ? ""
                            : " !top-[-3px] !bg-gradient-to-b from-white from-75% to-gray-100 to-25% !rounded-sm !right-[12px] !font-bold !text-xs !text-purple-900"
                        }
                        `}
          >
            اسم المستخدم
          </label>
        </div>

        {/* كلمة المرور */}
        <label className="font-bold text-gray-700 flex items-center gap-2">
          <FaTableCellsRowLock className=" text-[22px] text-violet-500 bg-purple-200 rounded-sm p-[3px]" />
          كلمة المرور
        </label>

        <div className="relative">
          <HiLockClosed className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
          <input
            type="password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            id="password"
            placeholder=" "
            className="peer w-full floating-input pr-10 py-1.5 rounded-lg text-[14px] border border-gray-300 bg-gray-100 transition duration-300 focus:bg-white focus:border-purple-900 focus:ring-purple-900 focus:ring-1 outline-none"
          />
          <label
            htmlFor="password"
            className={`absolute right-10 top-1/2 -translate-y-1/2 peer-focus:px-[3px] peer-focus:font-bold peer-focus:text-[12px] text-gray-500 text-sm transition-all duration-200
                         peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-[14px] peer-placeholder-shown:cursor-text peer-focus:cursor-default
                        peer-focus:top-[-3px] peer-focus:bg-white rounded-sm peer-focus:right-[12px] peer-focus:text-xs peer-focus:text-purple-900 px-1
                        ${
                          passwordValue === ""
                            ? ""
                            : " !top-[-3px] !bg-gradient-to-b from-white from-75% to-gray-100 to-25% !rounded-sm !right-[12px] !font-bold !text-xs !text-purple-900"
                        }
                        `}
          >
            كلمة المرور
          </label>
        </div>

        <div className="relative">
          <HiLockClosed className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
          <input
            type="password"
            value={confirmPasswordValue}
            onChange={(e) => setConfirmPasswordValue(e.target.value)}
            id="confirm-password"
            placeholder=" "
            className="peer w-full floating-input pr-10 py-1.5 rounded-lg text-[14px] border border-gray-300 bg-gray-100 transition duration-300 focus:bg-white focus:border-purple-900 focus:ring-purple-900 focus:ring-1 outline-none"
          />
          <label
            htmlFor="confirm-password"
            className={`absolute right-10 top-1/2 -translate-y-1/2 peer-focus:px-[3px] peer-focus:font-bold peer-focus:text-[12px] text-gray-500 text-sm transition-all duration-200
                         peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-[14px] peer-placeholder-shown:cursor-text peer-focus:cursor-default
                        peer-focus:top-[-3px] peer-focus:bg-white rounded-sm peer-focus:right-[12px] peer-focus:text-xs peer-focus:text-purple-900 px-1
                        ${
                          confirmPasswordValue === ""
                            ? ""
                            : " !top-[-3px] !bg-gradient-to-b from-white from-75% to-gray-100 to-25% !rounded-sm !right-[12px] !font-bold !text-xs !text-purple-900"
                        }
                        `}
          >
            تأكيد كلمة المرور
          </label>
        </div>

        {/* الدور */}
        <label className="font-bold text-gray-700 flex items-center gap-2">
          <FaChalkboardTeacher className=" text-[22px] text-violet-500 bg-purple-200 rounded-sm p-[3px]" />
          الثغر التربوي
        </label>
        <div ref={dropdownRef} className="relative w-60 text-right">
          {/* الزر الرئيسي */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-gray-100 border border-gray-300 text-gray-700 rounded-lg py-2 px-3 shadow-sm flex justify-between items-center cursor-pointer focus:border-purple-900 hover:border-purple-900 outline-none  transition"
          >
            <span>{selectedRole}</span>
            <svg
              className={`w-4 h-4 text-gray-500 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* القائمة */}
          {isOpen && (
            <ul className="absolute z-10 w-full bottom-full bg-gray-50 border border-gray-200 rounded-lg shadow-md overflow-hidden">
              {roles.map((role) => (
                <li
                  key={role.name}
                  onClick={() => handleSelect(role)}
                  className="flex justify-between items-center px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-200 transition"
                >
                  <span>{role.name}</span>
                  {role.icon}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            className="px-5 py-2 text-[14px] cursor-pointer text-red-600 bg-gray-100  rounded-lg hover:bg-gray-200 transition font-semibold"
          >
            إلغاء
          </button>

          <button
            type="submit"
            className="cursor-pointer  text-[14px] flex items-center gap-2 px-3  bg-green-700 text-white rounded-lg hover:bg-green-600 transition font-semibold"
          >
            <FaPlus className="text-[12px] mt-1" />
            إضافة المستخدم
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUserPopup;
