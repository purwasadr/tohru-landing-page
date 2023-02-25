import {
  AvailableOnSection,
  EcosystemSection,
  HeroSection,
  MobileAppSection,
  Navbar,
  OperationalTeamSection,
  TradedOnSection,
} from '@/layouts/main';
import ContactSection from '@/layouts/main/ContactSection';
import FooterLinkSection from '@/layouts/main/FooterLinkSection';
import PartnersSection from '@/layouts/main/PartnersSection';
import RocketSection from '@/layouts/main/RocketSection';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-primary overflow-hidden">
      <Head>
        <title>Tohru</title>
      </Head>
      <header className="flex justify-center w-full">
        <Navbar />
      </header>
      <div className="max-w-7xl px-6 md:px-10 lg:px-16 [&>section]:py-10 [&>section]:md:py-20 w-full">
        <HeroSection />
        <PartnersSection />
        <RocketSection />
        <EcosystemSection />
        <AvailableOnSection />
        <TradedOnSection />
        <MobileAppSection />
        <OperationalTeamSection />
      </div>
      <div className="relative w-full">
        <div className="z-0 absolute bg-fuchsia-700 blur-[100px] opacity-20 rounded-full top-0 -translate-y-[50%] -left-[200px] w-[400px] h-[400px]"></div>
      </div>
      <footer className="w-full mt-20 md:mt-36">
        <ContactSection />
        <FooterLinkSection />
      </footer>
    </div>
  );
}
