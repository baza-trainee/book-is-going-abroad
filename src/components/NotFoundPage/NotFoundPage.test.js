import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import NotFoundPage from './NotFoundPage.jsx';

it('renders 404 - Page Not Found', () => {
  const { getByText } = render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  );

  const buttonElement = getByText('На головну');
  expect(buttonElement).toBeInTheDocument();
});
