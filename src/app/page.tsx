// Constants
import { montserrat } from '@/constants/fonts';

// Interfaces
import { ISearchParams } from '@/interface';

// Components
import { Description, Heading, Hero } from '@/ui/components';

// Sections
import { Place, Portfolio, Product, Project } from '@/ui/sections';

interface HomeProps {
  searchParams: ISearchParams;
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <main className={`${montserrat.className} lg:container my-0 mx-auto`}>
      <Hero imageUrl="/background-hero.webp" buttonName="Download">
        <Heading styles="text-white">Welcome to SmartWeb</Heading>
        <Description styles="font-thin text-white lg:text-3xl md:text-sm text-xs mt-14">
          Discover a World of Technological Advancements
        </Description>
      </Hero>
      <Place searchParams={searchParams} />
      <Product />
      <Project searchParams={searchParams} />
      <Portfolio searchParams={searchParams} />
    </main>
  );
}
