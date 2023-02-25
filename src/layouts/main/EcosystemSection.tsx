import { ecosystem } from '@/common/assets';

/* eslint-disable @next/next/no-img-element */
const EcosystemSection = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-center">Ecosystem Overview</h2>
      <p className="mt-5 text-center text-secondary max-w-3xl leading-relaxed">
        With hybrid-decentralized crypto social media serving as the backbone of
        the entire ecosystem, the integration of Tolum NFT Marketplace and Torum
        Finance succeed as complementary additions to connect crypto projects
        and users of different interests from all around the world, pioneering
        and realizing the world&apos;s leading SocialFi platform
      </p>
      <div className="mt-10 md:mt-16">
        <img className="w-full" src={ecosystem.src} alt="Ecosystem" />
      </div>
    </section>
  );
};

export default EcosystemSection;
