export default function TemplateTwo({ data }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex items-center justify-center p-6">

      <div className="max-w-md w-full backdrop-blur-lg bg-white/70 border border-white/40 rounded-2xl shadow-xl p-6">

        {/* Profile */}
        <div className="text-center">
          {data.image && (
            <img
              src={data.image}
              alt="profile"
              className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-white shadow-md"
            />
          )}

          <h1 className="text-2xl font-bold text-gray-800 mt-3">
            {data.name}
          </h1>
          <p className="text-indigo-600 font-medium">
            {data.occupation}
          </p>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-gray-300"></div>

        {/* Info Section */}
        <div className="grid grid-cols-2 gap-3 text-sm">

          <div className="bg-white rounded-lg p-2 shadow-sm">
            <p className="text-gray-500 text-xs">Age</p>
            <p className="font-semibold">{data.age}</p>
          </div>

          <div className="bg-white rounded-lg p-2 shadow-sm">
            <p className="text-gray-500 text-xs">Height</p>
            <p className="font-semibold">{data.height}</p>
          </div>

          <div className="bg-white rounded-lg p-2 shadow-sm">
            <p className="text-gray-500 text-xs">Religion</p>
            <p className="font-semibold">{data.religion}</p>
          </div>

          <div className="bg-white rounded-lg p-2 shadow-sm">
            <p className="text-gray-500 text-xs">Caste</p>
            <p className="font-semibold">{data.caste}</p>
          </div>

          <div className="bg-white rounded-lg p-2 shadow-sm">
            <p className="text-gray-500 text-xs">God</p>
            <p className="font-semibold">{data.god}</p>
          </div>

          <div className="bg-white rounded-lg p-2 shadow-sm">
            <p className="text-gray-500 text-xs">Income</p>
            <p className="font-semibold">{data.income}</p>
          </div>

          <div className="bg-white rounded-lg p-2 shadow-sm col-span-2">
            <p className="text-gray-500 text-xs">Phone</p>
            <p className="font-semibold">{data.phone}</p>
          </div>

        </div>

        {/* Education */}
        <div className="mt-4 bg-white rounded-lg p-3 shadow-sm text-sm">
          <p className="text-gray-500 text-xs">Education</p>
          <p className="font-semibold">{data.education}</p>
        </div>

        {/* Address */}
        <div className="mt-3 bg-white rounded-lg p-3 shadow-sm text-sm">
          <p className="text-gray-500 text-xs">Address</p>
          <p className="font-semibold">{data.address}</p>
        </div>

        {/* Family */}
        <div className="mt-4">
          <p className="text-sm font-semibold text-gray-700 mb-1">Family</p>
          <div className="bg-white rounded-lg p-3 shadow-sm text-sm">
            <p>Father: {data.father}</p>
            <p>Mother: {data.mother}</p>
          </div>
        </div>

        {/* Siblings */}
        {data.siblings?.length > 0 && (
          <div className="mt-3">
            <p className="text-sm font-semibold text-gray-700 mb-1">Siblings</p>
            <div className="bg-white rounded-lg p-3 shadow-sm text-sm">
              {data.siblings.map((sib, i) => (
                <p key={i}>• {sib}</p>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-4">
          ✨ Biodata Profile ✨
        </p>

      </div>
    </div>
  );
}