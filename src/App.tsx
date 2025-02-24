import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Transactions from "./pages/admin/Transactions";
import Analytics from "./pages/admin/Analytics";
import Reports from "./pages/admin/Reports";
import Profile from "./pages/admin/Profile";
import NotFound from "./pages/NotFound";
import NotificationLogs from "./pages/admin/NotificationLogs";
import AdminLogin from "./pages/admin/Login";
import Admins from "./pages/admin/Admins";
import SiteTitle from "./components/SiteTitle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin" replace />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <SiteTitle title="Admin Dashboard" />
                  <Dashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/admins"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <SiteTitle title="Admin Users" />
                  <Admins />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <SiteTitle title="Users" />
                  <Users />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/transactions"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <SiteTitle title="Transactions" />
                  <Transactions />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/notification-logs"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <SiteTitle title="Notification Logs" />
                  <NotificationLogs />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/analytics"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <SiteTitle title="Analytics" />
                  <Analytics />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/reports"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <SiteTitle title="Reports" />
                  <Reports />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/profile"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <SiteTitle title="Profile" />
                  <Profile />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <>
                <NotFound />
                <SiteTitle title="Page Not Found" />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
