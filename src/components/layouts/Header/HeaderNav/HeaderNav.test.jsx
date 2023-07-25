import { render, screen } from '@testing-library/react';
import HeaderNav from './HeaderNav.jsx';

describe('renders element of navbar', () => {
  it('element of navbar', () => {
    render(<HeaderNav />);
    expect(screen.getByText('Адреси')).toBeInTheDocument();
  });

  it('element of navbar', () => {
    render(<HeaderNav />);
    expect(screen.getByText('Активності')).toBeInTheDocument();
  });

  it('element of navbar', () => {
    render(<HeaderNav />);
    expect(screen.getByText('Ціль проекту')).toBeInTheDocument();
  });

  it('element of navbar', () => {
    render(<HeaderNav />);
    expect(screen.getByText('Партнери')).toBeInTheDocument();
  });

  it('element of navbar', () => {
    render(<HeaderNav />);
    expect(screen.getByText("Зв'язатися")).toBeInTheDocument();
  });
});
