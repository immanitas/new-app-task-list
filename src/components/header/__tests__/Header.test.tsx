import '@testing-library/react'
import { render, screen } from '@testing-library/react'
import { Header } from '../Header'

const testNotEmptyByElement = (element: HTMLElement) => {
  expect(element).toBeInTheDocument()
  expect(element).not.toBeEmptyDOMElement()
}

describe("Header component", () => {
  beforeEach(() => {
    render(<Header />)
  })

  it("should render nav element on page", () => {
    const element = screen.getByTestId("header")
    testNotEmptyByElement(element)
  });

  it("should render nav element on page", () => {
    const element = screen.getByTestId("navigation")
    testNotEmptyByElement(element);
  });

  it("should render toolbar element on page", () => {
    const element = screen.getByTestId("toolbar")
    testNotEmptyByElement(element);
  });

  it("should render page title", () => {
    const pageTitle = "New App";
    const element = screen.getByText(pageTitle);
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent(pageTitle)
  })

  it("should render drawer icon", () => {
    const element = screen.getByTestId("drawer-icon");
    testNotEmptyByElement(element);
    
  })
})