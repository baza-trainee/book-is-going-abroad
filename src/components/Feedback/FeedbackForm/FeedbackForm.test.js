import { render, screen } from '@testing-library/react';
import FeedbackForm from './FeedbackForm.jsx';

describe('renders element of navbar', () => {
  it('check form', () => {
    const { container } = render(<FeedbackForm />);
    const fromElement = container.querySelector('form');
    expect(fromElement).toBeInTheDocument();
  });

  it('check input', () => {
    const { container } = render(<FeedbackForm />);
    const inputElement = container.querySelector('input');
    expect(inputElement).toBeInTheDocument();
  });

  it('render button', () => {
    render(<FeedbackForm />);
    expect(screen.getByText('Надіслати')).toBeInTheDocument();
  });
});
