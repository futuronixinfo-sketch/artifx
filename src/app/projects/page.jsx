
import ProjectsIntro from '@/components/sections/projects/ProjectsIntro';
import ProjectStory from '@/components/sections/projects/ProjectStory';
import CommonPhilosophy from '@/components/sections/projects/CommonPhilosophy';
import ProjectsCTA from '@/components/sections/projects/ProjectsCTA';

export const metadata = {
  title: "Case Studies — Digital Transformation Results | Artifx",
  description: "See how we've helped companies scale through intelligent system architecture and custom development.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsIntro />
      <ProjectStory />
      <CommonPhilosophy />
      <ProjectsCTA />
    </>
  );
}
