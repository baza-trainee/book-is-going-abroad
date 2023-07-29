import { render, screen } from '@testing-library/react';
import FooterPayment from './FooterPayment.jsx';

describe('renders element of navbar', () => {
  it('payment-liqpay-img has been rendered', () => {
    render(<FooterPayment />);
    expect(screen.getByAltText('liqpay')).toBeInTheDocument();
  });

  it('payment-mastercard-img has been rendered', () => {
    render(<FooterPayment />);
    expect(screen.getByAltText('mastercard')).toBeInTheDocument();
  });

  it('payment-privat-img has been rendered', () => {
    render(<FooterPayment />);
    expect(screen.getByAltText('privat')).toBeInTheDocument();
  });

  it('payment-visa-img has been rendered', () => {
    render(<FooterPayment />);
    expect(screen.getByAltText('visa')).toBeInTheDocument();
  });
  it('button element has been rendered', () => {
    render(<FooterPayment />);
    expect(screen.getByText('Фондувати')).toBeInTheDocument();
  });
});
