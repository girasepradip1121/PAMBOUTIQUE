// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Dashboard from "../pages/Dashboard";
// import Users from "../pages/Users";
// import Orders from "../pages/Orders";
// import AcceptedOrders from "../pages/AcceptedOrders";
// import Settings from "../pages/Settings";
// import ManageContact from "../pages/ManageContact";
// import Products from "../pages/Product";
// import { Sidebar, Navbar } from "../component/Sidebar";

// const Layout = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar (Toggles on Mobile) */}
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <Navbar toggleSidebar={toggleSidebar} />

//         {/* Page Content */}
//         <div className="p-4 mt-16 bg-gray-900 text-white flex-1 overflow-auto">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/users" element={<Users />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/orders" element={<Orders />} />
//             <Route path="/accepted-orders" element={<AcceptedOrders />} />
//             <Route path="/manage-contact" element={<ManageContact />} />
//             <Route path="/settings" element={<Settings />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// const AdminLayoutComponent = () => {
//   return <Layout />;
// };

// export default AdminLayoutComponent;


// import React, { useState } from "react";
// import { Outlet } from "react-router-dom"; // ✅ Use Outlet Instead of Routes
// import { Sidebar, Navbar } from "../component/Sidebar";

// const AdminLayoutComponent = () => {
//   const token=localStorage.getItem("token")
//   const role=localStorage.getItem("role")

//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar (Toggles on Mobile) */}
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <Navbar toggleSidebar={toggleSidebar} />

//         {/* Page Content */}
//         <div className="p-4 mt-16 bg-gray-900 text-white flex-1 overflow-auto">
//           <Outlet /> {/* ✅ This will render the admin pages dynamically */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLayoutComponent;


import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"; // Redirect ke liye useNavigate
import { Sidebar, Navbar } from "../component/Sidebar";

const AdminLayoutComponent = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {

   }, [])

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar (Toggles on Mobile) */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <div className="p-4 mt-16 bg-gray-900 text-white flex-1 overflow-auto">
          <Outlet /> {/* This will render the admin pages dynamically */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayoutComponent;

