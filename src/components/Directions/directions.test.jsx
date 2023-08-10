import { render, screen } from '@testing-library/react';
import Directons from './Directions.jsx';

describe('renders elements of directions-section', () => {
  it('Rows of icons', () => {
    render(<Directons />);

    expect(screen.getByTestId('row1')).toBeInTheDocument();
    expect(screen.getByTestId('row2')).toBeInTheDocument();
    expect(screen.getByTestId('row3')).toBeInTheDocument();
    expect(screen.getByTestId('row4')).toBeInTheDocument();
    expect(screen.getByTestId('row5')).toBeInTheDocument();
  });
  it('Title', () => {
    render(<Directons />);

    expect(screen.getByText(/Основні напрями/)).toBeInTheDocument();
  });
});
