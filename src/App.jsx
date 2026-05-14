import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";

import Suppliment from "./components/Pages/Suppliment.jsx";
import Footer from "./components/Footer";
import About from "./components/Ourstory";

import PrivacyPolicy from "./components/Pages/Privacy";
import TermsOfService from "./components/Pages/Terms.jsx";
import FAQ from "./components/Pages/FAQ.jsx";
import Parmacy from "./components/Pages/parmacy.jsx";
import Fitness from "./components/Pages/fitness.jsx";
import Contact from "./components/Pages/Contact.jsx";

// ✅ Admin Pages
import Login from "./Admin/Login.jsx";
import SignUp from "./Admin/SignUp.jsx";
import AdminPanel from "./Admin/AdminPanel.jsx";

// ✅ Import ScrollToTop
import ScrollToTop from "./components/ScrollToTop.jsx";

// ✅ Smart Layout
function Layout({ children }) {
  const location = useLocation();
  
  const hideLayout = ["/login", "/signup", "/admin", "/admin-lookbook"].includes(location.pathname);

  return (
    <div className="bg-[#fcf8f3] text-black font-sans min-h-screen flex flex-col">
      
      {/* ScrollToTop - Best Place */}
      <ScrollToTop />

      {/* NAVBAR - Hide for Admin */}
      {!hideLayout && (
        <div className="pt-10 px-10 pb-0 flex-shrink-0">
          <Navbar />
        </div>
      )}
      
      {/* CONTENT */}
      <div className="pt-10 px-10 pb-0 flex-1">
        {children}
      </div>
      
      {/* FOOTER - Hide for Admin */}
      {!hideLayout && (
        <div className="pt-0 pb-10 px-10 flex-shrink-0">
          <Footer />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer Pages */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/Supplements" element={<Layout><Suppliment /></Layout>} />
        <Route path="/Fitness" element={<Layout><Fitness /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />

        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms-of-service" element={<Layout><TermsOfService /></Layout>} />
        <Route path="/FAQ" element={<Layout><FAQ /></Layout>} />
        <Route path="/pharmacy" element={<Layout><Parmacy /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />

        {/* Admin Pages */}
        <Route path="/signup" element={<Layout><SignUp /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/admin" element={<Layout><AdminPanel /></Layout>} />

        {/* 404 */}
        <Route path="*" element={
          <Layout>
            <div className="text-center py-12 font-sans">
              404: Page Not Found
            </div>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;