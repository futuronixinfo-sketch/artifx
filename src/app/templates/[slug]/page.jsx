import { templatesList } from '@/data/templates';
import TemplateDetailClient from './TemplateDetailClient';
import { notFound } from 'next/navigation';

// Prerender all 6 templates statically during build time for optimal performance
export function generateStaticParams() {
  return templatesList.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const template = templatesList.find((t) => t.slug === slug);
  if (!template) return {};

  return {
    title: `${template.name} — Website Template Blueprint | Artifx`,
    description: template.description,
  };
}

export default async function TemplateDetailPage({ params }) {
  const { slug } = await params;
  const template = templatesList.find((t) => t.slug === slug);

  if (!template) {
    notFound();
  }

  return <TemplateDetailClient template={template} />;
}
