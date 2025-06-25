import type React from "react";
import {
  Code,
  Layout,
  Globe,
  Database,
  Server,
  Cpu,
  BrainIcon,
  Code2Icon,
  Palette,
} from "lucide-react";

const SkillCategory = ({
  title,
  skills,
  icon: Icon,
}: {
  title: string;
  skills: { name: string; level: number }[];
  icon: React.ElementType;
}) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-700 card-hover">
      <div className="flex items-center mb-6">
        <div className="p-2 bg-amber-400/10 rounded-lg mr-3">
          <Icon className="text-amber-400" size={24} />
        </div>
        <h3 className="text-xl font-bold font-cinzel text-slate-100">
          {title}
        </h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-slate-200 font-medium">{skill.name}</span>
              <span className="text-slate-400 text-sm">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
      ],
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 70 },
      ],
    },
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "Next.js", level: 90 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      title: "Design",
      icon: Palette,
      skills: [
        { name: "UI/UX Design", level: 80 },
        { name: "Figma", level: 85 },
        { name: "Canva", level: 75 },
        { name: "Responsive Design", level: 90 },
      ],
    },
    {
      title: "API & Web Tech",
      icon: Globe,
      skills: [
        { name: "RESTful APIs", level: 85 },
        { name: "GraphQL", level: 70 },
        { name: "Progressive Web Apps", level: 75 },
        { name: "Web Performance", level: 80 },
      ],
    },

    {
      title: "DevOps & Cloud",
      icon: Cpu,
      skills: [
        { name: "Docker", level: 65 },
        { name: "Linode VPS", level: 75 },
      ],
    },
    {
      title: "AI & Automation",
      icon: BrainIcon,
      skills: [{ name: "Puppeteer", level: 90 }],
    },
    {
      title: "Languages & Tools",
      icon: Code2Icon,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 65 },
        { name: "C++", level: 70 },
        { name: "Git & GitHub", level: 80 },
        { name: "Jira", level: 80 },
      ],
    },
    {
      title: "Testing & QA",
      icon: Code2Icon,
      skills: [
        { name: "Jest", level: 90 },
        { name: "Unit & Integration Testing", level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-16 font-cinzel text-center text-slate-100">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
