import { render, screen } from '@testing-library/react';
import Features from './Features.jsx';

describe('render features section', () => {
  it('render first title', () => {
    render(<Features />);
    expect(
      screen.getByText('Головною ідеєю Організації є')
    ).toBeInTheDocument();
  });

  it('render second title', () => {
    render(<Features />);
    expect(
      screen.getByText('Цілями діяльності Організації є')
    ).toBeInTheDocument();
  });

  it('render button', () => {
    render(<Features />);
    expect(screen.getByText('Збільшити')).toBeInTheDocument();
  });
});
