import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const linkBase =
    "flex items-center px-4 py-3 rounded-xl font-medium transition";

  return (
    <div className="min-h-screen flex bg-[#FFF5F7]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#FADADD] p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-black mb-10">Cosmetic Admin</h2>

        <nav className="space-y-3">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-[#F2B8C6] text-black shadow"
                  : "text-black hover:bg-[#F6C9D4]"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/user"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-[#F2B8C6] text-black shadow"
                  : "text-black hover:bg-[#F6C9D4]"
              }`
            }
          >
            Users
          </NavLink>

          <button
            onClick={handleLogout}
            className="w-full mt-8 flex items-center px-4 py-3 rounded-xl text-black font-medium hover:bg-[#F2B8C6] transition"
          >
            Logout Session
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className="flex-1 bg-linear-to-br
                    from-[#FFF7F5] to-[#FADADD]"
      >
        <Outlet />
      </main>
    </div>
  );
}
