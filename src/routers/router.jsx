import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Home from "../pages/home/home";
import Layout from "../components/drawer/layout";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
