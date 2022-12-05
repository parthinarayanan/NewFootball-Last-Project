import { render, screen } from "@testing-library/react";
import UserActionApp from "./UserActions";

test("Renders Title of the application", () => {
  render(<UserActionApp />);
  const linkElement = screen.getByText(/CURD operation in React/i);
  expect(linkElement).toBeInTheDocument();
});
