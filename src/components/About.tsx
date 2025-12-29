import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { Palette, Smile, Briefcase, Code } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t('design_quality'), value: 90, icon: Palette, color: 'text-purple-500' },
    { label: t('user_satisfaction'), value: 95, icon: Smile, color: 'text-green-500' },
    { label: t('work_readiness'), value: 94, icon: Briefcase, color: 'text-blue-500' },
    { label: t('frontend_knowledge'), value: 93, icon: Code, color: 'text-cyan-500' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              {t('about_title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <Card className="p-8 md:p-12 shadow-elegant backdrop-blur-sm bg-card/95 border-border/50 animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center max-w-3xl mx-auto">
              {t('about_description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="space-y-3 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <stat.icon className={`w-5 h-5 ${stat.color} group-hover:scale-110 transition-transform`} />
                      <span className="font-semibold text-foreground">{stat.label}</span>
                    </div>
                    <span className="text-primary font-bold text-lg">{stat.value}%</span>
                  </div>
                  <Progress value={stat.value} className="h-3" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
