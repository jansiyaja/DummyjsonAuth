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

    if (!username || !password) {
      setError("Please enter your username and password");
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
      className="w-full bg-white rounded-2xl px-8 py-10 shadow-xl"
    >
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Welcome Back
      </h2>

      <p className="text-sm text-gray-500 text-center mt-2 mb-8">
        Login to continue your journey
      </p>

      <div className="space-y-5">
        <InputField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-500 text-center">{error}</p>
      )}

      <div className="mt-8">
        <Button text="Login" loading={loading} />
      </div>
    </form>
  );
};

export default Form;
