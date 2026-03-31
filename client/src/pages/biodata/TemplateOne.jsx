export default function TemplateOne({ data }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 flex items-center justify-center p-6">
      
      <div className="bg-white max-w-md w-full p-6 rounded-2xl shadow-2xl border-4 border-pink-300 relative">

        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 rounded-t-2xl"></div>

        {/* Profile Image */}
        {data.image && (
          <div className="flex justify-center mt-4">
            <img
              src={data.image}
              alt="profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-pink-300 shadow-md"
            />
          </div>
        )}

        {/* Name */}
        <h1 className="text-2xl font-bold text-center text-purple-700 mt-4">
          {data.name}
        </h1>

        <p className="text-center text-sm text-gray-500 mb-4">
          💍 Marriage Biodata
        </p>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-pink-300 my-3"></div>

        {/* Personal Info */}
        <div className="space-y-1 text-gray-700">
          <p><b>Age:</b> {data.age}</p>
          <p><b>Height:</b> {data.height}</p>
          <p><b>Religion:</b> {data.religion}</p>
          <p><b>Caste:</b> {data.caste}</p>
          <p><b>God:</b> {data.god}</p>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-purple-300 my-3"></div>

        {/* Career */}
        <div className="space-y-1 text-gray-700">
          <p><b>Education:</b> {data.education}</p>
          <p><b>Occupation:</b> {data.occupation}</p>
          <p><b>Income:</b> {data.income}</p>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-yellow-300 my-3"></div>

        {/* Family */}
        <div className="space-y-1 text-gray-700">
          <p><b>Father:</b> {data.father}</p>
          <p><b>Mother:</b> {data.mother}</p>
        </div>

        {/* Siblings */}
        {data.siblings?.length > 0 && (
          <div className="mt-2 text-gray-700">
            <p><b>Siblings:</b></p>
            <ul className="list-disc ml-5">
              {data.siblings.map((sib, i) => (
                <li key={i}>{sib}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Divider */}
        <div className="border-t-2 border-dashed border-pink-300 my-3"></div>

        {/* Contact */}
        <div className="space-y-1 text-gray-700">
          <p><b>Address:</b> {data.address}</p>
          <p><b>Phone:</b> {data.phone}</p>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-400 mt-4">
          ✨ Designed with love ✨
        </div>
      </div>
    </div>
  );
}