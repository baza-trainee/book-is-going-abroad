import { render, screen } from '@testing-library/react';
import Address from './Address.jsx';

describe('render address section', () => {
  it('check title', () => {
    render(<Address />);
    expect(
      screen.getByText('Адреси видачі та прийому гуманітарної допомоги')
    ).toBeInTheDocument();
  });

  it('check iframe', () => {
    const { container } = render(<Address />);
    const iframeElement = container.querySelector('iframe');
    expect(iframeElement).toBeInTheDocument();
  });
});
