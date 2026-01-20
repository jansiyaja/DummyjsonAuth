import { useState } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Form from "../components/Form";
import loginAnimation from "../assets/Login.lottie";

const Login = () => {
  const [isFormRight, setIsFormRight] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#FFF7F5] to-[#FADADD] px-4">
     
      <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden bg-transparent">
      
        <div className="relative hidden md:block h-130">
         
          <motion.div
            animate={{ x: isFormRight ? "0%" : "100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-y-0 left-0 max-w-xl flex items-center justify-center"
          >
            <DotLottieReact
              src={loginAnimation}
              autoplay
              loop
              className="w-full"
            />
          </motion.div>

        
          <motion.div
            animate={{ x: isFormRight ? "100%" : "0%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-y-0 left-0 w-1/2 flex items-center justify-center"
          >
            <div className="w-full max-w-md rounded-2xl p-10 shadow-[12px_12px_24px_rgba(0,0,0,0.12),-12px_-12px_24px_rgba(255,255,255,0.9)]">
              <Form />
            </div>
          </motion.div>

      
          <motion.button
            onClick={() => setIsFormRight(!isFormRight)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
              absolute bottom-6 left-1/2 -translate-x-1/2
              w-12 h-12 rounded-full
              bg-white shadow-lg
              flex items-center justify-center
              text-lg text-gray-600
            "
            aria-label="Switch panels"
          >
            ⇄
          </motion.button>
        </div>

        
        <div className="md:hidden flex flex-col items-center gap-8 py-10">
          <DotLottieReact
            src={loginAnimation}
            autoplay
            loop
            className="w-1/2"
          />

          <div className="w-lg max-w-md rounded-2xl  p-8 shadow-md">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;