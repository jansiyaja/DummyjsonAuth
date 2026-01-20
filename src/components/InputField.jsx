const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div className="mb-5">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-600">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full px-5 py-3 rounded-full
          bg-[#e9ecef]
          text-gray-700 placeholder-gray-400
          shadow-[inset_4px_4px_8px_rgba(0,0,0,0.08),inset_-4px_-4px_8px_rgba(255,255,255,0.9)]
          focus:outline-none
          focus:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.12),inset_-2px_-2px_4px_rgba(255,255,255,1)]
          transition-all duration-200
          ${error ? "ring-1 ring-red-400" : ""}
        `}
      />

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
