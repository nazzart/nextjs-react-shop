import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import Header from '@/app/components/header/Header';
import { mockTheme } from './mocks/theme';


// Mock useRouter:
const pushMock = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: pushMock,
    };
  },
}));
  
describe('Header', () => {

  it('should render a heading', () => {
    render(
      <ThemeProvider theme={mockTheme}>
          <Header />
        </ThemeProvider>
      )

    const heading = screen.getByRole('heading', {
      name: /We sell stuff/i,
    })

    expect(heading).toBeInTheDocument()
  })
});