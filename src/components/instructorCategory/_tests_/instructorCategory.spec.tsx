import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { InstructorCategory } from '../instructorCategory';

describe('InstructorCategory Component', () => {
  const testProps = {
    category: 'Sample Category',
    index: 1,
    onClick: jest.fn(),
  };

  beforeEach(() => {
    render(
      <MemoryRouter>
        <InstructorCategory {...testProps} />
      </MemoryRouter>,
    );
  });

  it('renders the component with the correct category', () => {
    const categoryText = screen.getByText('Sample Category');
    expect(categoryText).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(testProps.onClick).toHaveBeenCalled();
  });

  it(`doesnt't applies the "bold-category" class when index is 1`, () => {
    const categoryText = screen.getByText('Sample Category');
    expect(categoryText).not.toHaveClass('bold-category');
  });
});
