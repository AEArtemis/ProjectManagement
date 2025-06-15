import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  Menu,
  LogOut,
  Bell,
  ClipboardList,
  Calendar,
  ChartColumnBig,
  UsersRound,
  LifeBuoy,
  BriefcaseBusiness,
  Tickets,
  User
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import logo from "./../assets/images/PlanoraLogo.png";
import icon from "./../assets/images/PlanoraIcon.png";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [collapsed, setCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    return saved === "true";
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", collapsed);
  }, [collapsed]);

  const toggleCollapse = () => setCollapsed(!collapsed);

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    navigate("/");
  };

  const titles = {
    "/dashboard": "Dashboard - Planora",
    "/tasks": "Tasks - Planora",
    "/tickets": "Tickets - Planora",
    "/calendar": "Calendar - Planora",
    "/projects": "Projects - Planora",
    "/analytics": "Analytics - Planora",
    "/team": "Team - Planora",
    "/profile": "Profile - Planora",
    "/help": "Help - Planora",
    "/settings": "Settings - Planora",
    "/": "Home - Planora",
  };

  useEffect(() => {
    document.title = titles[location.pathname] || "Planora";
  }, [location.pathname]);

  const iconSize = "w-6 h-6";
  const iconHoverClass = "transition-transform duration-200 group-hover:scale-110";

  const linkClasses = (path) =>
    `flex items-center ${
      collapsed && !isMobile ? "justify-center space-x-0" : "justify-start space-x-2"
    } hover:bg-[#0C0A09] p-2 rounded transition-all ${
      location.pathname === path ? "bg-[#0C0A09]" : ""
    }`;

  const NavItem = ({ to, icon: Icon, label }) => (
    <Link to={to} className="relative group" onClick={() => isMobile && setMobileOpen(false)}>
      <div className={linkClasses(to)}>
        <Icon className={`${iconSize} ${iconHoverClass}`} />
        {!((collapsed && !isMobile)) && <span>{label}</span>}
      </div>
      {(collapsed && !isMobile) && (
        <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
          {label}
        </span>
      )}
    </Link>
  );

  const SidebarContent = (
    <>
      <nav className="space-y-2">
        <div className="flex h-12 mb-2 relative w-25">
          <Link to="/dashboard" className="flex h-12 mb-2 relative w-25">
            <img
              src={logo}
              alt="Planora Logo"
              className={`absolute transition-opacity duration-300 object-contain w-24 ${
                collapsed && !isMobile ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={icon}
              alt="Planora Icon"
              className={`absolute transition-opacity duration-300 object-contain w-9 ${
                collapsed && !isMobile ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>
        </div>

        {!collapsed && (
          <span className="text-sm font-semibold mb-1 pb-3 pl-1 pt-1 opacity-60 text-left block w-full">Menu</span>
        )}
        <NavItem to="/dashboard" icon={LayoutDashboard} label="Dashboard" />
        <NavItem to="/tasks" icon={ClipboardList} label="Tasks" />
        <NavItem to="/tickets" icon={Tickets} label="Tickets" />
        <NavItem to="/calendar" icon={Calendar} label="Calendar" />
        <NavItem to="/projects" icon={BriefcaseBusiness} label="Projects" />
        {/* <NavItem to="/analytics" icon={ChartColumnBig} label="Analytics" /> */}
        <NavItem to="/team" icon={UsersRound} label="Team" />


        {!collapsed && (
          <span className="text-sm font-semibold mb-1 pb-3 pl-1 pt-4 opacity-60 text-left block w-full">General</span>
        )}
        <NavItem to="/profile" icon={User} label="Profile" />
        <NavItem to="/help" icon={LifeBuoy} label="Help" />
        <NavItem to="/settings" icon={Settings} label="Settings" />
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center space-x-2 hover:bg-[#0C0A09] p-2 rounded transition-all mt-6 relative group"
      >
        <LogOut className={`${iconSize} ${iconHoverClass}`} />
        {!((collapsed && !isMobile)) && <span>Logout</span>}
        {(collapsed && !isMobile) && (
          <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
            Logout
          </span>
        )}
      </button>
    </>
  );

  return (
    <>
      {/* Header */}
       <header
        className={`fixed top-0 h-16 bg-white dark:bg-[#1C1917] text-foreground flex items-center justify-between px-6 shadow-md z-10
          transition-all duration-300 ease-in-out border-b rounded-b-xl ${
            isMobile ? "left-4 right-4" : collapsed ? "left-24 right-11" : "left-72 right-11"
          } dark:shadow-lg dark:border-muted`}
      >
        <div className="flex items-center">
          {!isMobile && !mobileOpen && (
            <button
              onClick={toggleCollapse}
              className="mr-2 hover:bg-muted p-0 rounded-md transition-colors duration-200 cursor-pointer"
              aria-label="Toggle sidebar collapse"
            >
              <Menu className={`${iconSize} ${iconHoverClass}`} />
            </button>
          )}
          {isMobile && !mobileOpen && (
            <button
              onClick={() => setMobileOpen(true)}
              className="fixed top-4 left-7 z-50 md:hidden p-1 bg-muted text-foreground rounded-md hover:bg-muted-foreground/10 transition-colors duration-300"
              aria-label="Open sidebar"
            >
              <Menu className={iconSize} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* 🔔 Notifications dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="relative p-2 hover:bg-muted rounded-full transition-colors focus:outline-none focus:ring-0 cursor-pointer"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                {/* Dot indicator for new notifications */}
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
            </DropdownMenuTrigger>
              <DropdownMenuContent className="w-85 mt-2">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  🔔 New comment on your post
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  📦 Your report is ready to view
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  🎉 Welcome to the dashboard!
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          {/* User info */}
          <Link to="/profile"> 
            <div className="flex items-center space-x-2">
              <span className="font-medium">John Doe</span>

              <div className="relative w-11 h-11">
                {/* Spinning Circle */}
                <div className="absolute inset-0 rounded-full border-2 border-t-[#d53e4f] border-r-[#d53e4f] border-b-[#d53e4f] border-l-transparent animate-[spin_4s_linear_infinite]" />

                {/* Avatar */}
                <img
                  src="/images/Avatar.jpg"
                  alt="User Avatar"
                  className="w-9 h-9 rounded-full absolute top-1 left-1 object-cover z-10"
                />

                {/* Online Dot */}
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full z-20" />
              </div>
            </div>
          </Link>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <div
        className={`hidden md:flex h-screen bg-[#1C1917] text-white p-3 flex flex-col justify-between
          transition-all duration-300 ease-in-out ${
            collapsed ? "w-16" : "w-64"
          }`}
      >
        {SidebarContent}
      </div>

      {/* Mobile Sidebar */}
      {isMobile && (
        <>
          <div
            className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
              mobileOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          <div
            className={`fixed top-0 left-0 h-full w-64 bg-[#1C1917] text-white p-3 flex flex-col justify-between z-50
              transform transition-transform duration-300 ease-in-out
              ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            {SidebarContent}
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
