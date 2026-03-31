import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  // 🔐 EMAIL LOGIN
  const handleLogin = async () => {
    if (!email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🆕 SIGNUP
  const handleSignup = async () => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created 🎉");
      navigate("/");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">

      {/* Background Blobs */}
      <div className="absolute w-72 h-72 bg-blue-400 opacity-30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-400 opacity-30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      {/* CARD */}
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96 border border-gray-200 relative z-10">

        <h2 className="text-3xl font-bold text-center mb-2">
          Welcome Back 👋
        </h2>

        <p className="text-center text-gray-500 mb-6 text-sm">
          Login or create an account
        </p>

        {/* EMAIL */}
        <input
          placeholder="Email"
          className="border p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD + TOGGLE */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 cursor-pointer text-sm text-gray-500"
          >
            {showPassword ? "🙈" : "👁"}
          </span>
        </div>

        {/* LOGIN */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg mb-3 hover:bg-blue-700 transition"
        >
          {loading ? "Processing..." : "Login"}
        </button>

        {/* SIGNUP */}
        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded-lg mb-3 hover:bg-green-700 transition"
        >
          {loading ? "Processing..." : "Create Account"}
        </button>

        {/* DIVIDER */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* GOOGLE LOGIN */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border py-3 rounded-lg hover:bg-gray-100 transition"
        >
          <span>🔐</span>
          Continue with Google
        </button>

        <p className="text-center text-gray-400 text-xs mt-4">
          Secure login powered by Firebase
        </p>

      </div>
    </div>
  );
}