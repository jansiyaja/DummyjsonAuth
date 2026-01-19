const Button = ({ text, loading }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full py-2 rounded-lg bg-pink-500 text-white
                 hover:bg-pink-600 transition disabled:opacity-60"
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default Button;
