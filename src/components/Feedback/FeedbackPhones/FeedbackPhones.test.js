import { render, screen } from '@testing-library/react';
import FeedbackPhones from './FeedbackPhones.jsx';

describe('render address section', () => {
  it('check phones-list', () => {
    const { container } = render(<FeedbackPhones />);
    const ulElement = container.querySelector('.phones-list');
    expect(ulElement).toBeInTheDocument();
  });
  it('element of navbar', () => {
    render(<FeedbackPhones />);
    expect(screen.getByText('+38 044 209 53 02')).toBeInTheDocument();
  });
});
