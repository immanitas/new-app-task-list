import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { GenericContainer } from '../GenericContainer'
import { ThemeContainer } from '../../../containers/theme/ThemeContainer'
import AppRouter from '../../../containers/navigation/AppRouter'
import { MemoryRouter } from 'react-router-dom'

describe("GenericContainer", () => {
  it("should render container", () => {
    render(
      <MemoryRouter>
        <ThemeContainer>
          <GenericContainer />
        </ThemeContainer>
      </MemoryRouter>);
    const element = screen.getByTestId("wrapper");
    expect(element).toBeTruthy()
  })

  it("should render container child nodes", () => {
    const testText = "testing something"
    render(
      <MemoryRouter>
        <ThemeContainer>
          <GenericContainer><span>{testText}</span></GenericContainer>
        </ThemeContainer>
      </MemoryRouter>
    )
    const element = screen.getByTestId("wrapper");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(testText);
    expect(element).toContainHTML(`<span>${testText}</span>`)
    const spanElement = screen.getByText(testText);
    expect(spanElement).toBeInTheDocument();
  })
})