import { render, screen } from '@testing-library/react';
import Activity from './Activity.jsx';
import Slider from './Slider/Slider.jsx';

describe('render activity section', () => {
  it('render title', () => {
    render(<Activity />);
    expect(
      screen.getByText('Активності нашої організації')
    ).toBeInTheDocument();
  });

  it('check slider', () => {
    const { container } = render(<Slider showSlider={true} />);
    const sliderComponent = container.querySelector('.slider-container');
    expect(sliderComponent).toBeInTheDocument();
  });

  it('render button', () => {
    render(<Activity />);
    expect(screen.getByText('Переглянути')).toBeInTheDocument();
  });
});
