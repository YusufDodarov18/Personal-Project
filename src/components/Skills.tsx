import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import cplusplus from "../img/c++.png";
import git from "../img/git.png";
import react from "../img/react.png";
import htmlCss from "../img/html-css.png";
import js from "../img/js.png";
import ts from "../img/ts.png";
import tcss from "../img/tcss.png";
import scss from "../img/sc.png";
import bt from "../img/b.png";
import next from "../img/next.png";
import img from "../img/image.png";
import { Code2, Database, Palette, Wrench, Github } from "lucide-react";

export const Skills = () => {
  const { t, language } = useLanguage();

  const skillCategories = [
    {
      icon: Wrench,
      title: {
        tj: "Назорати версия ва абзорҳо",
        ru: "Контроль версий и инструменты",
        en: "Version Control & Tools",
      },
      skills: [
        { name: "Git", level: 99, icon: git, color: "text-orange-500" },
        {
          name: "GitHub",
          level: 99,
          icon: Github,
          color: "text-gray-700 dark:text-gray-300",
        },
      ],
    },
    {
      icon: Code2,
      title: {
        tj: "Забонҳои барномасозӣ",
        ru: "Языки программирования",
        en: "Programming Languages",
      },
      skills: [
        { name: "C++", level: 83, icon: cplusplus, color: "text-blue-600" },
        { name: "HTML/CSS", level: 96, icon: img, color: "text-orange-600" },
        { name: "JavaScript", level: 89, icon: js, color: "text-yellow-500" },
        { name: "TypeScript", level: 93, icon: ts, color: "text-blue-500" },
      ],
    },
    {
      icon: Database,
      title: {
        tj: "Китобхонаҳо ва Фреймворкҳо",
        ru: "Библиотеки и фреймворки",
        en: "Libraries & Frameworks",
      },
      skills: [
        { name: "React", level: 94, icon: react, color: "text-cyan-500" },
        {
          name: "Next.js",
          level: 90,
          icon: next,
          color: "text-gray-900 dark:text-white",
        },
        {
          name: "Tailwind CSS",
          level: 100,
          icon: tcss,
          color: "text-cyan-400",
        },
      ],
    },
    {
      icon: Palette,
      title: {
        tj: "Пешкоркардкунандагони CSS",
        ru: "CSS препроцессоры",
        en: "CSS Preprocessors",
      },
      skills: [
        { name: "Bootstrap", level: 97, icon: bt, color: "text-purple-600" },
        { name: "Sass/SCSS", level: 100, icon: scss, color: "text-pink-500" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              {t("skills_title")}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground text-lg">
              {t("skills_description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="p-6 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 border-border/50 backdrop-blur-sm bg-card/95 animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">
                    {category.title[language]}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2 group">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          {typeof skill.icon === "string" ? (
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
                            />
                          ) : (
                            <skill.icon
                              className={`w-6 h-6 ${skill.color} group-hover:scale-110 transition-transform`}
                            />
                          )}
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-primary font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2.5" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
