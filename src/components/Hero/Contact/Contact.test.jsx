import { render, screen } from '@testing-library/react';
import Contact from './Contact.jsx';

describe('renders parts of contact-block', () => {
  it('block 1', () => {
    render(<Contact />);

    expect(screen.getByText(/Повідомити/)).toBeInTheDocument();
  });
  it('block 2', () => {
    render(<Contact />);

    expect(screen.getByText(/Оформити/)).toBeInTheDocument();
  });
  it('block 3', () => {
    render(<Contact />);

    expect(screen.getByText(/Хочу/)).toBeInTheDocument();
  });
});
