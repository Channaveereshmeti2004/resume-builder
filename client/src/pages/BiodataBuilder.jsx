import { useState } from "react";
import { useParams } from "react-router-dom";

import TemplateOne from "./biodata/TemplateOne";
import TemplateTwo from "./biodata/TemplateTwo";
import TemplateThree from "./biodata/TemplateThree";

export default function BiodataBuilder() {

  const { id } = useParams();

  // 🔥 Template Map
  const templates = {
    one: TemplateOne,
    two: TemplateTwo,
    three: TemplateThree,
  };

  // Active Template
  const [activeTemplate, setActiveTemplate] = useState(id || "one");

  const Template = templates[activeTemplate];

  // 🔥 State
  const [data, setData] = useState({
    name: "",
    age: "",
    height: "",
    religion: "",
    caste: "",
    god: "", // ✅ Devaru field
    education: "",
    occupation: "",
    income: "",
    father: "",
    mother: "",
    address: "",
    phone: "",
    siblings: [""],
    image: null,
  });
const handlePayment = (amount) => {
  const options = {
    key: "rzp_test_SWbMaeA4rGPzWJ", // 🔥 replace this
    amount: amount * 100, // paise
    currency: "INR",
    name: "Biodata Builder",
    description: "Unlock Template",
    handler: function (response) {
      alert("Payment Successful ✅");
      console.log(response);
    },
    prefill: {
      name: data.name || "User",
      contact: data.phone || "9999999999",
    },
    theme: {
      color: "#6366f1",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
  // Handle Input Change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // 🔥 Siblings
  const handleSiblingChange = (index, value) => {
    const updated = [...data.siblings];
    updated[index] = value;
    setData({ ...data, siblings: updated });
  };

  const addSibling = () => {
    setData({ ...data, siblings: [...data.siblings, ""] });
  };

  const removeSibling = (index) => {
    const updated = data.siblings.filter((_, i) => i !== index);
    setData({ ...data, siblings: updated });
  };

  // 🔥 Image Upload
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setData({ ...data, image: URL.createObjectURL(file) });
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">

      {/* LEFT SIDE FORM */}
      <div className="w-1/2 p-6 overflow-y-auto bg-white">
        <h2 className="text-2xl font-bold mb-4">Enter Details</h2>

        {/* Inputs */}
        <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 w-full mb-2 rounded" />
        <input name="age" placeholder="Age" onChange={handleChange} className="border p-2 w-full mb-2 rounded" />
        <input name="height" placeholder="Height" onChange={handleChange} className="border p-2 w-full mb-2 rounded" />
        <input name="religion" placeholder="Religion" onChange={handleChange} className="border p-2 w-full mb-2 rounded" />
        <input name="caste" placeholder="Caste" onChange={handleChange} className="border p-2 w-full mb-2 rounded" />

        {/* ✅ Devaru Field */}
        <input name="god" placeholder="Devaru (God)" onChange={handleChange} className="border p-2 w-full mb-2 rounded" />

        <input name="education" placeholder="Education" onChange={handleChange} className="border p-2 w-full mb-2 rounded" />
        <input name="occupation" placeholder="Occupation" onChange={handleChange} className="border p-2 w-full mb-2 rounded" />
        <input name="income" placeholder="Income" onChange={handleChange} className="border p-2 w-full mb-2 rounded" />

        <input name="father" placeholder="Father Name" onChange={handleChange} className="border p-2 w-full mb-2 rounded" />
        <input name="mother" placeholder="Mother Name" onChange={handleChange} className="border p-2 w-full mb-2 rounded" />

        <input name="address" placeholder="Address" onChange={handleChange} className="border p-2 w-full mb-2 rounded" />
        <input name="phone" placeholder="Phone" onChange={handleChange} className="border p-2 w-full mb-2 rounded" />

        {/* 🔥 Siblings */}
        <h3 className="font-semibold mt-4 mb-2">Siblings</h3>

        {data.siblings.map((sib, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              value={sib}
              onChange={(e) => handleSiblingChange(index, e.target.value)}
              placeholder={`Sibling ${index + 1}`}
              className="border p-2 w-full rounded"
            />

            {data.siblings.length > 1 && (
              <button
                onClick={() => removeSibling(index)}
                className="bg-red-500 text-white px-2 rounded"
              >
                X
              </button>
            )}
          </div>
        ))}

        <button
          onClick={addSibling}
          className="bg-blue-600 text-white px-3 py-1 rounded mb-4"
        >
          + Add Sibling
        </button>

        {/* Image Upload */}
        <input type="file" accept="image/*" onChange={handleImage} />
        <div className="flex justify-center gap-6 mb-4 flex-wrap">

  <button
    onClick={() => handlePayment(9)}
    className="w-44 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-xl shadow-lg hover:scale-105 transition"
  >
    💡 Basic ₹9
  </button>

  <button
    onClick={() => handlePayment(19)}
    className="w-44 bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 rounded-xl shadow-lg hover:scale-105 transition"
  >
    💎 Premium ₹19
  </button>

</div>
      </div>

















      {/* RIGHT SIDE PREVIEW */}
      <div className="w-1/2 bg-gray-100 p-6 overflow-y-auto">

        {/* 🔥 Template Switch */}
        <div className="flex gap-3 mb-4 justify-center">
          <button
            onClick={() => setActiveTemplate("one")}
            className={`px-3 py-1 rounded ${
              activeTemplate === "one" ? "bg-blue-600 text-white" : "bg-white border"
            }`}
          >
            Template 1
          </button>

          <button
            onClick={() => setActiveTemplate("two")}
            className={`px-3 py-1 rounded ${
              activeTemplate === "two" ? "bg-green-600 text-white" : "bg-white border"
            }`}
          >
            Template 2
          </button>

          <button
            onClick={() => setActiveTemplate("three")}
            className={`px-3 py-1 rounded ${
              activeTemplate === "three" ? "bg-purple-600 text-white" : "bg-white border"
            }`}
          >
            Template 3
          </button>
        </div>

        {/* 🔥 Live Preview */}
        <Template data={data} />

      </div>

    </div>
  );
}