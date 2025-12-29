import { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Send } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      messages.push({
        ...formData,
        timestamp: new Date().toISOString(),
        read: false,
      });
      localStorage.setItem('contactMessages', JSON.stringify(messages));

      toast({
        title: "Success!",
        description: "Your message has been sent successfully!",
      });

      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              {t('contact_title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground text-lg">{t('contact_description')}</p>
          </div>

          <Card className="p-8 md:p-12 shadow-elegant backdrop-blur-sm bg-card/95 border-border/50 animate-fade-in-up hover:shadow-glow transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <label className="text-sm font-medium">{t('name')}</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 transition-all duration-300 focus:scale-[1.02]"
                  required
                />
              </div>

              <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <label className="text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {t('email')}
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 transition-all duration-300 focus:scale-[1.02]"
                  required
                />
              </div>

              <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <label className="text-sm font-medium">{t('message')}</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[150px] resize-none transition-all duration-300 focus:scale-[1.01]"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-glow animate-fade-in-up"
                style={{ animationDelay: '400ms' }}
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Sending...' : t('send_message')}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
