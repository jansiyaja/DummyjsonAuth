import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import ActionButtons from "../components/ActionButtons";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
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

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "",
  });

  const fetchUsers = async () => {
    setLoading(true);
    const data = await getUsers();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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

  const columns = [
    { label: "ID", render: (row) => row.id },
    {
      label: "Name",
      render: (row) => `${row.firstName} ${row.lastName}`,
    },
    { label: "Email", render: (row) => row.email },
    { label: "Age", render: (row) => row.age },
    { label: "Gender", render: (row) => row.gender },
    {
      label: "Action",
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
