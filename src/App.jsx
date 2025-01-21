// src/routes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import ResetPassword from "./pages/Authentication/ResetPassword";
import DashboardLayout from "./components/Layout/DashboardLayout";
import StudentDashboard from "./pages/Dashboard/StudentDashboard";
import TeacherDashboard from "./pages/Dashboard/TeacherDashboard";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import CourseListing from "./pages/Courses/CourseListing";
import CourseDetail from "./pages/Courses/CourseDetail";
import CourseCreation from "./pages/Courses/CourseCreation";
import EnrolledCourses from "./pages/Courses/EnrolledCourses";
import ClassSchedule from "./pages/Classes/ClassSchedule";
import LiveClass from "./pages/Classes/LiveClass";
import Chat from "./pages/Communication/Chat";
import Notifications from "./pages/Communication/Notifications";
import Pricing from "./pages/Payments/Pricing";
import Checkout from "./pages/Payments/Checkout";
import PaymentSuccess from "./pages/Payments/PaymentSuccess";
import PaymentFailure from "./pages/Payments/PaymentFailure";
import EBookLibrary from "./pages/E-Books/EBookLibrary";
import EBookDetail from "./pages/E-Books/EBookDetail";
import UserProfile from "./pages/Profile/UserProfile";
import AccountSettings from "./pages/Profile/AccountSettings";
import UserManagement from "./pages/AdminManagement/UserManagement";
import CourseManagement from "./pages/AdminManagement/CourseManagement";
import SystemAnalytics from "./pages/AdminManagement/SystemAnalytics";
import NotFound from "./pages/Utility/NotFound";
import AboutUs from "./pages/Utility/AboutUs";
import ContactUs from "./pages/Utility/ContactUs";
import TermsAndConditions from "./pages/Utility/TermsAndConditions";
import Home from "./pages/Home/Home";
import FuturisticNavbar from "./components/Navbar/FuturisticNavbar";
import { Toaster } from "react-hot-toast";
import PublicRoute from "./components/Layout/PublicRoute";

const App = () => {
  return (
    <Router>
      <Toaster />
      <FuturisticNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PublicRoute />}>
          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        {/* Dashboard Routes */}
        <Route
          path="/dashboard/student"
          element={<DashboardLayout role="student" />}
        >
          <Route index element={<StudentDashboard />} />
        </Route>

        <Route
          path="/dashboard/teacher"
          element={<DashboardLayout role="teacher" />}
        >
          <Route index element={<TeacherDashboard />} />
        </Route>

        <Route
          path="/dashboard/admin"
          element={<DashboardLayout role="admin" />}
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="courses" element={<CourseManagement />} />
        </Route>

        {/* Course routes */}
        <Route path="/courses" element={<CourseListing />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/courses/create" element={<CourseCreation />} />
        <Route path="/enrolled-courses" element={<EnrolledCourses />} />

        {/* Classes routes*/}
        <Route path="/classes/schedule" element={<ClassSchedule />} />
        <Route path="/classes/live/:id" element={<LiveClass />} />

        {/* Communication routes */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/notifications" element={<Notifications />} />

        {/* Pricing and Payment routes */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failure" element={<PaymentFailure />} />

        {/* E-Books routes */}
        <Route path="/ebooks" element={<EBookLibrary />} />
        <Route path="/ebooks/:id" element={<EBookDetail />} />

        {/* Profile and Settings routes */}
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/settings" element={<AccountSettings />} />

        {/* Admin routes */}
        <Route path="/admin/analytics" element={<SystemAnalytics />} />

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<TermsAndConditions />} />

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
