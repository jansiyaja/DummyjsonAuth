import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Package, Users, LogOut } from "lucide-react";

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };


   const linkBase =
  "flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02]";


  return (
    <div className="min-h-screen flex bg-[#FFF5F7]">
      <aside className="w-64 bg-[#FADADD] p-6 shadow-lg sticky top-0 h-screen">
        <h2 className="text-2xl font-bold text-black mb-10">Cosmetic Admin</h2>

        <nav className="space-y-3">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              `${linkBase} gap-3 ${
                isActive
                  ? "bg-[#F2B8C6] text-black shadow-md border-l-4 border-rose-300"
                  : "text-black hover:bg-[#F6C9D4]"
              }`
            }
          >
            <Package size={18} /> Products
          </NavLink>

          <NavLink
            to="/user"
            className={({ isActive }) =>
              `${linkBase} gap-3 ${
                isActive
                  ? "bg-[#F2B8C6] text-black shadow-md border-l-4 border-rose-300"
                  : "text-black hover:bg-[#F6C9D4]"
              }`
            }
          >
            <Users size={18} /> Users
          </NavLink>

          <button
            onClick={handleLogout}
            className="w-full mt-10 flex items-center gap-3 px-4 py-3 rounded-xl
             text-black font-medium hover:bg-[#F2B8C6] transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </nav>
      </aside>

   
      <main className="flex-1 bg-linear-to-br from-[#FFF7F5] to-[#FADADD]">
        <div
          className="bg-white/70 backdrop-blur p-5 shadow-sm
                sticky top-0 z-30"
        >
          <h1 className="text-xl font-semibold text-gray-800">
            Admin Dashboard
          </h1>
        </div>

        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
