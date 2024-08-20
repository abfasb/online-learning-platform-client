import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { Input } from "./components/ui/input";
import AuthCallBack from "./pages/AuthCallback";

const AppRoutes = () => {
  return (
        <Router>
            <Routes>
                <Route 
                path="/"
                element={<Layout />} />

                <Route 
                path="/login"
                element={<Input />} />

                <Route 
                path="/auth-callback"
                element={<AuthCallBack />} />

            </Routes>
        </Router>
  )
}

export default AppRoutes;
