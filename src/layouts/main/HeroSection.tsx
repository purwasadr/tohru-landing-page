import { Button } from '@/common/components';

const HeroSection = () => {
  return (
    <section className="relative h-[500px] flex flex-col items-center justify-center space-y-10 w-full">
      <h1 className="">Decentralize Finance</h1>
      <p className="font-medium text-center text-secondary">Tohru is a revolutionari SocialFi ecosystem designed to connect worldwide <br /> cryptocurrency users.</p>
      <Button className="py-3.5 px-6">Go to the Socialfi</Button>
    </section>
  );
}

export default HeroSection;