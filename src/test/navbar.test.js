import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('deve renderizar o componente Navbar', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('deve renderizar o botão "Log in" no Navbar na versão desktop', () => {
  render(<Navbar />);
  const desktopLoginButton = screen.getByTestId('desktop-login-button');
  expect(desktopLoginButton).toBeInTheDocument();
});

test('deve renderizar o botão "Log in" no Navbar na versão mobile', () => {
  render(<Navbar />);
  const mobileLoginButton = screen.getByTestId('mobile-login-button');
  expect(mobileLoginButton).toBeInTheDocument();
});

test('deve alternar o menu ao clicar no botão do menu', () => {
  render(<Navbar />);
  const menuButton = screen.getByRole('button', { name: /menu/i });
  fireEvent.click(menuButton);
  const menuItems = screen.getByText(/Poste um trabalho/i);
  expect(menuItems).toBeInTheDocument();
});