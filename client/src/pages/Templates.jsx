import { useNavigate } from "react-router-dom";

export default function Templates() {
  const navigate = useNavigate();

  const templates = [
    { id: "one", name: "Classic Resume", recommended: true },
    { id: "two", name: "Modern Resume", recommended: true },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-2xl font-bold mb-6">
        All templates (2)
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {templates.map((temp) => (
          <div
            key={temp.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
          >
            {/* Fake Preview Box */}
            <div className="h-64 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500">
              Preview
            </div>

            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold">{temp.name}</h2>

              {temp.recommended && (
                <span className="text-xs bg-blue-100 px-2 py-1 rounded">
                  Recommended
                </span>
              )}
            </div>

            <button
              onClick={() => navigate(`/builder/${temp.id}`)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Choose template
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}