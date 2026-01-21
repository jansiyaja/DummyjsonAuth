import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  Settings,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useEffect, useMemo, useState } from "react";

export default function AdminLayout() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ------------------ Effects ------------------ */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
  }, [sidebarOpen]);

  /* ------------------ Handlers ------------------ */
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  /* ------------------ Nav Config ------------------ */
  const navSections = useMemo(
    () => [
      {
        label: "Dashboard",
        items: [
          { name: "Overview", to: ".", icon: LayoutDashboard, end: true },
        ],
      },
      {
        label: "Management",
        items: [
          { name: "Products", to: "/product", icon: Package },
          { name: "Users", to: "/user", icon: Users },
        ],
      },
      {
        label: "Settings",
        items: [{ name: "Settings", to: "/settings", icon: Settings }],
      },
    ],
    [],
  );

  const linkBase =
    "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-rose-300";

  return (
    <div className="min-h-screen bg-[#FFF5F7] flex flex-col">
      {/* ================= HEADER ================= */}
      <header
        className={`h-16 sticky top-0 z-40 flex items-center justify-between px-4 md:px-6 backdrop-blur transition-shadow ${
          scrolled ? "shadow-md bg-white/70" : "shadow-sm"
        }`}
      >
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Open Menu"
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu size={20} />
          </button>

          <div className="flex items-center gap-2">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 bg-linear-to-br from-rose-400 via-pink-300 to-amber-200 rounded-full animate-pulse" />
              <div className="absolute inset-0 bg-linear-to-br from-rose-400 via-pink-300 to-amber-200 rounded-full blur-md opacity-50" />
            </div>
            <span className="text-xl font-light tracking-widest text-gray-900">
              LUXĒ
            </span>
          </div>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg w-80">
          <Search size={16} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="relative" aria-label="Notifications">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full" />
          </button>

          {loading ? (
            <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
          ) : user ? (
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-800">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-xs text-gray-500 capitalize">
                  {user.role || "Admin"}
                </p>
              </div>
              <img
                src={user.image}
                alt="Profile"
                className="w-9 h-9 rounded-full border object-cover"
              />
            </div>
          ) : null}
        </div>
      </header>

      {/* ================= BODY ================= */}
      <div className="flex flex-1 relative">
        {/* Overlay */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
          />
        )}

        
        <aside
          className={`  fixed md:static z-30 top-16 left-0 w-72 min-h-[calc(100vh-64px)]
          bg-[#FADADD] p-6 shadow-lg flex flex-col transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
          <button
            aria-label="Close Menu"
            onClick={() => setSidebarOpen(false)}
            className="md:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-[#F2B8C6]"
          >
            <X size={18} />
          </button>

          <nav className="flex-1 space-y-6 mt-6">
            {navSections.map((section) => (
              <div key={section.label}>
                <p className="mb-2 px-2 text-xs font-semibold text-gray-500 uppercase">
                  {section.label}
                </p>

                <div className="space-y-2">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        end={item.end}
                        onClick={() => setSidebarOpen(false)}
                        className={({ isActive }) =>
                          `${linkBase} ${
                            isActive
                              ? "bg-[#F2B8C6] text-gray-900 shadow-md border-l-4 border-rose-400"
                              : "text-gray-700 hover:bg-[#F6C9D4]"
                          }`
                        }
                      >
                        <Icon size={18} />
                        {item.name}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-[#F2B8C6]"
          >
            <LogOut size={18} />
            Logout
          </button>
        </aside>

        {/* ================= MAIN ================= */}
        <main className="flex-1 bg-linear-to-br from-[#FFF7F5] to-[#FADADD] p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
