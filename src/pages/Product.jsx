import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import ActionButtons from "../components/ActionButtons";
import {
  getProducts,
  deleteProduct,
  addProduct,
  updateProduct,
  searchProducts,
  sortProducts,
  limitProducts,
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
  const [searchQuery, setSearchQuery] = useState("");
    const [confirmDelete, setConfirmDelete] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); 
    const [pageSize, setPageSize] = useState(10); 
    const [totalProducts, setTotalProducts] = useState(0); 
  const [form, setForm] = useState({
    title: "",
    price: "",
    brand: "",
    category: "",
    stock: "",
    thumbnail: "",
  });

 const fetchProducts = async (page = 1) => {
   setLoading(true);
   try {
     const skip = (page - 1) * pageSize;
     const { products, total } = await limitProducts(pageSize, skip);
     setProducts(products);
     setTotalProducts(total);
   } catch (err) {
     alert(err.message);
   } finally {
     setLoading(false);
   }
 };


 useEffect(() => {
   fetchProducts(currentPage);
 }, [currentPage, pageSize]);


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

  const handleSearch = async () => {
    setLoading(true);
    try {
      if (!searchQuery.trim()) {
        await fetchProducts();
      } else {
        const result = await searchProducts(searchQuery);
        setProducts(result);
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSort = async (column, direction) => {
    if (!column) return;
    setLoading(true);
    try {
      const sorted = await sortProducts(column, direction);
      setProducts(sorted);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { label: "ID", key: "id", render: (row) => row.id },
    {
      label: "Product",
      key: "title",
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
    { label: "Price", key: "price", render: (row) => `$${row.price}` },
    { label: "Brand", key: "brand", render: (row) => row.brand },
    { label: "Category", key: "category", render: (row) => row.category },
    { label: "Stock", key: "stock", render: (row) => row.stock },
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
        title="Products"
        actionLabel="Add Product"
        onActionClick={() => setOpenDrawer(true)}
        columns={columns}
        data={products}
        loading={loading}
        searchQuery={searchQuery}
        onSearchChange={(val) => setSearchQuery(val)}
        onSearch={handleSearch}
        onSort={handleSort}
        currentPage={currentPage}
        totalItems={totalProducts}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setCurrentPage(1); // reset to first page
        }}
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
