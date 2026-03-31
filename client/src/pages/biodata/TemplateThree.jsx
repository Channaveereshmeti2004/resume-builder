export default function TemplateTwo({ data }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 p-6">

      <div className="max-w-md w-full bg-gradient-to-b from-yellow-100 to-white border-[6px] border-yellow-400 rounded-xl shadow-2xl p-6 relative">

        {/* Corner Decorations */}
        <div className="absolute top-2 left-2 text-yellow-500 text-xl">✦</div>
        <div className="absolute top-2 right-2 text-yellow-500 text-xl">✦</div>
        <div className="absolute bottom-2 left-2 text-yellow-500 text-xl">✦</div>
        <div className="absolute bottom-2 right-2 text-yellow-500 text-xl">✦</div>

        {/* Header */}
        <h2 className="text-center text-yellow-700 font-semibold tracking-widest text-sm">
          💍 Marriage Biodata 💍
        </h2>

        {/* Image */}
        {data.image && (
          <div className="flex justify-center mt-4">
            <img
              src={data.image}
              alt="profile"
              className="w-28 h-28 rounded-full border-4 border-yellow-400 object-cover shadow-md"
            />
          </div>
        )}

        {/* Name */}
        <h1 className="text-center text-2xl font-bold text-gray-800 mt-3">
          {data.name}
        </h1>

        <p className="text-center text-gray-600 text-sm mb-3">
          {data.occupation}
        </p>

        {/* Divider */}
        <div className="border-t border-yellow-400 my-3"></div>

        {/* Personal Info */}
        <div className="text-sm text-gray-700 space-y-1">
          <p><b>Age:</b> {data.age}</p>
          <p><b>Height:</b> {data.height}</p>
          <p><b>Religion:</b> {data.religion}</p>
          <p><b>Caste:</b> {data.caste}</p>
          <p><b>God:</b> {data.god}</p>
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-300 my-3"></div>

        {/* Career */}
        <div className="text-sm text-gray-700 space-y-1">
          <p><b>Education:</b> {data.education}</p>
          <p><b>Income:</b> {data.income}</p>
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-300 my-3"></div>

        {/* Family */}
        <div className="text-sm text-gray-700">
          <p className="font-semibold text-yellow-700">Family Details</p>
          <p>Father: {data.father}</p>
          <p>Mother: {data.mother}</p>
        </div>

        {/* Siblings */}
        {data.siblings?.length > 0 && (
          <div className="mt-2 text-sm text-gray-700">
            <p className="font-semibold text-yellow-700">Siblings</p>
            {data.siblings.map((sib, i) => (
              <p key={i}>• {sib}</p>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-yellow-300 my-3"></div>

        {/* Contact */}
        <div className="text-sm text-gray-700">
          <p><b>Address:</b> {data.address}</p>
          <p><b>Phone:</b> {data.phone}</p>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-yellow-600 mt-4 italic">
          ✨ Seeking a suitable match ✨
        </div>

      </div>
    </div>
  );
}