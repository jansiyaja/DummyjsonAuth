import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import ActionButtons from "../components/ActionButtons";
import {
  getProducts,
  deleteProduct,
  addProduct,
  updateProduct,
} from "../services/productService";
import EntityDrawer from "../components/EntityDrawer";
import InputField from "../components/InputField";
import Button from "../components/Button";
import WarningPopup from "../components/WarningPopup";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const [confirmDelete, setConfirmDelete] = useState(null);

  const [form, setForm] = useState({
    title: "",
    price: "",
    brand: "",
    category: "",
    stock: "",
    thumbnail: "",
  });

  const fetchProducts = async () => {
    setLoading(true);
    const data = await getProducts();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const resetForm = () => {
    setForm({
      title: "",
      price: "",
      brand: "",
      category: "",
      stock: "",
      thumbnail: "",
    });
    setEditProduct(null);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (editProduct) {
      const updated = await updateProduct(editProduct.id, form);

      setProducts((prev) =>
        prev.map((p) => (p.id === editProduct.id ? updated : p)),
      );
    } else {
      const created = await addProduct(form);

      setProducts((prev) => [created, ...prev]); 
    }

    setOpenDrawer(false);
    resetForm();
  } catch (err) {
    alert(err.message);
  }
};


  const handleEdit = (product) => {
    setEditProduct(product);
    setForm(product);
    setOpenDrawer(true);
  };

 const handleDelete = async () => {
   try {
     const id = confirmDelete.id; 

     await deleteProduct(id);

     setConfirmDelete(null);

     setProducts((prev) => prev.filter((p) => p.id !== id));
   } catch (err) {
     alert(err.message);
   }
 };


  const columns = [
    { label: "ID", render: (row) => row.id },
    {
      label: "Product",
      render: (row) => (
        <div className="flex items-center gap-3">
          <img
            src={row.thumbnail}
            className="w-10 h-10 rounded-md object-cover"
          />
          <span className="font-medium">{row.title}</span>
        </div>
      ),
    },
    { label: "Price", render: (row) => `$${row.price}` },
    { label: "Brand", render: (row) => row.brand },
    { label: "Category", render: (row) => row.category },
    { label: "Stock", render: (row) => row.stock },
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
        title="Products"
        actionLabel="Add Product"
        onActionClick={() => setOpenDrawer(true)}
        columns={columns}
        data={products}
        loading={loading}
      />

      <EntityDrawer
        open={openDrawer}
        title={editProduct ? "Edit Product" : "Add Product"}
        onClose={() => {
          setOpenDrawer(false);
          resetForm();
        }}
        onSubmit={handleSubmit}
      >
        <InputField
          label="Product Name"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <InputField
          label="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <InputField
          label="Brand"
          value={form.brand}
          onChange={(e) => setForm({ ...form, brand: e.target.value })}
        />

        <InputField
          label="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <InputField
          label="Stock"
          type="number"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
        />

        <Button text={editProduct ? "Update Product" : "Add Product"} />
      </EntityDrawer>

      <WarningPopup
        open={!!confirmDelete}
        title="Delete Product"
        message={`Delete "${confirmDelete?.title}" permanently?`}
        onConfirm={handleDelete}
        onCancel={() => setConfirmDelete(null)}
      />
    </>
  );
};

export default Product;
