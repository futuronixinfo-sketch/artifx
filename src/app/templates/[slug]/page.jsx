import { redirect } from 'next/navigation';

// Return empty to prevent static building of slug pages
export function generateStaticParams() {
  return [];
}

export const metadata = {
  title: "Templates — Launching Soon | Artifx",
  description: "Premium pre-built website blueprints. Under construction, launching soon.",
};

export default async function TemplateDetailPage() {
  redirect('/templates');
}
