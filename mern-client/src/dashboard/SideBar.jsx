import { useState } from 'react';
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloud, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards, HiX } from "react-icons/hi";

//import userImg from "../assets/profile.jpg"
import { useContext } from "react";
import { AuthContext } from "../contacts/AuthProvider";

const SideBar = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`relative ${isOpen ? 'w-64' : 'w-0'} transition-width duration-300`}>
      {isOpen && (
        <Sidebar aria-label="Sidebar with content separator example">
          <button 
            onClick={toggleSidebar}
            className="absolute top-2 left-2 p-2 text-gray-600 hover:text-gray-900"
          >
            <HiX size={24} />
          </button>
          <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="userimage" className="w-16 h-16 mt-5">
            {user?.displayName || "Demo User"}
          </Sidebar.Logo>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                Upload Book
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                Manage Books
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="/logout" icon={HiTable}>
                Log Out
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Upgrade to Pro
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiViewBoards}>
                Documentation
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiSupport}>
                Help
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      )}
      {!isOpen && (
        <button 
          onClick={toggleSidebar}
          className="absolute top-2 left-2 p-2 text-gray-600 hover:text-gray-900"
        >
          <HiArrowSmRight size={24} />
        </button>
      )}
    </div>
  );
}

export default SideBar;
