import { render, screen } from '@testing-library/react'
// Necessary for additional theme variables.
import { ThemeContainer } from '../../../containers/theme/ThemeContainer'
import { Drawer } from '../Drawer'

describe("Drawer componenet", () => {
  it("should render open", () => {
    render(<ThemeContainer><Drawer isOpen={true} /></ThemeContainer>)
    const element = screen.getByTestId("drawer");
    expect(element).toBeInTheDocument()
  })

  it("should render closed", () => {
    const text = "Find me";
    render(<ThemeContainer><Drawer isOpen={false}><span>{text}</span></Drawer></ThemeContainer>)
    const element = screen.queryByText(text);
    expect(element).not.toBeVisible()
  })

  it("should render children", () => {
    const text = "Find me";
    render(<ThemeContainer><Drawer isOpen={true}><span>{text}</span></Drawer></ThemeContainer>)
    const element = screen.queryByText(text);
    expect(element).toBeInTheDocument()
    expect(element).toBeVisible()
  })
})