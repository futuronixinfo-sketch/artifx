'use client';
import { motion } from 'framer-motion';
import { partnershipModel } from '@/data/home';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Check } from 'lucide-react';

export default function PartnershipModel() {
  return (
    <section className="py-28 bg-white border-t border-gray-200">
      <Container>
          <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-50 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <span className="text-xs font-semibold text-red-600 uppercase tracking-[0.2em] mb-4 block">[ 08 / ALIGNMENT ]</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black leading-tight mb-6">
                We don&apos;t work like <span className="gradient-text">vendors</span>.
              </h2>
              <p className="text-base text-red-600/50 mb-8 leading-relaxed">
                {partnershipModel.subtitle}
              </p>
              <Button variant="custom" size="md" href="/contact" className="rounded-xl bg-red-600 text-white hover:bg-red-500 border-0 shadow-lg shadow-red-500/20">
                Start a Partnership
              </Button>
            </div>

            <div className="space-y-3">
              {partnershipModel.features.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center shadow-lg">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-tight text-red-600/70">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
