import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function TemplateOne({ data, sections, order }) {

  // 🔥 DEMO DATA (RANDOM)
  const demo = {
    name: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    phone: "+91 9876543210",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "https://linkedin.com/in/rahulsharma",
    github: "https://github.com/rahulsharma",
    summary:
      "Enthusiastic software developer with a passion for building scalable web applications.",
    skills: "JavaScript, React, Python, SQL, Node.js",
    education:
      "B.Tech in Computer Science\nXYZ Institute of Technology\nCGPA: 8.5",
    achievements: "Winner of Hackathon\nTop coder in college",
    certifications: "AWS Cloud Practitioner\nGoogle Data Analytics",
    hobbies: "Coding, Gaming, Reading",

    projects: [
      {
        title: "E-Commerce Website",
        description:
          "Developed a full-stack e-commerce platform with payment integration.",
        link: "https://github.com/demo",
      },
      {
        title: "Task Manager App",
        description:
          "Built a task management app using React and Node.js.",
        link: "https://github.com/demo",
      },
    ],

    experience: [
      {
        title: "Software Intern - ABC Tech",
        description:
          "Worked on frontend development and improved UI performance.",
      },
    ],
  };

  const safeOrder =
    order || [
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

  // 🔥 fallback logic
  const projects =
    Array.isArray(data?.projects) && data.projects.length > 0
      ? data.projects
      : demo.projects;

  const experience =
    Array.isArray(data?.experience) && data.experience.length > 0
      ? data.experience
      : demo.experience;

  return (
    <div className="p-6 text-sm">

      {/* HEADER */}
      <div className="border-b pb-3 mb-3 flex items-center gap-4">

        {sections?.image && (
          <img
  src={data?.image || demo.image}
  alt="profile"
  className="w-20 h-20 rounded-full object-cover border"
/>
        )}

        <div>
          <h1 className="text-2xl font-bold">
            {data?.name || demo.name}
          </h1>

          <div className="mt-1 space-y-1">

            <p className="flex items-center gap-2">
              <FaEnvelope /> {data?.email || demo.email}
            </p>

            <p className="flex items-center gap-2">
              <FaPhone /> {data?.phone || demo.phone}
            </p>

            <a
              href={data?.linkedin || demo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-blue-600"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href={data?.github || demo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-800"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>

      {/* 🔥 DYNAMIC SECTIONS */}
      {safeOrder.map((section) => {
        if (!sections[section]) return null;

        switch (section) {

          case "summary":
            return (
              <div key="summary" className="mb-3">
                <h2 className="font-semibold text-blue-600 border-b mb-1">
                  Summary
                </h2>
                <p>{data?.summary || demo.summary}</p>
              </div>
            );

          case "skills":
            return (
              <div key="skills" className="mb-3">
                <h2 className="font-semibold text-blue-600 border-b mb-1">
                  Skills
                </h2>
                <p>{data?.skills || demo.skills}</p>
              </div>
            );

          case "education":
            return (
              <div key="education" className="mb-3">
                <h2 className="font-semibold text-blue-600 border-b mb-1">
                  Education
                </h2>
                <p>{data?.education || demo.education}</p>
              </div>
            );

          case "projects":
            return (
              <div key="projects" className="mb-3">
                <h2 className="font-semibold text-blue-600 border-b mb-1">
                  Projects
                </h2>

                {projects.map((proj, i) => (
                  <div key={i} className="mb-2">

                    <div className="flex justify-between">
                      <p className="font-bold">{proj.title}</p>

                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          className="text-blue-600 text-sm"
                        >
                          🔗 View
                        </a>
                      )}
                    </div>

                    <p className="text-sm text-gray-700">
                      {proj.description}
                    </p>

                  </div>
                ))}
              </div>
            );

          case "experience":
            return (
              <div key="experience" className="mb-3">
                <h2 className="font-semibold text-blue-600 border-b mb-1">
                  Experience
                </h2>

                {experience.map((exp, i) => (
                  <div key={i}>
                    <p className="font-bold">{exp.title}</p>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            );

          case "achievements":
            return (
              <div key="achievements" className="mb-3">
                <h2 className="font-semibold text-blue-600 border-b mb-1">
                  Achievements
                </h2>
                <p>{data?.achievements || demo.achievements}</p>
              </div>
            );

          case "certifications":
            return (
              <div key="certifications" className="mb-3">
                <h2 className="font-semibold text-blue-600 border-b mb-1">
                  Certifications
                </h2>
                <p>{data?.certifications || demo.certifications}</p>
              </div>
            );

          case "hobbies":
            return (
              <div key="hobbies">
                <h2 className="font-semibold text-blue-600 border-b mb-1">
                  Hobbies
                </h2>
                <p>{data?.hobbies || demo.hobbies}</p>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}