'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { contactOptions } from '@/data/contact-page';
import { ArrowRight, Calendar, Send, Users } from 'lucide-react';

const iconMap = {
  "Strategy Call": Calendar,
  "Project Discussion": Send,
  "Partnership / SaaS": Users
};

export default function ContactOptions() {
  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white text-black border-b border-gray-100 select-none">
      <Container className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactOptions.map((option, idx) => {
            const Icon = iconMap[option.title] || Send;
            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                onClick={scrollToForm}
                className="group p-8 bg-gradient-to-br from-white via-white to-gray-50/70 border border-gray-200 hover:border-black hover:shadow-2xl hover:shadow-black/5 hover:scale-[1.01] transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[300px] rounded-3xl relative overflow-hidden shadow-sm"
              >
                {/* Subtle Grid inside each card */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:16px_16px] opacity-35 pointer-events-none z-0" />
                
                <div className="relative z-10 space-y-6">
                  {/* High-tech Icon bezel */}
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-red-50 group-hover:border-red-100 transition-colors duration-500 shrink-0">
                    <Icon className="w-5 h-5 text-gray-500 group-hover:text-red-600 transition-colors duration-500" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold uppercase tracking-tight text-black group-hover:text-red-600 transition-colors duration-300">
                      {option.title}
                    </h3>
                    <p className="text-gray-500 text-xs font-sans font-light leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 border-t border-gray-100 pt-4 mt-6">
                  <div className="flex items-center gap-2 text-black text-[10px] font-mono font-bold uppercase tracking-wider mb-2 group-hover:translate-x-1 transition-transform duration-350">
                    {option.cta} 
                    <ArrowRight className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <p className="text-[8px] font-mono text-gray-400 uppercase tracking-widest leading-none">
                    {option.micro}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

