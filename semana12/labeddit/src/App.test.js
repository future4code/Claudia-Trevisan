import React from 'react';
import { render, wait, fireEvent, getByPlaceholderText } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

axios.get = jest.fn().mockResolvedValue({posts: {comemnts: [{}]}});
axios.post = jest.fn().mockResolvedValue({});

describe("Labeddit", () =>{
  test("elementos na tela HomePage", async () =>{
    const {getByText, getByPlaceholderText} = render(<App/>)

    expect(getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/senha/i)).toBeInTheDocument();
    expect(getByText(/entrar/i)).toBeInTheDocument();
    expect(getByText(/cadastrar/i)).toBeInTheDocument()

    await wait()

  });

  test("Requisição post LogIn", async () =>{
    axios.post = jest.fn().mockResolvedValue({})
    const {getByText, getByPlaceholderText} = render(<App/>)

    const inputEmail = getByPlaceholderText(/email/i);
    const inputPassword = getByPlaceholderText(/senha/i);
    const buttonLogIn = getByText(/entrar/i);
    
    await userEvent.type(inputEmail, 'email@email.com')

    expect(inputEmail).toHaveValue('email@email.com')

    userEvent.type(inputPassword, '123456')

    expect(inputPassword).toHaveValue('123456')

    fireEvent.click(buttonLogIn)

  })
});

