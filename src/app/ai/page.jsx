

import AIHero from '@/components/sections/ai/AIHero';
import AIFails from '@/components/sections/ai/AIFails';
import AIPhilosophy from '@/components/sections/ai/AIPhilosophy';
import AICapabilities from '@/components/sections/ai/AICapabilities';
import AIArchitecture from '@/components/sections/ai/AIArchitecture';
import AICTA from '@/components/sections/ai/AICTA';

export const metadata = {
  title: "AI Intelligence Layer — Automation & Agents | Artifx",
  description: "Integrate AI into your business. Custom agents, workflow automation, and predictive modeling.",
};

export default function AIPage() {
  return (
    <>
      <AIHero />
      <AIFails />
      <AIPhilosophy />
      <AICapabilities />
      <AIArchitecture />
      <AICTA />
    </>
  );
}
