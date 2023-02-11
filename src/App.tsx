import Dashboard from "./components/pages/Dashboard/DashboardScreen";
import InOutScreen from "./components/pages/InOut/InOutScreen";
import { ToastContainer } from "react-toastify";
type Props = {};
import { BrowserRouter as Router, Routes,Navigate, Route } from "react-router-dom";
import StaffScreen from "./components/pages/Staff/StaffScreen";
import AdminLogin from "./components/AdminLogin";

export default function App({}: Props) {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/inout" element={<InOutScreen />} />
          <Route path="/staff" element={<StaffScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}
