import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { Input } from "./components/ui/input";


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

            </Routes>
        </Router>
  )
}

export default AppRoutes;
