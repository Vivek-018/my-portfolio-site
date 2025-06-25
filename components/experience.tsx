import { Calendar, Building, Award } from "lucide-react";

type Experience = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  achievements: string[];
};

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div className="bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-700 card-hover mb-8">
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold font-cinzel gradient-text">
            {experience.title}
          </h3>
          <div className="flex items-center mt-2 text-slate-300">
            <Building size={18} className="text-amber-400 mr-2" />
            <span>{experience.company}</span>
            <span className="mx-2">•</span>
            <span>{experience.location}</span>
          </div>
        </div>
        <div className="flex items-center mt-2 md:mt-0 text-slate-400 bg-amber-400/10 px-3 py-1 rounded-full">
          <Calendar size={16} className="mr-2" />
          <span className="text-sm font-medium">{experience.period}</span>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold text-slate-200 mb-3">
          Responsibilities
        </h4>
        <ul className="space-y-2 text-slate-300 professional-text">
          {experience.description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-amber-400 mr-2 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold text-slate-200 mb-3 flex items-center">
          <Award size={18} className="text-amber-400 mr-2" />
          Key Achievements
        </h4>
        <ul className="space-y-2 text-slate-300 professional-text">
          {experience.achievements.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-amber-400 mr-2 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Junior Software Engineer",
      company: "Wasserstoff RJ Innovations Pvt. Ltd.",
      location: "Gurugram, India",
      period: "Mar 2025 - Present",
      description: [
        "Building the backend 'engine' for a project, creating efficient APIs using Node.js and Express to power seamless user experiences.",
        "Designing and implementing the database structure with PostgreSQL and Drizzle, ensuring reliable and well-organized data.",
        "Writing robust and maintainable backend code using TypeScript, bringing type safety and clarity to the project's foundation.",
      ],
      achievements: [
        "Reduced application load time by 40% through code optimization and implementing lazy loading techniques",
        "Developed a reusable component library that increased development efficiency by 25%",
        "Implemented automated testing that improved code coverage from 65% to 90%",
        "Received 'Rookie of the Year' award for exceptional contributions to team projects",
      ],
    },
    {
      id: 2,
      title: "Full-Stack Web Developer Intern",
      company: "Wasserstoff RJ Innovations Pvt. Ltd.",
      location: "Gurugram, India",
      period: "Sep 2024 - Mar 2025",
      description: [
        "Developed scalable web applications using React with Vite for the frontend and Node.js with Express for the backend, integrating RESTful APIs for seamless data exchange.",
        "Designed and implemented database schemas using MongoDB, PostgreSQL, and Drizzle ORM, ensuring efficient data modeling and querying.",
        "Implemented automated testing using Jest for unit testing and QA testing, ensuring high code quality and reliability.",
        "Utilized Puppeteer for web automation tasks, streamlining processes and improving efficiency.",
        "Gained hands-on experience with WebRTC for real-time communication, WebSockets for bi-directional communication, and Docker for containerization, enhancing application performance and deployment.",
      ],
      achievements: [
        "Developed a dashboard feature that improved client data visualization, receiving positive feedback from users",
        "Created documentation for onboarding processes that reduced training time for new team members",
        "Implemented a feature that reduced manual data entry by 60% through automation",
        "Internship was extended by 3 months due to exceptional performance and contributions",
      ],
    },
    {
      id: 3,
      title: "MERN Stack Trainee",
      company: "Ducat Education",
      period: "Jan 2024 - Jul 2024",
      location: "Gurugram, India",
      description: [
        "Acquired foundational knowledge and hands-on experience in building web applications using the MERN stack, covering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and Mongoose.",
        "Developed skills in designing and implementing dynamic user interfaces using React, creating RESTful APIs with Node.js and Express, and interacting with MongoDB databases using Mongoose.",
        "Gained proficiency in version control using Git and collaboration tools like GitHub, enabling efficient code management and team collaboration.",
        "Mastered the fundamentals of web development, including front-end and back-end technologies, and learned to integrate various tools and frameworks to deliver scalable and efficient web solutions.",
      ],
      achievements: [
        "Implemented a feature that reduced manual data entry by 60% through automation",
        "Internship was extended by 3 months due to exceptional performance and contributions",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-16 font-cinzel text-center text-slate-100">
         Experience
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 timeline-line rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-amber-400 border-4 border-slate-900 shadow-lg"></div>

                {/* Experience card with alternating layout on desktop */}
                <div
                  className={`md:w-5/12 ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  <ExperienceCard experience={experience} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
