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
    <section className="py-24 bg-[#FAFAF8] text-black border-b-2 border-black select-none">
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
                className="group bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 cursor-pointer flex flex-col justify-between min-h-75 p-8"
              >
                <div className="space-y-6">
                  {/* Icon bezel */}
                  <div className="w-10 h-10 bg-[#FFE500] border-2 border-black flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-black" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold uppercase tracking-tight text-black">
                      {option.title}
                    </h3>
                    <p className="text-gray-500 text-xs font-sans font-light leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </div>

                <div className="border-t-2 border-black pt-4 mt-6">
                  <div className="flex items-center gap-2 text-black text-[10px] font-mono font-bold uppercase tracking-wider mb-2 group-hover:translate-x-1 transition-transform duration-150">
                    {option.cta}
                    <ArrowRight className="w-3.5 h-3.5 text-red-600" />
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
