import { render, screen } from '@testing-library/react';
import Footer from './Footer.jsx';

describe('renders parts of Footer', () => {
  it('footer-logo has been rendered', () => {
    render(<Footer />);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
  it('footer-org-name has been rendered', () => {
    render(<Footer />);
    expect(screen.getByText(/БЛАГОДІЙНА/)).toBeInTheDocument();
  });
  it('footer-copywriter has been rendered', () => {
    render(<Footer />);
    expect(screen.getByText(/Розробка/)).toBeInTheDocument();
  });
});
