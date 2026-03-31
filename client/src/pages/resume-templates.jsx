import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TemplateOne from "../components/TemplateOne";
import TemplateTwo from "../components/TemplateTwo";
import TemplateThree from "../components/TemplateThree";
import Navbar from "../components/Navbar";

export default function ResumeTemplates() {
  const navigate = useNavigate();

  // ✅ REQUIRED for your template
  const demoData = {};

  const sections = {
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

  const order = [
    "image",
    "summary",
    "skills",
    "education",
    "projects",
    "experience",
    "achievements",
    "certifications",
    "hobbies",
  ];

  const templates = [
    {
      id: "template1",
      name: "Modern Resume",
      component: (
        <TemplateOne data={demoData} sections={sections} order={order} />
      ),
    },
    {
      id: "template2",
      name: "Classic Resume",
      component: (
        <TemplateTwo data={demoData} sections={sections} order={order} />
      ),
    },
    {
      id: "template3",
      name: "Professional Resume",
      component: (
        <TemplateThree data={demoData} sections={sections} order={order} />
      ),
    },
  ];

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("selectedTemplate");
    if (saved) setSelected(saved);
  }, []);

  const handleSelect = (id) => {
    setSelected(id);
    localStorage.setItem("selectedTemplate", id);
  };

  const handleUse = () => {
    if (selected) navigate(`/builder/${selected}`);
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100">

    {/* NAVBAR */}
    <Navbar />

    {/* CONTENT */}
    <div className="p-6 md:p-10">

      <h1 className="text-4xl font-bold text-center mb-8">
        Choose Your Resume Template
      </h1>

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">

        {/* LEFT SIDE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
          {templates.map((t) => (
            <div
              key={t.id}
              onClick={() => handleSelect(t.id)}
              className={`cursor-pointer border-4 rounded-xl overflow-hidden transition
                ${
                  selected === t.id
                    ? "border-blue-600 scale-105 shadow-xl"
                    : "border-transparent hover:scale-105"
                }`}
            >
              {/* MINI PREVIEW */}
              <div className="h-60 overflow-hidden bg-white">
                <div className="scale-[0.4] origin-top-left w-[250%] pointer-events-none">
                  {t.component}
                </div>
              </div>

              <div className="bg-white p-3 text-center">
                <h2 className="font-semibold">{t.name}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
          {selected ? (
            <>
              <h2 className="text-2xl font-bold mb-4">Live Preview</h2>

              <div className="h-[500px] overflow-auto border rounded bg-white">
                {templates.find((t) => t.id === selected)?.component}
              </div>

              <button
                onClick={handleUse}
                className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Use This Template
              </button>
            </>
          ) : (
            <p className="text-gray-500 text-center mt-20">
              Select a template to preview
            </p>
          )}
        </div>
      </div>

      {/* BACK BUTTON */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition shadow"
        >
          ← Back to Home
        </button>
      </div>

    </div>
  </div>
);
}