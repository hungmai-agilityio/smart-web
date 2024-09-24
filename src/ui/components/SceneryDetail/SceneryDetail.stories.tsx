import { Meta, StoryObj } from '@storybook/react';

// Components
import { SceneryDetail } from '@/ui/components';

// Mocks
import { mockPortfolio } from '@/mocks';

const meta: Meta<typeof SceneryDetail> = {
  component: SceneryDetail,
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: 'The title or name of the scenery'
    },
    image: {
      description: 'URL of the image to be displayed'
    },
    date: {
      description: 'The date when the scenery was captured or created'
    },
    detail: {
      description: 'Short description or detail about the scenery'
    },
    metrics: {
      description:
        'Boolean to show or hide the metrics (view, favorite, comment)'
    },
    view: {
      description: 'Number of views'
    },
    favorite: {
      description: 'Number of favorites'
    },
    comment: {
      description: 'Number of comments'
    }
  }
};

export default meta;

type Story = StoryObj<typeof SceneryDetail>;

export const Default: Story = {
  args: {
    name: mockPortfolio[0].name,
    image: mockPortfolio[0].image,
    date: mockPortfolio[0].date,
    detail: mockPortfolio[0].detail,
    metrics: true,
    view: mockPortfolio[0].view,
    favorite: mockPortfolio[0].favorite,
    comment: mockPortfolio[0].comment
  }
};

export const WithoutMetrics: Story = {
  args: {
    name: mockPortfolio[0].name,
    image: mockPortfolio[0].image,
    date: mockPortfolio[0].date,
    detail: mockPortfolio[0].detail,
    metrics: false
  }
};

export const List: Story = {
  render: () => (
    <div className="grid md:grid-cols-2 grid-cols-1">
      {mockPortfolio.map((portfolio) => (
        <SceneryDetail
          key={portfolio.id}
          name={portfolio.name}
          image={portfolio.image}
          date={portfolio.date}
          detail={portfolio.detail}
          view={portfolio.view}
          favorite={portfolio.favorite}
          comment={portfolio.comment}
          metrics={true}
        />
      ))}
    </div>
  )
};
