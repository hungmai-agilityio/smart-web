import { Metadata } from 'next';

// Layouts
import { Heading } from '@/ui/components';

export const metadata: Metadata = {
  title: 'Places',
  description: 'Details for more products'
};

const PlacePage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Heading> Places Page </Heading>;
    </div>
  );
};

export default PlacePage;
