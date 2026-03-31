import { useState, useEffect } from "react";
import TemplateOne from "../components/TemplateOne";
import TemplateTwo from "../components/TemplateTwo";
import TemplateThree from "../components/TemplateThree";
import html2pdf from "html2pdf.js";
import { useNavigate } from "react-router-dom";
// DND KIT
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

export default function Builder() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    summary: "",
    skills: "",
    education: "",
    projects: "",
    experience: "",
    achievements: "",
    certifications: "",
    hobbies: "",
    image: "",
  });

  const [sections, setSections] = useState({
    image: true,
    summary: true,
    skills: true,
    education: true,
    projects: true,
    experience: true,
    achievements: true,
    certifications: true,
    hobbies: true,
  });

  // ✅ ORDER (image included)
  const [sectionOrder, setSectionOrder] = useState([
    "image",
    "summary",
    "skills",
    "education",
    "projects",
    "experience",
    "achievements",
    "certifications",
    "hobbies",
  ]);

  const [template, setTemplate] = useState("one");
  useEffect(() => {
  const savedTemplate = localStorage.getItem("selectedTemplate");

  if (savedTemplate) {
    if (savedTemplate === "template1") setTemplate("one");
    else if (savedTemplate === "template2") setTemplate("two");
    else if (savedTemplate === "template3") setTemplate("three");
  }
}, []);
  const [isPaid, setIsPaid] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleSection = (section) => {
    setSections({ ...sections, [section]: !sections[section] });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ DRAG
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      setSectionOrder((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  // ✅ RAZORPAY (REAL)
  const handlePayment = async (amount) => {
    const res = await fetch("http://127.0.0.1:5000/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });

    const order = await res.json();

    const options = {
      key: "rzp_test_SWbMaeA4rGPzWJ",
      amount: order.amount,
      currency: "INR",
      name: "Resume Builder",
      description: "Unlock Premium Resume",
      order_id: order.id,
      handler: function () {
        alert("Payment Successful 🎉");
        setIsPaid(true);
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // PDF
  const downloadPDF = () => {
    if (!isPaid) {
      alert("⚡ Upgrade required");
      return;
    }
    const element = document.getElementById("resume-preview");
    html2pdf().from(element).save();
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT */}
      <div className="w-1/2 p-6 bg-white border-r overflow-y-auto">

        <h2 className="text-2xl font-bold mb-4">Build Resume</h2>

        {/* DRAG + CHECKBOX */}
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={sectionOrder} strategy={verticalListSortingStrategy}>
            {sectionOrder.map((id) => (
              <SortableItem key={id} id={id} sections={sections} toggle={toggleSection} />
            ))}
          </SortableContext>
        </DndContext>

        {/* BASIC INPUTS */}
<input name="name" placeholder="Name" onChange={handleChange} className="border p-2 w-full mt-2" />
<input name="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full mt-2" />
<input name="phone" placeholder="Phone" onChange={handleChange} className="border p-2 w-full mt-2" />

<input name="linkedin" placeholder="LinkedIn" onChange={handleChange} className="border p-2 w-full mt-2" />
<input name="github" placeholder="GitHub" onChange={handleChange} className="border p-2 w-full mt-2" />

{/* IMAGE */}
{sections.image && (
  <input
    type="file"
    onChange={handleImageUpload}
    className="border p-2 w-full mt-2"
  />
)}

{/* DYNAMIC TEXTAREAS */}
{sections.summary && (
  <textarea name="summary" placeholder="Summary" onChange={handleChange} className="border p-2 w-full mt-2" />
)}

{sections.skills && (
  <textarea name="skills" placeholder="Skills (comma separated)" onChange={handleChange} className="border p-2 w-full mt-2" />
)}

{sections.education && (
  <textarea name="education" placeholder="Education" onChange={handleChange} className="border p-2 w-full mt-2" />
)}










{sections.projects && (
  <div className="mt-3">
    <h3 className="font-semibold mb-2">Projects</h3>

    {(Array.isArray(form.projects)
      ? form.projects
      : [{ title: "", description: "", link: "" }]
    ).map((proj, index) => (
      <div key={index} className="mb-3 border p-2 rounded">

        <input
          type="text"
          placeholder="Project Title"
          value={proj.title || ""}
          onChange={(e) => {
            const updated = Array.isArray(form.projects)
              ? [...form.projects]
              : [{ title: "", description: "", link: "" }];

            updated[index].title = e.target.value;
            setForm({ ...form, projects: updated });
          }}
          className="border p-2 w-full mb-2"
        />

        <textarea
          placeholder="Project Description"
          value={proj.description || ""}
          onChange={(e) => {
            const updated = Array.isArray(form.projects)
              ? [...form.projects]
              : [{ title: "", description: "", link: "" }];

            updated[index].description = e.target.value;
            setForm({ ...form, projects: updated });
          }}
          className="border p-2 w-full mb-2"
        />

        <input
          type="text"
          placeholder="GitHub / Live Link"
          value={proj.link || ""}
          onChange={(e) => {
            const updated = Array.isArray(form.projects)
              ? [...form.projects]
              : [{ title: "", description: "", link: "" }];

            updated[index].link = e.target.value;
            setForm({ ...form, projects: updated });
          }}
          className="border p-2 w-full mb-2"
        />

        <button
          onClick={() => {
            const updated = (form.projects || []).filter((_, i) => i !== index);
            setForm({ ...form, projects: updated });
          }}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Remove
        </button>

      </div>
    ))}

    <button
      onClick={() =>
        setForm({
          ...form,
          projects: [
            ...(Array.isArray(form.projects)
              ? form.projects
              : []),
            { title: "", description: "", link: "" }
          ],
        })
      }
      className="bg-blue-600 text-white px-3 py-1 rounded"
    >
      + Add Project
    </button>
  </div>
)}





{sections.experience && (
  <div className="mt-3">
    <h3 className="font-semibold mb-2">Experience</h3>

    {(Array.isArray(form.experience) ? form.experience : [{ title: "", description: "" }]).map((exp, index) => (
      <div key={index} className="mb-3 border p-2 rounded">

        {/* TITLE */}
        <input
          type="text"
          placeholder="Job Role / Company"
          value={exp.title || ""}
          onChange={(e) => {
            const updated = Array.isArray(form.experience)
              ? [...form.experience]
              : [{ title: "", description: "" }];

            updated[index].title = e.target.value;

            setForm({ ...form, experience: updated });
          }}
          className="border p-2 w-full mb-2"
        />

        {/* DESCRIPTION */}
        <textarea
          placeholder="Work Description"
          value={exp.description || ""}
          onChange={(e) => {
            const updated = Array.isArray(form.experience)
              ? [...form.experience]
              : [{ title: "", description: "" }];

            updated[index].description = e.target.value;

            setForm({ ...form, experience: updated });
          }}
          className="border p-2 w-full"
        />

      </div>
    ))}

    <button
      onClick={() =>
        setForm({
          ...form,
          experience: [
            ...(Array.isArray(form.experience)
              ? form.experience
              : [{ title: "", description: "" }]),
            { title: "", description: "" }
          ]
        })
      }
      className="bg-green-600 text-white px-3 py-1 rounded"
    >
      + Add Experience
    </button>
  </div>
)}

{sections.achievements && (
  <textarea name="achievements" placeholder="Achievements" onChange={handleChange} className="border p-2 w-full mt-2" />
)}

{sections.certifications && (
  <textarea name="certifications" placeholder="Certifications" onChange={handleChange} className="border p-2 w-full mt-2" />
)}

{sections.hobbies && (
  <textarea name="hobbies" placeholder="Hobbies" onChange={handleChange} className="border p-2 w-full mt-2" />
)}
        {/* BUTTONS */}
        <button onClick={downloadPDF} className="bg-black text-white w-full py-2 mt-3">
          Download Resume
        </button>

        <button onClick={() => handlePayment(9)} className="bg-blue-600 text-white w-full py-2 mt-2">
          Unlock ₹9
        </button>

        <button onClick={() => handlePayment(29)} className="bg-green-600 text-white w-full py-2 mt-2">
          Unlock All ₹29
        </button>

      </div>

      {/* RIGHT */}
      <div className="w-1/2 p-6 bg-gray-100">

        <div className="mb-4 flex bg-white p-1 rounded-lg shadow w-fit">

  <button
    onClick={() => setTemplate("one")}
    className={`px-4 py-2 rounded-md text-sm font-medium transition ${
      template === "one"
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    Template 1
  </button>

  <button
    onClick={() => setTemplate("two")}
    className={`px-4 py-2 rounded-md text-sm font-medium transition ${
      template === "two"
        ? "bg-green-600 text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    Template 2
  </button>

  <button
    onClick={() => setTemplate("three")}
    className={`px-4 py-2 rounded-md text-sm font-medium transition ${
      template === "three"
        ? "bg-gray-800 text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    Template 3
  </button>






</div>

<div className="w-1/2 p-6 bg-gray-100">

  {/* 🔥 ADD HERE */}
  <div className="mb-3 flex justify-end gap-2">

    <button
      onClick={() =>
        navigate("/preview", {
          state: {
            data: form,
            sections,
            template,
            order: sectionOrder,
          },
        })
      }
      className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded shadow"
    >
      Full View
    </button>

  </div>

  {/* EXISTING CODE */}
  <div id="resume-preview" className="bg-white p-4 shadow"></div>






</div>

        <div id="resume-preview" className="bg-white p-4 shadow">
          {template === "one" && <TemplateOne data={form} sections={sections} order={sectionOrder} />}
          {template === "two" && <TemplateTwo data={form} sections={sections} order={sectionOrder} />}
          {template === "three" && <TemplateThree data={form} sections={sections} order={sectionOrder} />}
        </div>

      </div>
    </div>
  );
}

// SORTABLE ITEM
function SortableItem({ id, sections, toggle }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      className="border p-2 mb-2 bg-gray-100 flex items-center justify-between"
    >

      {/* ✅ CHECKBOX (NO DRAG HERE) */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={sections[id]}
          onChange={() => toggle(id)}
        />
        {id.toUpperCase()}
      </label>

      {/* ✅ DRAG HANDLE (ONLY THIS DRAGS) */}
      <span
        {...attributes}
        {...listeners}
        className="cursor-move px-2 text-gray-500"
      >
        ☰
      </span>
    </div>
  );
}