import TemplateOne from "../components/TemplateOne";
import TemplateTwo from "../components/TemplateTwo";
import TemplateThree from "../components/TemplateThree";

export default function Preview() {

  const saved = JSON.parse(localStorage.getItem("resumeData"));

  if (!saved) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        ⚠️ No resume data found
      </div>
    );
  }

  const { data, sections, template, order } = saved;

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-4xl mx-auto bg-white p-6 shadow">

        {template === "one" && (
          <TemplateOne data={data} sections={sections} order={order} />
        )}

        {template === "two" && (
          <TemplateTwo data={data} sections={sections} order={order} />
        )}

        {template === "three" && (
          <TemplateThree data={data} sections={sections} order={order} />
        )}

      </div>

    </div>
  );
}