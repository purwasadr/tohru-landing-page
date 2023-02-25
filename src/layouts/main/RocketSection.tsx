// import rocket from 'public/rocket.png';

import { rocket } from '@/common/assets';
import { Button } from '@/common/components';

/* eslint-disable @next/next/no-img-element */
const RocketSection = () => {
  return (
    <section className="relative flex md:flex-row flex-col-reverse">
      <div className="flex-1 flex justify-center items-center max-md:mt-9">
        <img className="relative w-full max-w-[250px] object-contain" src={rocket.src} alt="Rocket" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start">
        <h3 className="w-full md:max-w-[480px]">A Comprehensive and Scalable Crypto Social Media Platform</h3>
        <p className="text-secondary mt-6 leading-relaxed w-full md:max-w-[450px]">Dive into a fully crypto-focused, socially gamified atmosphere and unite with our lovely community from all around the world. No matter if you&apos;re a crypto newbie or a blockchain veteran, Torum is packed with various features and functionalities.</p>
        <Button className="uppercase mt-6">Join Now</Button>
      </div>
      <div className="absolute bg-fuchsia-700 opacity-20 blur-[100px] rounded-full top-[50%] -translate-y-[50%] -left-[200px] w-[500px] h-[500px]"></div>
    </section>
  );
}

export default RocketSection;