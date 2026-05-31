
import ContactIntro from '@/components/sections/contact/ContactIntro';
import WhoShouldContact from '@/components/sections/contact/WhoShouldContact';
import ContactOptions from '@/components/sections/contact/ContactOptions';
import ContactForm from '@/components/sections/contact/ContactForm';
import WhatNext from '@/components/sections/contact/WhatNext';
import ContactCTA from '@/components/sections/contact/ContactCTA';

export const metadata = {
  title: "Contact — Start Your Transformation | Artifx",
  description: "Ready to scale? Book a strategy call to verify if we are the right partner for your growth.",
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
