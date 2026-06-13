import LegalPage from '@/components/sections/LegalPage';

export const metadata = {
  title: 'Privacy Policy — Artifx',
  description: 'How Artifx collects, uses, and protects your information.',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="14 June 2026"
      intro="This Privacy Policy explains how Artifx ('we', 'us', 'our') collects, uses, and protects the information you share with us when you visit our website or get in touch about a project."
      sections={[
        {
          heading: 'Information We Collect',
          body: [
            'Contact details you submit through our forms — such as your name, email, company, and project description.',
            'Basic technical data — such as your browser type, device, and pages visited — collected automatically to keep the site working and improve it.',
            'Any information you choose to share with us by email or during a discovery call.',
          ],
        },
        {
          heading: 'How We Use Your Information',
          body: [
            'To respond to your enquiries and prepare proposals or estimates.',
            'To deliver, support, and improve the services you engage us for.',
            'To communicate with you about your project and, only if you opt in, occasional updates.',
          ],
        },
        {
          heading: 'How We Share Information',
          body: 'We do not sell your personal information. We only share data with trusted service providers (for example, hosting or analytics) where needed to operate our site and deliver our work, or where required by law.',
        },
        {
          heading: 'Data Retention',
          body: 'We keep your information only for as long as needed to provide our services and meet legal or business requirements. You can ask us to delete your data at any time.',
        },
        {
          heading: 'Cookies & Analytics',
          body: 'Our site may use cookies and privacy-respecting analytics to understand how visitors use it. You can control cookies through your browser settings.',
        },
        {
          heading: 'Your Rights',
          body: 'You may request access to, correction of, or deletion of your personal information. To do so, contact us using the email below.',
        },
        {
          heading: 'Changes To This Policy',
          body: 'We may update this policy from time to time. The latest version will always be available on this page with a revised date.',
        },
      ]}
    />
  );
}
