import { cleanup, fireEvent, render } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders App component', () => {
  const { container } = render(<App />);
  expect(container).toBeDefined();
});
