import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function TemplateThree({ data, sections, order }) {

  const demo = {
    name: "Rahul Sharma",
    email: "rahul@email.com",
    phone: "+91 9876543210",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "linkedin.com/demo",
    github: "github.com/demo",
    summary: "Software developer passionate about clean UI and scalable apps.",
    skills: "React, Python, SQL",
    education: "B.Tech - XYZ University",
    hobbies: "Reading, Coding",

    projects: [
      {
        title: "Portfolio Website",
        description: "Created a personal portfolio using React.",
        link: "https://github.com/demo"
      }
    ],

    experience: [
      {
        title: "Intern - TechCorp",
        description: "Worked on frontend applications."
      }
    ]
  };

  const safeOrder = order || [];

  const projects = data?.projects?.length ? data.projects : demo.projects;
  const experience = data?.experience?.length ? data.experience : demo.experience;

  return (
    <div className="p-6 shadow text-sm max-w-3xl mx-auto">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            {data?.name || demo.name}
          </h1>

          <p>{data?.email || demo.email} | {data?.phone || demo.phone}</p>
          <p>{data?.linkedin || demo.linkedin}</p>
          <p>{data?.github || demo.github}</p>
        </div>

        {sections.image && (
          <img
  src={data?.image || demo.image}
  alt="profile"
  className="w-20 h-20 rounded-full object-cover border"
/>
        )}
      </div>

      <hr className="my-4" />

      {safeOrder.map((section) => {
        if (!sections[section]) return null;

        switch (section) {

          case "summary":
            return <Block title="Summary" content={data?.summary || demo.summary} />;

          case "skills":
            return <Block title="Skills" content={data?.skills || demo.skills} />;

          case "education":
            return <Block title="Education" content={data?.education || demo.education} />;

          case "projects":
            return (
              <div key="projects" className="mb-3">
                <h2 className="font-bold text-lg">Projects</h2>

                {projects.map((proj, i) => (
                  <div key={i} className="mb-2">

                    <div className="flex justify-between">
                      <p className="font-bold">{proj.title}</p>
                      {proj.link && <a href={proj.link}>🔗</a>}
                    </div>

                    <p>{proj.description}</p>
                  </div>
                ))}
              </div>
            );

          case "experience":
            return (
              <div key="experience">
                <h2 className="font-bold text-lg">Experience</h2>

                {experience.map((exp, i) => (
                  <div key={i}>
                    <p className="font-bold">{exp.title}</p>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

const Block = ({ title, content }) => (
  <div className="mb-3">
    <h2 className="font-bold text-lg">{title}</h2>
    <p>{content}</p>
  </div>
);