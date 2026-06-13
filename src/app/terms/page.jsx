import LegalPage from '@/components/sections/LegalPage';

export const metadata = {
  title: 'Terms of Service — Artifx',
  description: 'The terms that govern your use of the Artifx website and services.',
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="14 June 2026"
      intro="These Terms of Service govern your use of the Artifx website and the services we provide. By using our site or engaging us for work, you agree to these terms."
      sections={[
        {
          heading: 'Our Services',
          body: 'Artifx designs and builds websites, web and mobile applications, dashboards, and AI-powered systems. The specific scope, deliverables, timeline, and price for any project are agreed in a separate written proposal or agreement.',
        },
        {
          heading: 'Estimates & Pricing',
          body: 'Any prices or estimates shown on this website (including the estimate tool) are indicative only. Final pricing is confirmed in writing after a discovery conversation and may change based on scope, features, and timeline.',
        },
        {
          heading: 'Client Responsibilities',
          body: [
            'Providing accurate information, content, and timely feedback needed to complete the work.',
            'Ensuring you have the rights to any materials you provide to us.',
            'Making agreed payments on schedule.',
          ],
        },
        {
          heading: 'Intellectual Property',
          body: 'Unless agreed otherwise in writing, ownership of final delivered work transfers to you once payment is complete. We may showcase non-confidential aspects of the work in our portfolio.',
        },
        {
          heading: 'Payment',
          body: 'Payment terms, milestones, and schedules are set out in your project agreement. Late or missed payments may pause work until resolved.',
        },
        {
          heading: 'Limitation Of Liability',
          body: 'We deliver our services with reasonable care and skill. To the extent permitted by law, Artifx is not liable for indirect or consequential losses, and our total liability is limited to the fees paid for the relevant project.',
        },
        {
          heading: 'Termination',
          body: 'Either party may end an engagement as described in the project agreement. Work completed up to the termination date remains payable.',
        },
        {
          heading: 'Governing Law',
          body: 'These terms are governed by the laws of India, unless otherwise agreed in writing in your project agreement.',
        },
      ]}
    />
  );
}
