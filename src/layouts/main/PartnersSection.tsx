import {partners} from '@/common/constants';

const PartnersSection = () => {
  return (
    <section className="">
      <li className="flex items-center flex-wrap gap-y-16 gap-x-4 justify-evenly w-full">
        {partners.map((partner) => (
          <ul key={partner.id}>
            <div className="w-[120px] fill-primary">{partner.icon}</div>
          </ul>
        ))}
      </li>
    </section>
  );
};

export default PartnersSection;
