import { render, screen } from '@testing-library/react';
import FooterDocs from './FooterDocs.jsx';

describe('renders element of navbar', () => {
  it('element of docs list', () => {
    render(<FooterDocs />);
    expect(screen.getByText('Статут')).toBeInTheDocument();
  });

  it('element of docs list', () => {
    render(<FooterDocs />);
    expect(screen.getByText('Адреси')).toBeInTheDocument();
  });

  it('element of docs list', () => {
    render(<FooterDocs />);
    expect(screen.getByText('Звітність')).toBeInTheDocument();
  });

  it('element of docs list', () => {
    render(<FooterDocs />);
    expect(screen.getByText('Політика Конфіденційності')).toBeInTheDocument();
  });

  it('element of docs list', () => {
    render(<FooterDocs />);
    expect(screen.getByText('Умови Використання Сайту')).toBeInTheDocument();
  });
});
