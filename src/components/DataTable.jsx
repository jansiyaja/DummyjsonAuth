import { useState } from "react";

const DataTable = ({
  columns,
  data,
  title,
  actionLabel,
  onActionClick,
  loading,
  searchQuery,
  onSearchChange,
  onSearch,
  onSort,
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const totalPages = Math.ceil(totalItems / pageSize);

  const handleSortChange = (column, order) => {
    setSortBy(column);
    setSortOrder(order);
    onSort?.(column, order);
  };

  return (
    <div className="bg-linear-to-br from-[#FFF7F5] to-[#FADADD] rounded-xl shadow">
      {/* ================= HEADER ================= */}
      {(title || actionLabel) && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-4 gap-3">
          {title && (
            <h2 className="text-lg font-semibold text-rose-600">{title}</h2>
          )}
          {actionLabel && (
            <button
              onClick={onActionClick}
              className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white rounded-lg bg-linear-to-r from-pink-500 to-rose-500 hover:opacity-90"
            >
              + {actionLabel}
            </button>
          )}
        </div>
      )}

      {/* ================= CONTROLS ================= */}
      <div className="flex flex-col lg:flex-row gap-3 px-4 pb-3">
        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="border px-3 py-2 rounded-lg w-full sm:w-64"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSearch()}
          />
          <div className="flex gap-2">
            <button
              onClick={onSearch}
              className="flex-1 sm:flex-none px-3 py-2 bg-rose-500 text-white rounded-lg hover:opacity-90"
            >
              Search
            </button>
            <button
              onClick={() => {
                onSearchChange?.("");
                onSort?.("", "asc");
                onSearch?.();
              }}
              className="flex-1 sm:flex-none px-3 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Sort */}
        <div className="flex gap-2 w-full lg:w-auto">
          <select
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value, sortOrder)}
            className="border px-3 py-2 rounded-lg w-full sm:w-auto"
          >
            <option value="">Sort By</option>
            {columns
              .filter((c) => c.key)
              .map((col) => (
                <option key={col.key} value={col.key}>
                  {col.label}
                </option>
              ))}
          </select>

          <select
            value={sortOrder}
            onChange={(e) => handleSortChange(sortBy, e.target.value)}
            className="border px-3 py-2 rounded-lg w-full sm:w-auto"
          >
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="block md:hidden px-4 space-y-3">
        {loading ? (
          <p className="text-center text-gray-500 py-6">Loading...</p>
        ) : data.length === 0 ? (
          <p className="text-center text-gray-500 py-6">No records found</p>
        ) : (
          data.map((row) => (
            <div
              key={row.id}
              className="bg-white rounded-xl p-4 shadow-sm space-y-2"
            >
              {columns.map((col, i) => (
                <div key={i} className="flex justify-between gap-2">
                  <span className="text-xs font-medium text-gray-500">
                    {col.label}
                  </span>
                  <span className="text-sm text-gray-800 text-right">
                    {col.render(row)}
                  </span>
                </div>
              ))}
            </div>
          ))
        )}
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-pink-50 text-rose-600">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="px-4 py-3 text-left font-semibold">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length} className="py-6 text-center">
                  Loading...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="py-6 text-center">
                  No records found
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr key={row.id} className="border-t hover:bg-pink-50">
                  {columns.map((col, i) => (
                    <td key={i} className="px-4 py-3">
                      {col.render(row)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ================= PAGINATION ================= */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 gap-3 border-t">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages || 1}
          </span>

          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>

          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => onPageChange(currentPage + 1)}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Rows:</span>
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="border px-2 py-1 rounded"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
