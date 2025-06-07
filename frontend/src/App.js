import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/auth/Login";
import Login_Successfull from "./components/auth/Login_Successfull";
import Register from "./components/auth/Register";
import Register_Successfull from "./components/auth/Register_Successfull";
import Reset_Password from "./components/auth/Reset_Password";
import Reset_Password_Successfull from "./components/auth/Reset_Password_Successfull";
import Register_Organizer from "./components/auth/Register_Organizer";
import Register_Organizer_Successfull from "./components/auth/Register_Organizer_Successfull";
import Search_HomePage from "./components/search/page/Search_HomePage";
import Refund from "./components/refund/Refund";
import Refund_Successful from "./components/refund/Refund_Successful";
import Login_Admin from "./components/auth/Login_Admin";
import AdminLayout from "./components/admin/AdminLayout";
import AdminWorkshopList from "./components/admin/admin_Workshop_List";
import MainContent from "./components/admin/components/MainContent";
import AdminForumList from "./components/admin/admin_Forum_List";
import AdminCreativeCorner from "./components/admin/admin_Creative_Corner";
import ForumWrapper from "./components/forum";
import Navbar from './components/layout/Navbar';
import Ticket from "./components/profile/Ticket"; 



import "./App.css";

import { Navigate, Outlet } from "react-router-dom";

// Komponen pembungkus untuk handle navbar visibility
function LayoutWithNavbar() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
       

        <Route path="/login" element={<Login />} />
        
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/login-success" element={<Login_Successfull />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-success" element={<Register_Successfull />} />
        <Route path="/reset-password" element={<Reset_Password />} />
        <Route path="/reset-password-success" element={<Reset_Password_Successfull />} />
        <Route path="/register-organizer" element={<Register_Organizer />} />
        <Route path="/register-organizer-success" element={<Register_Organizer_Successfull />} />
        <Route path="/search" element={<Search_HomePage />} />
        <Route path="/forum" element={<ForumWrapper />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/refund-success" element={<Refund_Successful />} />
        <Route path="/login-admin" element={<Login_Admin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<MainContent />} />
          <Route path="workshop-list" element={<AdminWorkshopList />} />
          <Route path="forum-list" element={<AdminForumList />} />
          <Route path="creative-corner" element={<AdminCreativeCorner />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWithNavbar />
    </Router>
  );
}

export default App;
