import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AddUserPopup from "../components/ui-component/AddUserPopup";
import { Badge, Dropdown } from "flowbite-react";
import { HiOutlinePencil, HiOutlineDotsVertical } from "react-icons/hi";
import { HiUserAdd } from "react-icons/hi";
import { FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";

import { FaEye } from "react-icons/fa6";
import face4 from "../assets/face-4.jpg";
import face2 from "../assets/face-2.jpeg";
import face3 from "../assets/face-3.jpg";
interface User {
  id: number;
  avatar: string;
  fullName: string;
  username: string;
  role: string;
  status: "نشط" | "غير نشط";
  lastLogin: string;
  createdAt: string;
  permissions: string;
}

export default function UsersManagement() {
  const [users] = useState<User[]>([
    {
      id: 1,
      avatar: face4,
      fullName: "منصور الصادق الأمين",
      username: "admin",
      role: "مسؤول",
      status: "نشط",
      lastLogin: "قبل لحظات",
      createdAt: "29/08/2025",
      permissions: "تحكم كامل",
    },
    {
      id: 2,
      avatar: face2,
      fullName: "المحاسب",
      username: "financial",
      role: "المحاسب",
      status: "نشط",
      lastLogin: "لم يسجل دخول",
      createdAt: "29/08/2025",
      permissions: "تحكم جزئي",
    },
    {
      id: 3,
      avatar: face3,
      fullName: "المسير",
      username: "manager",
      role: "مسير",
      status: "نشط",
      lastLogin: "لم يسجل دخول",
      createdAt: "29/08/2025",
      permissions: "تحكم جزئي",
    },
  ]);
  const roles: string[] = ["كل الأدوار", "مسؤول", "المحاسب", "مسير"];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(roles[0]);
  const ref = useRef<HTMLDivElement | null>(null);
  // POPUP
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState(false); // ⬅️ للتحكم بالأنيميشن

  // عندما تتغير حالة isPopupOpen، نتحكم في ظهور/اختفاء الأنيميشن
  useEffect(() => {
    if (isPopupOpen) {
      setShowPopup(true); // يظهر البوب-أب
    } else {
      // ننتظر مدة الأنيميشن قبل إزالة العنصر من الـDOM
      const timer = setTimeout(() => setShowPopup(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isPopupOpen]);
  // إغلاق عند الضغط خارج القائمة
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className=" w-full p-1">
      {showPopup && (
        <AnimatePresence mode="wait">
          <motion.div
            className="fixed inset-0 bg-black/30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={() => setShowPopup(false)}
          />
          <div
            onClick={() => setIsPopupOpen(false)}
            className={`absolute inset-0 flex items-center  justify-center bg-black/30 z-40 transition duration-200 ${
              isPopupOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`bg-white rounded-lg shadow-lg z-50 transform transition-all duration-200 ${
                isPopupOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              {showPopup && (
                <>
                  {/* خلفية داكنة شفافة */}

                  <AddUserPopup onClose={() => setShowPopup(false)} />
                </>
              )}

              {/* <AddUserPopup onClose={() => setIsPopupOpen(false)} /> */}
            </div>
          </div>
        </AnimatePresence>
      )}
      {/* Header */}
      <div className="flex p-3 rounded-lg bg-white justify-between items-center mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.05)] ">
        <h1 className="text-lg font-bold text-gray-800 ">
          👤 إدارة المستخدمين
        </h1>
        <button
          color="purple"
          onClick={() => setIsPopupOpen(true)}
          className="flex items-center px-3 py-1.5  gap-2 cursor-pointer bg-blue-400 text-white rounded-lg  hover:bg-blue-500 text-sm  font-bold transition duration-100  "
        >
          <HiUserAdd className="text-lg" /> إضافة مستخدم
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col gap-4 bg-white px-4 py-5 mb-4 rounded-lg">
        <div className="flex text-sm  gap-2 text-gray-600">
          <div className="px-2 py-1.5 flex gap-1 items-center text-[12px]  text-indigo-500 bg-indigo-200 rounded-md">
            <PiUsersThreeFill /> {users.length} مستخدم{" "}
          </div>
          <div className="px-2 py-1.5 flex gap-1 items-center text-[12px]  text-green-600 bg-green-200 rounded-md">
            <FaCheckCircle />{" "}
            {users.filter((user) => user.status !== "غير نشط").length} نشط
          </div>
        </div>
        <div
          ref={ref}
          className="relative gap-2 flex items-center
        "
        >
          <div className="font-bold text-md"> تصفية حسب الدور :</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-23 h-7  text-[12px] bg-gray-50 border border-gray-200 text-gray-700 rounded-xl py-1 px-3  flex  items-center cursor-pointer   transition duration-200"
          >
            <span>{selected}</span>
            <svg
              className={`w-4 absolute left-2 bottom-[4px]  text-gray-600 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
            {isOpen && (
              <ul className="w-23 absolute left-[50%] translate-x-[-50%]  top-6 z-10  mt-1 bg-gray-50 border border-gray-200 rounded-lg shadow-md overflow-hidden">
                {roles.map((r) => (
                  <li
                    key={r}
                    onClick={() => {
                      setSelected(r);
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-200 transition duration-50"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            )}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full text-right divide-y divide-gray-200">
          <thead className="bg-white">
            <tr className="grid grid-cols-6 text-center">
              <th className="px-4 py-3 text-sm font-medium text-gray-500">
                الصورة الشخصية
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-500">
                الاسم الكامل
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-500">
                اسم المستخدم
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-500">
                الدور
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-500">
                آخر دخول
              </th>

              <th className="px-4 py-3 text-sm font-medium text-gray-500">
                الإجراءات
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr
                key={user.id}
                className="grid grid-cols-6 items-center text-center hover:bg-gray-50 transition"
              >
                <td className="py-2 text-sm flex justify-center">
                  <img
                    src={user.avatar}
                    alt={user.fullName}
                    className="w-12 h-12 rounded-full object-cover mx-auto"
                  />
                </td>
                <td className="flex py-3 px-3 font-medium text-gray-900">
                  {user.fullName}
                </td>
                <td className="py-3 flex justify-center">
                  <Badge color="purple" className="w-18 flex justify-center">
                    {user.username}
                  </Badge>
                </td>
                <td className="py-3 flex justify-center">
                  <Badge color="indigo" className="w-18 flex justify-center">
                    {user.role}
                  </Badge>
                </td>
                <td className="py-3 text-sm ">{user.lastLogin}</td>

                <td className="py-3">
                  <div className="flex items-center justify-center gap-2">
                    <div className="bg-red-100 font-bold  text-red-500 hover:bg-red-200 text-md px-1 py-1 flex items-center rounded-sm cursor-pointer transition duration-75">
                      <RiDeleteBin6Line />
                    </div>
                    <div className="bg-yellow-100 font-bold  text-yellow-600 hover:bg-yellow-200 text-md px-1 py-1 flex items-center rounded-sm cursor-pointer transition duration-75">
                      <MdOutlineEdit />
                    </div>
                    <div className="bg-blue-100 font-bold  text-blue-500 hover:bg-blue-200 text-md px-1 py-1 flex items-center rounded-sm cursor-pointer transition duration-75">
                      <FaEye />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
