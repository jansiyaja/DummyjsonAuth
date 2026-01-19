import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username) {
      setError("Username is required");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }

    try {
      setLoading(true);
      const data = await login({ username, password });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      navigate("/product");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-semibold text-center text-rose-600 mb-6">
        Login
      </h2>

      <InputField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <Button text="Login" loading={loading} />
      {error && (
        <p className="mb-4 text-sm text-red-500 text-center">{error}</p>
      )}
    </form>
  );
};

export default Form;
