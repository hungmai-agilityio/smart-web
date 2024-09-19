'use client';

import { END_POINT } from '@/constants';
import { NavItem } from '@/ui/components';
import { Photo } from '@/ui/components/common';

export const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <a href="#" className="opacity-50 xl:w-6 xl:h-6 w-4 h-4">
              <Photo
                src="/pinterest.svg"
                alt="Pinterest icon"
                autoSize
                priority
              />
            </a>
            <a href="#" className="opacity-50 xl:w-6 xl:h-6 w-4 h-4">
              <Photo src="/twitter.svg" alt="Twitter icon" autoSize priority />
            </a>
            <a href="#" className="opacity-50 xl:w-6 xl:h-6 w-4 h-4">
              <Photo
                src="/facebook.svg"
                alt="Facebook icon"
                autoSize
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

          <div className="flex justify-center" onClick={scrollTop}>
            <Photo
              src="/go-top-button.svg"
              alt="Go top icon"
              fixedSize={{ width: 36, height: 36 }}
              priority
            />
          </div>
        </div>
        <nav className="flex justify-center lg:gap-7 gap-3 w-full mb-4 opacity-70">
          <NavItem name="home" url={END_POINT.HOME} />
          <NavItem name="places" url={END_POINT.PLACES} />
          <NavItem name="products" url={END_POINT.PRODUCTS} />
          <NavItem name="projects" url={END_POINT.PROJECTS} />
          <NavItem name="portfolio" url={END_POINT.PORTFOLIO} />
          <NavItem name="about us" url={END_POINT.ABOUT_US} />
        </nav>
      </div>
    </footer>
  );
};
