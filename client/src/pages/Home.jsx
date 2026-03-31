import { useNavigate } from "react-router-dom";
import TemplateOne from "../components/TemplateOne";
import TemplateTwo from "../components/TemplateTwo";
import TemplateThree from "../components/TemplateThree";

export default function Home() {
  const navigate = useNavigate();

  // 🔥 DEMO DATA
  const demoData = {
    name: "Rahul Sharma",
    email: "rahul@email.com",
    phone: "+91 9876543210",
    summary: "Passionate developer skilled in building modern applications.",
    skills: "React, Python, SQL",
    education: "B.Tech - XYZ University",
    projects: [
      {
        title: "Portfolio Website",
        description: "Created a personal portfolio using React.",
        link: "https://github.com/demo"
      }
    ],
    experience: [
      {
        title: "Intern - TechCorp",
        description: "Worked on frontend applications."
      }
    ]
  };

  const demoSections = {
    image: true,
    summary: true,
    skills: true,
    education: true,
    projects: true,
    experience: true,
    achievements: true,
    certifications: true,
    hobbies: true,
  };

  const demoOrder = [
    "summary",
    "skills",
    "education",
    "projects",
    "experience"
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
     <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-[length:200%_200%] animate-gradient text-white py-20 text-center px-6 relative">

        {/* ✅ LOGO (TOP LEFT) */}
       <img
  src="/logo-rb.png"
  alt="Logo"
  className="h-12 w-12 md:h-14 md:w-14 absolute top-4 left-4 rounded-full object-cover drop-shadow-[0_0_15px_rgba(0,255,255,0.9)]"
/>

        {/* LOGIN BUTTON */}
        <button
          onClick={() => navigate("/login")}
          className="absolute top-4 right-4 bg-white text-blue-600 px-4 py-1 rounded"
        >
          Login
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Create Professional Resume in Minutes 🚀
        </h1>

        <p className="max-w-xl mx-auto mb-6 text-lg">
          ATS-friendly resumes and marriage biodata — all in one place.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <button
            onClick={() => navigate("/resume-templates")}
            className="bg-white text-blue-600 px-6 py-3 rounded font-semibold shadow hover:scale-105 transition"
          >
            Create Resume
          </button>

          {/* 💍 BIODATA BUTTON */}
          <button
            onClick={() => navigate("/biodata")}
            className="bg-pink-600 text-white px-6 py-3 rounded font-semibold hover:scale-105 transition"
          >
            Create Marriage Biodata 💍
          </button>

        </div>

        <p className="mt-4 text-sm text-white/80">
          ₹9 only • Instant Download 
        </p>
      </div>

     
     {/* FEATURES */}
<div className="py-16 px-6 text-center">
  <h2 className="text-2xl font-bold mb-10 animate-fade-in">
    Why Choose Our Resume Builder?
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

    {/* CARD 1 */}
    <div className="p-6 shadow rounded-lg bg-white transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
      <h3 className="font-semibold mb-2 text-lg">📄 ATS Friendly</h3>
      <p className="text-gray-600">
        Optimized resumes that pass ATS filters easily.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="p-6 shadow rounded-lg bg-white transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:scale-105 delay-100">
      <h3 className="font-semibold mb-2 text-lg">⚡ Instant Download</h3>
      <p className="text-gray-600">
        Download your resume instantly as PDF.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="p-6 shadow rounded-lg bg-white transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:scale-105 delay-200">
      <h3 className="font-semibold mb-2 text-lg">💰 Affordable</h3>
      <p className="text-gray-600">
        Premium templates starting at just ₹9.
      </p>
    </div>

  </div>
</div>

      {/* CTA */}
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Build Your Resume?
        </h2>

        <button
          // onClick={() => navigate("/builder/one")}
          className="bg-blue-600 text-white px-6 py-3 rounded font-semibold"
        >
          Start Now 🚀
        </button>
      </div>

    </div>
  );
}