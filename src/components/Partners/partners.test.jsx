import { render, screen } from '@testing-library/react';
import Partners from './Partners.jsx';

describe('renders parts of partners-section', () => {
  it('icons of partners', () => {
    render(<Partners />);

    expect(screen.getByAltText('Partner-1')).toBeInTheDocument();
    expect(screen.getByAltText('Partner-2')).toBeInTheDocument();
    expect(screen.getByAltText('Partner-3')).toBeInTheDocument();
    expect(screen.getByAltText('Partner-4')).toBeInTheDocument();
  });
  it('Title', () => {
    render(<Partners />);

    expect(screen.getByText(/Партнери/)).toBeInTheDocument();
  });
});
