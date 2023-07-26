import { render, screen } from '@testing-library/react';
import HeaderUpper from './HeaderUpper.jsx';

describe('renders elements of header', () => {
  it('logo has been rendered', () => {
    render(<HeaderUpper />);

    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });

  it('title has been rendered', () => {
    render(<HeaderUpper />);

    expect(screen.getByText(/БЛАГОДІЙНА/)).toBeInTheDocument();
  });

  it('lang has been rendered', () => {
    render(<HeaderUpper />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
