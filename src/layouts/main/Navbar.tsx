import { Button } from '@/common/components';
import Sidebar from '@/common/components/Sidebar';
import { navbarItems } from '@/common/constants';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-10 lg:px-16 py-9 max-w-7xl w-full">
      <p className="text-xl font-medium text-white uppercase">Tohru</p>
      <div className="max-md:hidden">
        <li className="flex space-x-7">
          {navbarItems.map((item) => (
            <ul className="" key={item.id}>
              <a href='#' className="text-secondary text-sm hover:text-primary uppercase">{item.caption}</a>
            </ul>
          ))}
        </li>
      </div>
      <Button className="max-md:hidden uppercase">Get Started</Button>
      <div className="md:hidden">
        <Sidebar />
      </div>
    </nav>
  );
}

export default Navbar;