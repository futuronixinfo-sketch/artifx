import { uiStyles } from '@/data/uiStyles';
import UIStyleDetail from '@/components/ui-styles/UIStyleDetail';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return uiStyles.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const style = uiStyles.find((s) => s.slug === slug);
  if (!style) return {};
  return {
    title: `${style.name} — UI Style Guide | Artifx`,
    description: style.description,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const style = uiStyles.find((s) => s.slug === slug);
  if (!style) notFound();
  return <UIStyleDetail style={style} />;
}
