import ContactIntro from '@/components/sections/contact/ContactIntro';
import WhoShouldContact from '@/components/sections/contact/WhoShouldContact';
import ContactOptions from '@/components/sections/contact/ContactOptions';
import ContactForm from '@/components/sections/contact/ContactForm';
import WhatNext from '@/components/sections/contact/WhatNext';
import ContactCTA from '@/components/sections/contact/ContactCTA';

export const metadata = {
  title: "Contact Us — Get System Audit | Artifx",
  description: "Request a custom system audit, book a free strategy call, or talk to our systems experts to automate your business operations.",
};

export default function ContactPage() {
  return (
    <>
      <ContactIntro />
      <WhoShouldContact />
      <ContactOptions />
      <ContactForm />
      <WhatNext />
      <ContactCTA />
    </>
  );
}
