import { MapPin, Phone, Mail, MessageCircle, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      label: t('address'),
      value: 'Душанбе, Тоҷикистон',
    },
    {
      icon: Phone,
      label: t('phone'),
      value: '+992 93 944 33 23',
      link: 'tel:+992939443323',
    },
    {
      icon: Mail,
      label: t('email'),
      value: 'dodarovyusuf09@gmail.com',
      link: 'mailto:dodarovyusuf09@gmail.com',
    },
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      label: 'Telegram',
      link: 'https://t.me/dodarov_7029',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      link: 'https://wa.me/992939443323',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      link: 'https://instagram.com/yusufdodarov',
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Yusuf Dodarov
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 group animate-fade-in-up hover:translate-x-2 transition-transform duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-bold">{t('social_media')}</h3>
              <div className="space-y-4">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group hover:translate-x-2 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${(index + 3) * 100}ms` }}
                  >
                    <div className="p-2 bg-primary/10 group-hover:bg-primary rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground">
              © 2025 Yusuf Dodarov. {t('rights_reserved')}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
