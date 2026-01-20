const DataTable = ({ columns, data, title, actionLabel, onActionClick ,loading}) => {
  return (
    <div className="bg-linear-to-br from-[#FFF7F5] to-[#FADADD] rounded-xl shadow">

      {(title || actionLabel) && (
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-lg font-semibold text-rose-600">{title}</h2>

          {actionLabel && (
            <button
              onClick={onActionClick}
              className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-linear-to-r from-pink-500 to-rose-500 hover:opacity-90"
            >
              + {actionLabel}
            </button>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
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
            {data.map((row) => (
              <tr key={row.id} className="border-t hover:bg-pink-50">
                {columns.map((col, i) => (
                  <td key={i} className="px-4 py-3">
                    {col.render(row)}
                  </td>
                ))}
              </tr>
            ))}

                      {data.length === 0 || loading ? (
                          <tr>
                                <td colSpan={columns.length} className="px-4 py-6 text-center text-gray-500">
                                  {loading ? "Loading..." : "No records found"}
                                </td>
                          </tr>
                        ) : null}   
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
