import { supportedTrading } from '@/common/constants';

const TradedOnSection = () => {
  return (
    <section className="flex flex-col items-center">
      <h2>Traded On</h2>
      <p className="mt-4 text-secondary text-center w-full max-w-2xl">
        Dive into fully crypto-focused, socially gamified atmosphere
        and unite with our lovely community from all around.
      </p>
      <div className="w-full mt-12 md:mt-20">
        <li className='flex flex-wrap gap-x-10 gap-y-16 justify-around items-center'>
          {supportedTrading.map((platform) => (
            <ul className="w-[100px] fill-primary" key={platform.id}>{platform.icon}</ul>
          ))}
        </li>
      </div>
    </section>
  );
}

export default TradedOnSection;