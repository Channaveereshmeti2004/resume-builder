import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
    }
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const linkClass = (path) =>
    `cursor-pointer px-4 py-2 rounded-md transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="w-full bg-white shadow-md px-6 py-3 flex justify-between items-center sticky top-0 z-50">

      {/* LOGO */}
      <h1
        onClick={() => navigate("/")}
        className="text-xl font-bold text-blue-600 cursor-pointer"
      >
        Resume Builder
      </h1>

      {/* NAV LINKS */}
      <div className="flex items-center gap-4">

        <span onClick={() => navigate("/")} className={linkClass("/")}>
          Home
        </span>

        <span onClick={() => navigate("/resume-templates")} className={linkClass("/resume-templates")}>
          Resume
        </span>

        <span onClick={() => navigate("/biodata")} className={linkClass("/biodata")}>
          Biodata
        </span>

        {/* USER INFO */}
        {userEmail && (
          <>
            <span className="text-sm text-gray-600 font-medium">
              {userEmail}
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}

      </div>
    </div>
  );
}