import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Form from "../components/Form";
import loginAnimation from "../assets/Login.lottie";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#FFF7F5] to-[#FADADD] flex items-center justify-center px-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:flex flex-col justify-center px-14 bg-linear-to-br from-rose-50 to-pink-100">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-800 leading-tight"
          >
            Turn ideas into impact.
          </motion.h1>

          <p className="mt-4 text-gray-600 max-w-md">
            Confidence grows when creativity meets action.
            <br />
            <span className="font-medium text-gray-800">
              Be unique. Be bold. Build the impossible.
            </span>
          </p>

          <div className="mt-10">
            <DotLottieReact
              src={loginAnimation}
              autoplay
              loop
              className="w-full max-w-md"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute top-6 right-6"
          >
            <NavLink
              to="/home"
              className="text-sm font-medium text-rose-600 hover:text-rose-700 transition"
            >
              Preview the Store →
            </NavLink>
          </motion.div>
        </div>

        <div className="flex items-center justify-center px-6 py-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md"
          >
            <Form />
          </motion.div>
        </div>
      </div>

      {/* MOBILE ONLY TEXT */}
      <div className="md:hidden absolute top-10 text-center px-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Turn ideas into impact
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Be confident. Be unique. Build the impossible.
        </p>
      </div>
    </div>
  );
};

export default Login;
