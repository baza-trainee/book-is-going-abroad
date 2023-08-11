import { render, screen } from '@testing-library/react';
import Support from './Support.jsx';

describe('render support section', () => {
  it('check title', () => {
    render(<Support />);
    expect(screen.getByText('Ваша поміч - цінна')).toBeInTheDocument();
  });

  it('check paragraph', () => {
    const { container } = render(<Support />);
    const paragraphElement = container.querySelector('.support-paragraph');
    expect(paragraphElement).toBeInTheDocument();
  });

  it('check img', () => {
    const { container } = render(<Support />);
    const imgElement = container.querySelector('img');
    expect(imgElement).toBeInTheDocument();
  });

  it('check title', () => {
    render(<Support />);
    expect(screen.getByText('UAH')).toBeInTheDocument();
  });

  it('check title', () => {
    render(<Support />);
    expect(screen.getByText('БАНКИ КОРЕСПОНДЕНТИ')).toBeInTheDocument();
  });

  it('check title', () => {
    render(<Support />);
    expect(screen.getByText('EUR')).toBeInTheDocument();
  });

  it('check title', () => {
    render(<Support />);
    expect(screen.getByText('MONOBANK')).toBeInTheDocument();
  });
});
