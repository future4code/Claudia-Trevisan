import React from 'react';
import { render, wait, fireEvent, getAllByPlaceholderText, getByRole, getByTestId } from '@testing-library/react';
import App, { url } from './App';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

axios.get = jest.fn().mockResolvedValue({posts: []});
axios.post = jest.fn().mockResolvedValue();
axios.put = jest.fn().mockResolvedValue();


describe("Labeddit", () =>{
  test("elementos na tela HomePage", async () =>{
    const {getByText, getByPlaceholderText} = render(<App/>)

    expect(getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/senha/i)).toBeInTheDocument();
    expect(getByText(/entrar/i)).toBeInTheDocument();
    expect(getByText(/cadastrar/i)).toBeInTheDocument()

    await wait()

  });

  test("Requisições", async () =>{
    axios.post = jest.fn().mockResolvedValue();
    axios.put = jest.fn().mockResolvedValue();
    axios.get = jest.fn().mockResolvedValue({posts:[
      {
      commentsCount: 1,
      createdAt: 1601561754666,
      id: "7L6ezTv7Ys4z9mcCFTmC",
      text: " o que o pato falou para a pata?  “Vem quá!”",
      title: "Piada do dia",
      userVoteDirection: 0,
      username: "lulu",
      votesCount: 1
    },
    {
      commentsCount: 0,
      createdAt: 1601561535521,
      id: "12RoE3exhxyaoF0IPLzC",
      text: "meu post não tava aparecendo porque tava tudo emparalhado, era so ordena que dava certo \0/ #felizDaVida",
      title: "Aeeee agora deu certo *-* ",
      userVoteDirection: 0,
      username: "lulu",
      votesCount: 2    
    }
    ]});

    const { getByText, getByPlaceholderText, findAllByTestId } = render(<App/>)

    const inputEmail = getByPlaceholderText(/email/i);
    const inputPassword = getByPlaceholderText(/senha/i);
    const buttonLogin = getByText(/entrar/i);

    await  userEvent.type(inputEmail, "email@email.com")
    await  userEvent.type(inputPassword, "123456")

    expect(inputEmail).toHaveValue("email@email.com")
    expect(inputPassword).toHaveValue("123456")

    fireEvent.click(buttonLogin)

    expect(axios.post).toHaveBeenCalledWith(`${url}/login`, {email:'email@email.com', password: '123456'});

    await wait(() =>{
      expect(axios.get).toHaveBeenCalled()
    })

    const posts = await findAllByTestId("post-content")

    expect(posts).toHaveLength(2);

    const inputTitle = getByPlaceholderText(/titulo/i)
    const inputText = getByPlaceholderText(/texto/i)

    await  userEvent.type(inputTitle, "teste")
    await  userEvent.type(inputText, "texto teste")

    const buttonPost = getByText(/postar/i)

    fireEvent.click(buttonPost)

    await wait(() =>{
      expect(axios.post).toHaveBeenCalled()
    })

    const buttonVote = getByTestId("button-vote1")

    fireEvent.click(buttonVote)
    
    await wait(() =>{
      expect(axios.put).toHaveBeenCalled()
    });

    await wait()
  }, 10000);

  test("requisição post cadastro", async () =>{
    axios.post = jest.fn().mockResolvedValue()
    const { getByPlaceholderText, getByText } = render(<App/>)

    const buttonSignUp = getByText(/cadastrar/i)

    fireEvent.click(buttonSignUp)

    const inputUserName = getByPlaceholderText(/nome de usuario/i)
    const inputEmail = getByPlaceholderText(/email/i)
    const inputPassword = getByPlaceholderText(/senha/i)

    await  userEvent.type(inputUserName, "NameTest")
    await  userEvent.type(inputEmail, "email2@email.com")
    await  userEvent.type(inputPassword, "123456")

    expect(inputUserName).toHaveValue("NameTest")
    expect(inputEmail).toHaveValue("email2@email.com")
    expect(inputPassword).toHaveValue("123456")

    const buttonSignUp2 = getByText(/cadastrar/i)

    fireEvent.click(buttonSignUp2)

    expect(axios.post).toHaveBeenCalledWith(`${url}/signup`, {
      email: "email2@emailcom",
      password: "123456",
      username: "NameTest"
    })
  }, 10000);
});

