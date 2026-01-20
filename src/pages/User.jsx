import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import ActionButtons from "../components/ActionButtons";
import {
  addUser,
  updateUser,
  deleteUser,
  searchUsers,
  sortUsers,
  limitUsers,
} from "../services/userService";
import EntityDrawer from "../components/EntityDrawer";
import InputField from "../components/InputField";
import Button from "../components/Button";
import WarningPopup from "../components/WarningPopup";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalUsers, setTotalUsers] = useState(0);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "",
  });

  /* ================= FETCH USERS (PAGINATION) ================= */
  const fetchUsers = async (page = 1) => {
    setLoading(true);
    try {
      const skip = (page - 1) * pageSize;
      const { users, total } = await limitUsers(pageSize, skip);
      setUsers(users);
      setTotalUsers(total);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage, pageSize]);

  /* ================= FORM HELPERS ================= */
  const resetForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      gender: "",
    });
    setEditUser(null);
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editUser) {
        const updated = await updateUser(editUser.id, form);
        setUsers((prev) =>
          prev.map((u) => (u.id === editUser.id ? updated : u)),
        );
      } else {
        const created = await addUser(form);
        setUsers((prev) => [created, ...prev]);
      }
      setOpenDrawer(false);
      resetForm();
    } catch (err) {
      alert(err.message);
    }
  };

  /* ================= ACTIONS ================= */
  const handleEdit = (user) => {
    setEditUser(user);
    setForm(user);
    setOpenDrawer(true);
  };

  const handleDelete = async () => {
    try {
      const id = confirmDelete.id;
      await deleteUser(id);
      setConfirmDelete(null);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  /* ================= SEARCH ================= */
  const handleSearch = async () => {
    setLoading(true);
    try {
      if (!searchQuery.trim()) {
        await fetchUsers(1);
        setCurrentPage(1);
      } else {
        const result = await searchUsers(searchQuery);
        setUsers(result);
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ================= SORT ================= */
  const handleSort = async (column, direction) => {
    if (!column) return;
    setLoading(true);
    try {
      const sorted = await sortUsers(column, direction);
      setUsers(sorted);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ================= TABLE COLUMNS ================= */
  const columns = [
    { label: "ID", key: "id", render: (row) => row.id },
    {
      label: "User",
      key: "firstName",
      render: (row) => (
        <div className="flex items-center gap-3">
          <img
            src={row.image}
            alt={row.firstName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium">
            {row.firstName} {row.lastName}
          </span>
        </div>
      ),
    },
    { label: "Email", key: "email", render: (row) => row.email },
    { label: "Age", key: "age", render: (row) => row.age },
    { label: "Gender", key: "gender", render: (row) => row.gender },
    {
      label: "Action",
      key: "action",
      render: (row) => (
        <ActionButtons
          onEdit={() => handleEdit(row)}
          onDelete={() => setConfirmDelete(row)}
        />
      ),
    },
  ];

  return (
    <>
      <DataTable
        title="Users"
        actionLabel="Add User"
        onActionClick={() => setOpenDrawer(true)}
        columns={columns}
        data={users}
        loading={loading}
        searchQuery={searchQuery}
        onSearchChange={(val) => setSearchQuery(val)}
        onSearch={handleSearch}
        onSort={handleSort}
        currentPage={currentPage}
        totalItems={totalUsers}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setCurrentPage(1);
        }}
      />

      <EntityDrawer
        open={openDrawer}
        title={editUser ? "Edit User" : "Add User"}
        onClose={() => {
          setOpenDrawer(false);
          resetForm();
        }}
        onSubmit={handleSubmit}
      >
        <InputField
          label="First Name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
        <InputField
          label="Last Name"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
        <InputField
          label="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <InputField
          label="Age"
          type="number"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
        <InputField
          label="Gender"
          value={form.gender}
          onChange={(e) => setForm({ ...form, gender: e.target.value })}
        />

        <Button text={editUser ? "Update User" : "Add User"} />
      </EntityDrawer>

      <WarningPopup
        open={!!confirmDelete}
        title="Delete User"
        message={`Delete "${confirmDelete?.firstName}" permanently?`}
        onConfirm={handleDelete}
        onCancel={() => setConfirmDelete(null)}
      />
    </>
  );
};

export default User;
