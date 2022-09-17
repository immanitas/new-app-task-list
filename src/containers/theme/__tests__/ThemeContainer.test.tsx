import { render, screen } from '@testing-library/react';
import { ThemeContainer } from '../ThemeContainer';

describe("ThemeContainer", () => {
  it("should be able to pass child elements", () => {
    const text = "test"
    render(<ThemeContainer><span>{text}</span></ThemeContainer>)
    const element = screen.queryByText(text);
    expect(element).not.toBeEmptyDOMElement();
    expect(element).toHaveTextContent(text);
  })
})