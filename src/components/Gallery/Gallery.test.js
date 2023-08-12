import { render, screen } from '@testing-library/react';
import Gallery from './Gallery.jsx';

describe('render gallery section', () => {
  it('check title', () => {
    render(<Gallery />);
    expect(
      screen.getByText('Активності нашої організації')
    ).toBeInTheDocument();
  });

  it('check block with photos', () => {
    const { container } = render(<Gallery />);
    const images = container.querySelector('.gallery-wrapper');
    expect(images).toBeInTheDocument();
  });
});
