import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  Calendar,
  HeartPulse,
  Users,
  Settings,
  LogOut,
  Menu,
  Maximize,
  Minimize,
  Bell,
  HelpCircle,
  User,
  Search,
  Warehouse,
  MonitorCheck,
  UserRoundCog,
  ListCollapse,
  PanelRightOpen,
  PanelLeftOpen,
  FileText,
  BellDot,
  RefreshCcw,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "@radix-ui/react-avatar";
import { useToast } from "@/hooks/use-toast";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebarCollapsed");
    return saved ? JSON.parse(saved) : false;
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/admin/login");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  const menuItems = [
    { name: "Dashboard", icon: LayoutGrid, href: "/admin" },
    { name: "Admin Users", icon: UserRoundCog, href: "/admin/admins" },
    { name: "Users", icon: Users, href: "/admin/users" },
    { name: "Transactions", icon: RefreshCcw, href: "/admin/transactions" },
    { name: "Notifications", icon: BellDot, href: "/admin/notification-logs" },
    { name: "Analytics", icon: BarChart3, href: "/admin/analytics" },
    { name: "Reports", icon: FileText, href: "/admin/reports" },
  ];

  const isCurrentPath = (path: string) => {
    return (
      location.pathname === path ||
      (location.pathname === "/" && path === "/dashboard")
    );
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const NavLink = ({ item }: { item: (typeof menuItems)[0] }) => (
    <Link
      to={item.href}
      className={`
        inline-flex items-center px-4 py-2 border-l-4 text-sm font-medium w-full transition-colors duration-200 ease-in-out
        ${
          isCurrentPath(item.href)
            ? "border-primary-500 text-gray-900 dark:text-white bg-primary-100 dark:bg-primary-700"
            : "border-transparent text-gray-600 dark:text-gray-400 hover:border-primary-300 hover:text-gray-800 dark:hover:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-800"
        }
      `}
    >
      <item.icon className="h-5 w-5 flex-shrink-0" />
      {!isCollapsed && (
        <span className="ml-3 whitespace-nowrap">{item.name}</span>
      )}
    </Link>
  );

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden fixed top-4 left-4 z-50"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-64 p-0 overflow-y-auto max-h-screen"
        >
         <Link to="/admin" className="border-b dark:border-gray-800">
          <div className="flex h-16 items-center px-4 border-b dark:border-gray-800">
            <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
              MD
            </span>
            <h1 className="text-1xl font-bold text-primary">Modern Dashboard</h1>
          </div>
        </Link>
          <nav className="flex flex-col gap-1 p-4 overflow-y-auto max-h-[calc(100vh-4rem)]">
            {menuItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>
          {/* Help center */}
          <div className="mt-auto p-4 border-t dark:border-gray-800">
            <div className="flex flex-col gap-2">
              <Link
                to="/help"
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
              >
                <HelpCircle className="h-5 w-5" />
                <span className="text-sm">Help Center</span>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <div
        className={`hidden md:fixed md:inset-y-0 md:flex md:flex-col transition-all duration-300 ${
          isCollapsed ? "md:w-16" : "md:w-64"
        }`}
      >
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <Link to="/admin" className="border-b dark:border-gray-800">
          <div className="p-4 flex items-center gap-2">
          
            <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
              MD
            </span>
            {!isCollapsed && (
              <h1 className="text-1xl font-bold text-primary">Modern Dashboard</h1>
            )}
          </div>
        </Link>
          <nav className="flex flex-1 flex-col gap-1">
            {menuItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>
          {/* Help center */}
          <div className="mt-auto p-4 border-t dark:border-gray-800">
            <div className="flex flex-col gap-2">
              <Link
                to="/help"
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
              >
                <HelpCircle className="h-5 w-5" />
                {!isCollapsed && <span className="text-sm">Help Center</span>}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "md:pl-16" : "md:pl-64"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b bg-white dark:bg-gray-900 dark:border-gray-800">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:flex"
            >
              {isCollapsed ? (
                <PanelLeftOpen className="h-12 w-12 text-primary-600" />
              ) : (
                <PanelRightOpen className="h-12 w-12 text-primary-600" />
              )}
            </Button>
            <div className="relative hidden sm:block">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="md:block hidden"
            >
              {isFullscreen ? (
                <Minimize className="h-5 w-5" />
              ) : (
                <Maximize className="h-5 w-5" />
              )}
            </Button>
            <Link
              to="/admin/profile"
              className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
            >
              <User className="w-5 h-5" />
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
            </Button>
          </div>
        </div>
        <main className="p-4 md:p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
