import { StatsRow } from '@/ui/components/common/StatsRow';
import { render, screen } from '@testing-library/react';

describe('StatsRow component', () => {
  const defaultProps = {
    views: 12345,
    favorite: 1111,
    comment: 5432,
    viewIcon: '/view-dark.svg',
    favoriteIcon: '/likes.svg',
    commentIcon: '/comments.svg'
  };

  it('Should render default props', () => {
    render(<StatsRow {...defaultProps} />);

    const viewIcon = screen.getByAltText('view icon');
    const likeIcon = screen.getByAltText('likes icon');
    const commentIcon = screen.getByAltText('comments icon');
    expect(viewIcon).toBeInTheDocument();
    expect(likeIcon).toBeInTheDocument();
    expect(commentIcon).toBeInTheDocument();
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<StatsRow {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
