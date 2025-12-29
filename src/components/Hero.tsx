import { TypingAnimation } from "./TypingAnimation";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 dark:from-black/60 dark:via-black/50 dark:to-black/70" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="space-y-2">
            <p className="text-lg md:text-xl  text-primary-foreground/80 font-medium animate-fade-in-up">
              {t("hero_greeting")}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4">
              <TypingAnimation
                texts={["Yusuf Dodarov", t("hero_role")]}
                typingSpeed={120}
                deletingSpeed={60}
                pauseTime={2500}
              />
            </h1>
          </div>

          <p className="text-lg md:text-xl  text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            {t("hero_description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-glow hover:shadow-elegant transition-all hover:scale-105"
              onClick={() => scrollToSection("projects")}
            >
              {t("view_projects")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={`border-primary-foreground/30 px-8 py-6 text-lg transition-all hover:scale-105 hover:bg-primary-foreground/10 ${"dark:text-white text-black"}`}
              onClick={() => scrollToSection("contact")}
            >
              {t("contact_me")}
            </Button>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary-foreground/60" />
          </div>
        </div>
      </div>
    </section>
  );
};
