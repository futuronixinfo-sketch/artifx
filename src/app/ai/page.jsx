import AIHero from '@/components/sections/ai/AIHero';
import AIFails from '@/components/sections/ai/AIFails';
import AIPhilosophy from '@/components/sections/ai/AIPhilosophy';
import AICapabilities from '@/components/sections/ai/AICapabilities';
import AIArchitecture from '@/components/sections/ai/AIArchitecture';
import AICTA from '@/components/sections/ai/AICTA';

export const metadata = {
  title: "AI Integrations — Workflow Intelligence | Artifx",
  description: "Custom AI systems, workflow automations, intelligent chatbots, and content pipelines designed to scale operations secure-by-default.",
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
