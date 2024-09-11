import { Metadata } from 'next';

// Layouts
import { Heading } from '@/ui/components';

export const metadata: Metadata = {
  title: 'About',
  description: 'Details for more products'
};

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Heading> About Page </Heading>
    </div>
  );
};

export default AboutPage;
