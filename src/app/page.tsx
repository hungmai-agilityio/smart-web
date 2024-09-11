// Constants
import { montserrat } from '@/constants/fonts';

// Components
import { Description, Heading, Hero } from '@/ui/components';

// Sections
import { PlaceWrapper, PortfolioWrapper, ProductWrapper, ProjectWrapper } from '@/ui/sections';

export default function Home() {
  return (
    <main className={`${montserrat.className} md:container my-0 mx-auto`}>
      <Hero imageUrl="/background-hero.webp" buttonName="Download">
        <Heading styles="text-white">Welcome to SmartWeb</Heading>
        <Description styles="font-thin text-white lg:text-3xl md:text-sm text-xs mt-14">
          Discover a World of Technological Advancements
        </Description>
      </Hero>
      <PlaceWrapper />
      <ProductWrapper />
      <ProjectWrapper />
      <PortfolioWrapper />
    </main>
  );
}
