import { useState } from "react";
import { Badge,  Dropdown } from "flowbite-react";
import { HiOutlinePencil, HiOutlineDotsVertical } from "react-icons/hi";
import { HiUserAdd } from "react-icons/hi";
import { FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";

interface User {
  id: number;
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
      fullName: "المسؤول",
      username: "admin",
      role: "Admin",
      status: "نشط",
      lastLogin: "قبل لحظات",
      createdAt: "29/08/2025",
      permissions: "تحكم كامل",
    },
    {
      id: 2,
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
      fullName: "المسير",
      username: "manager",
      role: "مسير",
      status: "نشط",
      lastLogin: "لم يسجل دخول",
      createdAt: "29/08/2025",
      permissions: "تحكم جزئي",
    },
  ]);

  return (
    <div className=" w-full">
      {/* Header */}
      <div className="flex p-3 bg-white justify-between items-center mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.05)] ">
        <h1 className="text-lg font-bold text-gray-800 ">
          👤 إدارة المستخدمين
        </h1>
        <button
          color="purple"
          className="flex items-center px-3 py-1.5  gap-2 cursor-pointer bg-blue-400 text-white rounded-lg  hover:bg-blue-500 text-sm  font-bold transition duration-100  "
        >
          <HiUserAdd className="text-lg" /> إضافة مستخدم
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col gap-4 bg-white px-4 mb-4">
        <div className="flex text-sm  gap-2 text-gray-600">
          <div className="px-2 py-1.5 flex gap-1 items-center text-[12px]  text-indigo-500 bg-indigo-200 rounded-md">
            <PiUsersThreeFill /> {users.length} مستخدم{" "}
          </div>
          <div className="px-2 py-1.5 flex gap-1 items-center text-[12px]  text-green-600 bg-green-200 rounded-md">
            <FaCheckCircle />{" "}
            {users.filter((user) => user.status !== "غير نشط").length} نشط
          </div>
        </div>
        <div>
          <select className="border rounded-lg text-sm px-3 py-2">
            <option>تصفية حسب الدور</option>
            <option>Admin</option>
            <option>المحاسب</option>
            <option>مسير</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className=" text-right divide-y divide-gray-200">
          <thead className="bg-white">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">
                الاسم الكامل
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">
                اسم المستخدم
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">
                الدور
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">
                الحالة
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">
                آخر دخول
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">
                تاريخ الإنشاء
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="bg-white hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {user.fullName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge color="purple">{user.username}</Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge color="indigo">{user.role}</Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge color="success">{user.status}</Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.lastLogin}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.createdAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2 justify-end">
                    <Dropdown
                      label=""
                      renderTrigger={() => (
                        <HiOutlineDotsVertical className="text-gray-500 cursor-pointer" />
                      )}
                    >
                      <a
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={(e) => e.preventDefault()}
                      >
                        <FaShieldAlt className="text-lg" />
                        <span>{user.permissions}</span>
                      </a>
                      <button
                        type="button"
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <HiOutlinePencil className="text-lg" />
                        <span>تعديل</span>
                      </button>
                    </Dropdown>
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
