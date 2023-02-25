import { mobile } from '@/common/assets';
import { Button } from '@/common/components';
import Image from 'next/image';

const MobileAppSection = () => {
  return (
    <section className="md:mt-4 relative flex flex-col md:flex-row">
      <div className="flex flex-1 flex-col items-start">
        <h2>Mobile App</h2>
        <p className="mt-7 w-full max-w-lg">
          Get your daily dose of crypto at any place, anytime, without
          any hassle Dive into a fully crypto-focused, socially gamified
          atmosphere and unite with our lovely community.
        </p>
        <Button className="mt-7">Coming Soon</Button>
      </div>
      <div className="flex flex-1 justify-center max-md:mt-8">
        <div className="relative">
          <Image src={mobile} width={350} placeholder="blur" alt="Mobile App" />
        </div>
      </div>
      <div className="absolute bg-fuchsia-600 opacity-40 blur-[100px] rounded-full -bottom-[180px] -right-[130px] translate-x-1/2 w-[400px] h-[400px]"></div>
    </section>
  );
}

export default MobileAppSection;