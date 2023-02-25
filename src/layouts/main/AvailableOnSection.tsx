/* eslint-disable @next/next/no-img-element */
import { avaon1, avaon2 } from '@/common/assets';

const AvailableOnSection = () => {
  return (
    <section className="relative flex flex-col items-center">
      <h3>Available On</h3>
      <p className='mt-4 text-secondary w-full max-w-2xl text-center'>
        Dive into fully crypto-focused, socially gamified atmosphere and unite
        With our lovely community from all around
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly [&>*]:max-w-[400px] mt-5 md:mt-16 w-full">
        <img className="flex-1 w-full" src={avaon1.src} alt="Times context" />
        <img className="flex-1 w-full" src={avaon2.src} alt="Capture context" />
      </div>
      <div className="absolute bg-fuchsia-700 opacity-20 blur-[100px] rounded-full -bottom-[150px] -left-[250px] w-[400px] h-[400px]"></div>
      <div className="absolute bg-fuchsia-700 opacity-20 blur-[100px] rounded-full -top-[70px] -right-[250px] w-[450px] h-[450px]"></div>
    </section>
  );
};

export default AvailableOnSection;
