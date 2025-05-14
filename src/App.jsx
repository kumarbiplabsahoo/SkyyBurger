import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/home/home";
import Layout from "./components/drawer/layout";
import PrivateRoute from "./PrivateRoute.jsx";
import { AuthProvider } from "./contexts/authContext.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route
            path="/"
            element={
              <AuthProvider>
                <Layout>
                  <Home />
                </Layout>
              </AuthProvider>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
