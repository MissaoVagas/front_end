import React from "react"; // Adicione esta linha
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders job opportunities text", () => {
  render(<App />);
  const linkElement = screen.getByText(/empregos/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Navbar component", () => {
  render(<App />);
  const navbarElement = screen.getByRole("navigation");
  expect(navbarElement).toBeInTheDocument();
});
