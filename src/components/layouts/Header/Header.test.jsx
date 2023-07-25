import { render, screen } from '@testing-library/react';
import Header from './Header.jsx';

describe('renders parts of header', () => {
  it('upper header has been rendered', () => {
    render(<Header />);

    expect(screen.getByText(/БЛАГОДІЙНА/)).toBeInTheDocument();
  });
  it('element of navbar', () => {
    render(<Header />);
    expect(screen.getByText('Адреси')).toBeInTheDocument();
  });
});
