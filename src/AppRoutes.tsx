import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./layout/Layout";


const AppRoutes = () => {
  return (
        <Router>
            <Routes>
                <Route path="/home" element={<Layout />} />
            </Routes>
        </Router>
  )
}

export default AppRoutes;
