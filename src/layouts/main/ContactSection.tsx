import { Button } from '@/common/components';

const ContactSection = () => {
  return (
    <section className="relative flex flex-col items-center ">
      <div className="z-10 w-full max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="px-8 flex flex-col items-center justify-center max-sm:h-[400px] h-[500px] rounded-[2.5rem] bg-gradient-to-r from-purple-600 to-indigo-600 w-full ">
          <h1 className="text-center max-sm:text-3xl font-semibold">Contact</h1>
          <p className="text-center mt-4">Content shared on this website is for information purpose only for CMPD</p>
          <fieldset className="w-full max-w-[21rem] max-sm:mt-10 mt-16 flex bg-gray-900 rounded-full p-1 pl-2">
            <input type="text" className="w-full block bg-transparent border-none focus:border-none focus:ring-0" placeholder='Enter Your Email' />
            <Button className="rounded-full">Submit</Button>
          </fieldset>
        </div>
      </div>
      <div className="absolute z-0 bottom-0 max-sm:h-[200px] h-[250px] bg-secondary w-full" />
    </section>
  );
};

export default ContactSection;
