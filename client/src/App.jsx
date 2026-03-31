import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Builder from "./pages/Builder";


import BiodataHome from "./pages/BiodataHome";
import BiodataBuilder from "./pages/BiodataBuilder";
import Preview from "./pages/Preview";

// Import Templates
import TemplateOne from "./pages/biodata/TemplateOne";
import TemplateTwo from "./pages/biodata/TemplateTwo";
import TemplateThree from "./pages/biodata/TemplateThree";

import ResumeTemplates from "./pages/resume-templates";



import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";


function App() {

  // 🔥 Template Mapping
  const templateMap = {
    one: TemplateOne,
    two: TemplateTwo,
    three: TemplateThree,
  };

  return (
    <BrowserRouter>
      <Routes>




<Route path="/login" element={<Login />} />

// PROTECTED
<Route path="/" element={
  <ProtectedRoute>
    <Home />
  </ProtectedRoute>
} />

<Route path="/resume-templates" element={
  <ProtectedRoute>
    <ResumeTemplates />
  </ProtectedRoute>
} />

<Route path="/builder/:templateId" element={
  <ProtectedRoute>
    <Builder />
  </ProtectedRoute>
} />




        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Resume Builder */}
        <Route path="/builder/:id" element={<Builder />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Biodata Home */}
        <Route path="/biodata" element={<BiodataHome />} />

        {/* 🔥 Dynamic Biodata Builder */}
        <Route
          path="/biodata-builder/:id"
          element={<BiodataBuilder templateMap={templateMap} />}
        />

        {/* Preview */}
        <Route path="/preview" element={<Preview />} />
<Route path="/resume-templates" element={<ResumeTemplates />} />
<Route path="/builder/:templateId" element={<Builder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;