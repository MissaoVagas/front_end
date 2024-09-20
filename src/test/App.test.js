// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders job opportunities text', () => {
  render(<App />);
  const textElement = screen.getByText(/Mais de 5.000 empregos estão esperando por você/i);
  expect(textElement).toBeInTheDocument();
});

test('renders Navbar component', () => {
  render(<App />);
  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();
});

test('renders Destaque component', () => {
  render(<App />);
  const destaqueElement = screen.getByTestId('Destaque');
  expect(destaqueElement).toBeInTheDocument();
});

test('renders Categorias component', () => {
  render(<App />);
  const categoriasElement = screen.getByTestId('categorias');
  expect(categoriasElement).toBeInTheDocument();
});

test('renders EmpresasDestaque component', () => {
  render(<App />);
  const empresasDestaqueElement = screen.getByTestId('empresas-destaque');
  expect(empresasDestaqueElement).toBeInTheDocument();
});

test('renders ImpulsioneCarreira component', () => {
  render(<App />);
  const impulsioneCarreiraElement = screen.getByTestId('impulsione-carreira');
  expect(impulsioneCarreiraElement).toBeInTheDocument();
});

test('renders Footer component', () => {
  render(<App />);
  const footerElement = screen.getByRole('contentinfo');
  expect(footerElement).toBeInTheDocument();
});
