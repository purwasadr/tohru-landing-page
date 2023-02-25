import {footerLinks} from '@/common/constants';

const FooterLinkSection = () => {
  return (
    <section className="bg-secondary w-full py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <p className="text-xl font-medium text-white uppercase">Tohru</p>
        <div className="flex max-md:flex-col flex-wrap mt-8 md:gap-x-[8%] gap-y-8">
          <div className='md:flex-[1_1_40%]'>
            <p className="w-full max-w-sm">
              Tohru NFT Marketplace and Tohru Finance succeeded as complementary
              additions to connect crypto projects and users
            </p>
          </div>
          <div className="flex flex-wrap md:flex-[1_1_52%] gap-6">
            {footerLinks.map((item) => (
              <div className="flex-1 min-w-[150px]" key={item.id}>
                <h4>{item.category}</h4>
                <li className="flex flex-col list-none mt-3.5 gap-y-2">
                  {item.links.map((link) => (
                    <ul className="" key={link.id}>
                      <a href="#" className="text-secondary">{link.caption}</a>
                    </ul>
                  ))}
                </li>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-16 text-sm text-secondary">Tohru Technology Sdn. Bhd. © 2020-2023 </p>
      </div>
    </section>
  );
};

export default FooterLinkSection;
