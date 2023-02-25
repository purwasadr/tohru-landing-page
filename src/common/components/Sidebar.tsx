import * as Dialog from '@radix-ui/react-dialog';
import Button from './Button';
import {AnimatePresence, motion} from 'framer-motion';
import React, {useState} from 'react';
import { Menu, X } from 'lucide-react';
import { navbarItems } from '../constants';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen} >
      <Dialog.Trigger asChild>
        <button className="focus:outline-none">
          <Menu />
        </button>
      </Dialog.Trigger>
      <AnimatePresence>
        {isOpen ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay className="bg-black bg-opacity-40 fixed inset-0" asChild
              forceMount>
              <motion.div 
                 initial={{opacity: 0}}
                 animate={{opacity: 1}}
                 exit={{opacity: 0}}
                 transition={{bounce: 0}}
              />
            </Dialog.Overlay>
            <Dialog.Content
              className="fixed inset-y-0 right-0 w-[90vw] max-w-[220px] rounded-l-xl bg-primary p-[25px] focus:outline-none"
              asChild
              forceMount
            >
              <motion.div
                initial={{translateX: '100%'}}
                animate={{translateX: '0%'}}
                exit={{translateX: '100%'}}
                transition={{bounce: 0}}
              >
                <Dialog.Close asChild>
                  <button
                    className="focus:outline-none"
                    aria-label="Close"
                  >
                    <X />
                  </button>
                </Dialog.Close>
                <li className="flex flex-col mt-3">
                  {navbarItems.map((item) => (
                    <ul className="" key={item.id}>
                      <a href='#' className="block text-secondary py-2 hover:text-primary uppercase">{item.caption}</a>
                    </ul>
                  ))}
                </li>
                <Button className="mt-4  uppercase w-full">Get Started</Button>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default Sidebar;
