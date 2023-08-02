import { render, screen } from '@testing-library/react';
import Hotline from './hotline.jsx';

describe('renders parts of contact-block', () => {
  it('tel 1', () => {
    render(<Hotline />);

    expect(screen.getByText(/38 044 209 53 02/)).toBeInTheDocument();
  });
  it('tel 2', () => {
    render(<Hotline />);

    expect(screen.getByText(/38 098 683 85 21/)).toBeInTheDocument();
  });
  it('tel 3', () => {
    render(<Hotline />);

    expect(screen.getByText(/38 098 306 84 84/)).toBeInTheDocument();
  });
  it('tel 4', () => {
    render(<Hotline />);

    expect(screen.getByText(/38 063 499 37 69/)).toBeInTheDocument();
  });
});
