const InputField = ({ label, type = "text", value, onChange, placeholder,error }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium text-rose-700">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-lg border border-pink-300
           bg-white text-gray-800
           focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
    </div>
  );
};

export default InputField;
