import { notFound } from 'next/navigation';
import { serviceDetails, getServiceById } from '@/data/services-page';
import ServiceDetail from '@/components/sections/services/ServiceDetail';

export function generateStaticParams() {
    return serviceDetails.map((service) => ({
        id: service.id,
    }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const service = getServiceById(id);
    if (!service) return { title: 'Service Not Found' };
    return {
        title: `${service.title} — Business Systems & AI Automation | Artifx`,
        description: service.subtitle,
    };
}

export default async function ServiceDetailPage({ params }) {
    const { id } = await params;
    const service = getServiceById(id);
    if (!service) notFound();
    
    // Sanitize non-serializable fields (like React component functions) before passing to the Client Component
    const { icon, ...serializableService } = service;
    
    return <ServiceDetail service={serializableService} />;
}
