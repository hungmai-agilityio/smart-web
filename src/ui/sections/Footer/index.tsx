import { navItems } from '@/mocks';
import Image from 'next/image';

import { Navbar, ScrollTopButton } from '@/ui/components';

export const Footer = () => {
  return (
    <footer className="lg:container mt-6 mx-auto bg-black lg:bg-opacity-90 bg-opacity-85 text-white xl:py-28 xl:px-36 py-10 px-10 md:text-base text-sm">
      <div className="px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <h3 className="font-bold uppercase mb-4">Contact Us</h3>
          <div className="md:flex xl:gap-14 gap-5 text-dark lg:w-96 md:w-80">
            <address className="not-italic">
              2300 W Arbutus Dr Citrus Springs, FL 34434, USA
            </address>

            <div className="">
              <p>+235 793-891-7938</p>
              <a
                href="mailto:contact@hofmannui.net"
                className="text-gray-400 hover:text-white"
              >
                contact@hofmannui.net
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start md:ml-24">
          <h3 className="font-bold uppercase mb-4">Follow Us</h3>
          <div className="flex gap-10 items-center">
            <a href="#">
              <Image
                src="/pinterest.svg"
                alt="Pinterest icon"
                width={16}
                height={16}
                className="xl:w-6 xl:h-6 w-4 h-4 opacity-50"
                priority
              />
            </a>
            <a href="#">
              <Image
                src="/twitter.svg"
                alt="Twitter icon"
                width={16}
                height={16}
                className="xl:w-6 xl:h-6 w-4 h-4 opacity-50"
                priority
              />
            </a>
            <a href="#">
              <Image
                src="/facebook.svg"
                alt="Facebook icon"
                width={16}
                height={16}
                className="xl:w-6 xl:h-6 w-4 h-4 opacity-50"
                priority
              />
            </a>
          </div>
        </div>

        <div className="md:ml-8 flex flex-col">
          <h3 className="font-bold uppercase mb-4">About Us</h3>
          <p className="text-gray-400">
            SmartWeb was made to help you quickly create beautiful layouts of
            responsive websites.
          </p>
        </div>
      </div>

      <hr className="my-7"></hr>

      <div className="flex md:flex-col flex-col-reverse">
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-center sm:text-left">
            © 2023 SmartWeb
          </p>

          <ScrollTopButton />
        </div>

        <Navbar
          items={navItems}
          styles="flex justify-center lg:gap-7 gap-3 w-full mb-4 opacity-70`"
        />
      </div>
    </footer>
  );
};
