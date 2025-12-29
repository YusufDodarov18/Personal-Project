import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Internet Shop',
      description: {
        tj: 'Мағозаи онлайн бо функсияҳои пурра барои харид',
        ru: 'Интернет-магазин с полным функционалом для покупок',
        en: 'Full-featured online shopping platform',
      },
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Instagram Clone',
      description: {
        tj: 'Шабакаи иҷтимоӣ бо функсияҳои асосии Instagram',
        ru: 'Социальная сеть с основным функционалом Instagram',
        en: 'Social media platform with core Instagram features',
      },
      tags: ['Next.js', 'React', 'CSS'],
    },
    {
      title: 'OmuzAcademy',
      description: {
        tj: 'Платформаи омӯзишӣ барои таълими онлайн',
        ru: 'Образовательная платформа для онлайн обучения',
        en: 'Educational platform for online learning',
      },
      tags: ['React', 'JavaScript', 'Bootstrap'],
    },
    {
      title: 'Somon.tj',
      description: {
        tj: 'Вебсайти корпоративӣ бо дизайни муосир',
        ru: 'Корпоративный веб-сайт с современным дизайном',
        en: 'Corporate website with modern design',
      },
      tags: ['Next.js', 'TypeScript', 'Sass'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              {t('projects_title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground text-lg">{t('projects_description')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group p-6 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2 border-border/50 backdrop-blur-sm bg-card/95 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-300" />
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description[useLanguage().language]}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </Badge>
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
