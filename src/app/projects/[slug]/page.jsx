import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/data/projects-page';
import ProjectDetail from '@/components/sections/projects/ProjectDetail';

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return { title: 'Project Not Found' };
    return {
        title: `${project.client} — Case Study | Artifx`,
        description: project.context,
    };
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();
    return <ProjectDetail project={project} />;
}
