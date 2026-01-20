import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  Settings,
  Store,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function AdminLayout() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const linkBase =
    "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200";

  const navSections = [
    {
      label: "Dashboard",
      items: [{ name: "Overview", to: ".", icon: LayoutDashboard, end: true }],
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
  ];

  return (
    <div className="min-h-screen bg-[#FFF5F7] flex flex-col">
     
      <header className="h-16 bg-white/80 backdrop-blur shadow-sm flex items-center justify-between px-4 md:px-6 sticky top-0 z-40">
        {/* Left */}
        <div className="flex items-center gap-3">
       
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu size={20} />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">
            Admin Dashboard
          </h1>
        </div>

       
        <div className="hidden md:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg w-80">
          <Search size={16} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>

      
        <div className="flex items-center gap-4 md:gap-6">
          <button className="relative">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full" />
          </button>

          {loading ? (
            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
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
                alt="profile"
                className="w-9 h-9 rounded-full border object-cover"
              />
            </div>
          ) : null}
        </div>
      </header>

      {/* ================= BODY ================= */}
      <div className="flex flex-1 relative">
       \
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
          />
        )}

     
        <aside
          className={`fixed md:static z-40 top-16 left-0
    min-h-[calc(100vh-64px)]
    w-72 bg-[#FADADD] p-6 shadow-lg flex flex-col
    transform transition-transform duration-300
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}
        >
          {/* Close button (mobile) */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-[#F2B8C6]"
          >
            <X size={18} />
          </button>

          <nav className="flex-1 space-y-6 mt-6 md:mt-0">
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

          {/* Footer actions */}
          <div className="space-y-3">
            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-white text-gray-700 font-medium shadow hover:bg-gray-50"
            >
              <Store size={18} />
              View Store
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-[#F2B8C6]"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>

        {/* ================= MAIN ================= */}
        <main className="flex-1 bg-linear-to-br from-[#FFF7F5] to-[#FADADD] p-4 md:p-6 md:ml-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
