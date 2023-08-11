import { render, screen } from '@testing-library/react';
import Feedback from './Feedback.jsx';

describe('render feedback section', () => {
  it('check title', () => {
    render(<Feedback />);
    expect(screen.getByText('Зворотній зв’язок')).toBeInTheDocument();
  });
});
