import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function BiodataHome() {
  const navigate = useNavigate();

  const templates = [
    {
      name: "Traditional Template",
      desc: "Classic layout with all essential details for arranged marriage",
      path: "/biodata-builder/one",
      color: "bg-blue-600 hover:bg-blue-700",
      emoji: "📜",
    },
    {
      name: "Modern Template",
      desc: "Stylish and clean design for a modern look",
      path: "/biodata-builder/two",
      color: "bg-green-600 hover:bg-green-700",
      emoji: "✨",
    },
    {
      name: "Premium Template",
      desc: "Elegant premium style for impressive biodata",
      path: "/biodata-builder/three",
      color: "bg-purple-600 hover:bg-purple-700",
      emoji: "💎",
    },
  ];

  return (
  <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-blue-100">

    {/* NAVBAR */}
    <Navbar />

    {/* CONTENT */}
    <div className="p-10">

      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
        💍 Marriage Biodata Templates
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Create beautiful and professional biodata in minutes
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {templates.map((t, index) => (
          <div
            key={index}
            className="group relative bg-white/70 backdrop-blur-lg border border-gray-200 p-6 shadow-xl rounded-2xl hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            {/* Top Icon */}
            <div className="text-5xl mb-4">{t.emoji}</div>

            {/* Title */}
            <p className="font-semibold text-lg text-gray-800">
              {t.name}
            </p>

            {/* Description */}
            <p className="text-sm text-gray-500 mt-2">
              {t.desc}
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-2">

              <button
                onClick={() => navigate(t.path)}
                className={`w-full text-white px-4 py-2 rounded-lg transition ${t.color}`}
              >
                Use Template
              </button>

              <button
                onClick={() => navigate(t.path)}
                className="w-full border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-lg transition"
              >
                Preview
              </button>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-pink-200 via-transparent to-blue-200 blur-xl -z-10"></div>
          </div>
        ))}

      </div>

      {/* Footer */}
      <p className="text-center text-gray-400 mt-14 text-sm">
        Designed with ❤️ for your future journey
      </p>

    </div>
  </div>
);
}