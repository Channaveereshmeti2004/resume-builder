import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function TemplateTwo({ data, sections, order }) {

  const demo = {
    name: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    phone: "+91 9876543210",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "https://linkedin.com/in/demo",
    github: "https://github.com/demo",
    summary: "Passionate developer skilled in building modern web applications.",
    skills: "React, Node.js, Python, SQL",
    education: "B.Tech in CSE\nXYZ Institute\nCGPA: 8.5",
    hobbies: "Coding, Gaming",
    certifications: "AWS, Google Cloud",

    projects: [
      {
        title: "E-Commerce App",
        description: "Built a full-stack e-commerce platform.",
        link: "https://github.com/demo"
      }
    ],

    experience: [
      {
        title: "Intern - ABC Tech",
        description: "Worked on frontend UI improvements."
      }
    ]
  };

  const safeOrder = order || [
    "image","summary","skills","education","projects",
    "experience","achievements","certifications","hobbies"
  ];

  const projects = Array.isArray(data?.projects) && data.projects.length > 0
    ? data.projects
    : demo.projects;

  const experience = Array.isArray(data?.experience) && data.experience.length > 0
    ? data.experience
    : demo.experience;

  return (
    <div className="flex text-sm min-h-[600px]">

      {/* LEFT */}
      <div className="w-1/3 bg-green-600 text-white p-4 text-center">

        {sections?.image && (
          <img
  src={data?.image || demo.image}
  alt="profile"
  className="w-20 h-20 rounded-full object-cover border"
/>
        )}

        <h2 className="text-xl font-bold">
          {data?.name || demo.name}
        </h2>

        <div className="mt-2 text-left space-y-1">
          <p><FaEnvelope /> {data?.email || demo.email}</p>
          <p><FaPhone /> {data?.phone || demo.phone}</p>
          <p><FaLinkedin /> {data?.linkedin || demo.linkedin}</p>
          <p><FaGithub /> {data?.github || demo.github}</p>
        </div>

        {/* SKILLS */}
        {sections.skills && (
          <>
            <h3 className="mt-4 font-semibold border-b text-black capitalize">Skills</h3>
            <p>{data?.skills || demo.skills}</p>
          </>
        )}

        {/* HOBBIES */}
        {sections.hobbies && (
          <>
            <h3 className="mt-4 font-semibold border-b text-black capitalize">Hobbies</h3>
            <p>{data?.hobbies || demo.hobbies}</p>
          </>
        )}

        {/* CERTIFICATIONS */}
        {sections.certifications && (
          <>
            <h3 className="mt-4 font-semibold border-b text-black capitalize">Certifications</h3>
            <p>{data?.certifications || demo.certifications}</p>
          </>
        )}
      </div>

      {/* RIGHT */}
      <div className="w-2/3 p-4">

        {safeOrder.map((section) => {
          if (!sections[section]) return null;

          switch (section) {

            case "summary":
              return <Section title="Summary" content={data?.summary || demo.summary} />;

            case "education":
              return <Section title="Education" content={data?.education || demo.education} />;

            case "projects":
              return (
                <div key="projects" className="mb-3">
                  <h2 className="font-semibold border-b capitalize">Projects</h2>

                  {projects.map((proj, i) => (
                    <div key={i} className="mb-2">

                      <div className="flex justify-between">
                        <p className="font-bold">{proj.title}</p>
                        {proj.link && (
                          <a href={proj.link} className="text-blue-600 text-sm">🔗 View</a>
                        )}
                      </div>

                      <p className="text-sm">{proj.description}</p>
                    </div>
                  ))}
                </div>
              );

            case "experience":
              return (
                <div key="experience">
                  <h2 className="font-semibold border-b capitalize">Experience</h2>
                  {experience.map((exp, i) => (
                    <div key={i}>
                      <p className="font-bold">{exp.title}</p>
                      <p className="text-sm">{exp.description}</p>
                    </div>
                  ))}
                </div>
              );

            default:
              return null;
          }
        })}

      </div>
    </div>
  );
}

const Section = ({ title, content }) => (
  <div className="mb-3">
    <h2 className="font-semibold border-b capitalize">{title}</h2>
    <p>{content}</p>
  </div>
);