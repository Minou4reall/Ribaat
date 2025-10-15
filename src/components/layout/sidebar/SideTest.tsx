import { useState } from "react";
import {
  HiChartPie,
  
  HiUser,
  HiArrowSmRight,
  HiTable,
} from "react-icons/hi";
import { PiStudentDuotone } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { RiLogoutBoxRLine } from "react-icons/ri";
export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div dir="rtl">
      {/* زر فتح وإغلاق */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 m-3 text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* الـ Sidebar نفسه */}
      <aside
        className={`fixed top-0 right-0 z-40 w-64 h-screen bg-[#101828] shadow-md transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full px-4 py-6 overflow-y-auto">
          <h2 className="text-xl font-bold mb-6 text-white">لوحة التحكم</h2>

          <ul className="space-y-2">
            <SidebarItem icon={<HiChartPie />} label="الرئيسية" />
            <SidebarCollapse icon={<PiStudentDuotone />} label="الطلبة">
              <SidebarSubItem label="معلومات الطلبة" />
              <SidebarSubItem label="الحضور والغياب" />
            </SidebarCollapse>
            <SidebarCollapse icon={<GiTeacher />} label="المعلمين">
              <SidebarSubItem label="معلومات المعلمين" />
              <SidebarSubItem label="تقييم المعلمين" />
            </SidebarCollapse>
            <SidebarItem icon={<HiUser />} label="المستخدمون" />
            <SidebarItem icon={<HiTable />} label="التقارير" />
            <SidebarItem icon={<HiArrowSmRight />} label="تسجيل الخروج" />
          </ul>
        </div>
      </aside>
    </div>
  );
}

/* العناصر الفرعية */
interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
}

function SidebarItem({ icon, label }: SidebarItemProps) {
  return (
    <li>
      <a
        href="#"
        className="flex items-center gap-3 p-2 text-white rounded-lg hover:bg-gray-700 transition"
      >
        {icon}
        <span>{label}</span>
      </a>
    </li>
  );
}

/* Collapse (فتح وغلق القائمة الفرعية) */
interface SidebarCollapseProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

function SidebarCollapse({ icon, label, children }: SidebarCollapseProps) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full p-2 text-white rounded-lg hover:bg-gray-700 transition"
      >
        <div className="flex items-center gap-3">
          {icon}
          <span>{label}</span>
        </div>
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        <ul className="pl-8 mt-2 space-y-1">{children}</ul>
      </div>
    </li>
  );
}

/* عنصر فرعي داخل collapse */
interface SidebarSubItemProps {
  label: string;
}

function SidebarSubItem({ label }: SidebarSubItemProps) {
  return (
    <li>
      <a
        href="#"
        className="block p-2 pr-8 text-sm text-white rounded-lg hover:bg-gray-700 transition"
      >
        {label}
      </a>
    </li>
  );
}
