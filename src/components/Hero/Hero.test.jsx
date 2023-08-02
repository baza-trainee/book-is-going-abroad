import { render, screen } from '@testing-library/react';
import Hero from './Hero.jsx';

describe('renders parts of contact-block', () => {
  it('hotline', () => {
    render(<Hero />);

    expect(screen.getByText(/Гаряча лінія/)).toBeInTheDocument();
  });
  it('Title', () => {
    render(<Hero />);

    expect(screen.getByText(/ПОРТАЛ/)).toBeInTheDocument();
  });
  it('Description', () => {
    render(<Hero />);

    expect(screen.getByText(/Сайт для тих/)).toBeInTheDocument();
  });
  it('Support Button', () => {
    render(<Hero />);

    expect(screen.getByText(/Підтримати/)).toBeInTheDocument();
  });
});
