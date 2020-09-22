import React from 'react';
import { render, fireEvent, queryByPlaceholderText, getByDisplayValue } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App'


test("Verifica post", () =>{
    const { getByText, getByPlaceholderText, getByDisplayValue, findByText } = render(<App/>)

    getByText(/Nenhum Post/i);

    let input = getByPlaceholderText(/Novo Post/i);
    
    fireEvent.change(input);

    const button = getByText(/Adicionar/i);

    fireEvent.click(button);

    getByDisplayValue("");

    findByText(/Quantidade de Posts/i)

    const buttonPost = getByText(/Curtir/i);

    fireEvent.click(buttonPost);
    
    findByText("Descurtir");

    const buttonDelete = getByText(/Apagar/i);

    fireEvent.click(buttonDelete);

    expect(queryByText("Apagar")).toBeNull();
});

test("Verifica texto no caso de post vazio", () =>{
    const { getByDisplayValue, getByText } = render(<App/>);

    getByDisplayValue("");

    const button = getByText(/Adicionar/i);

    fireEvent.click(button);

    getByText(/Ação proibida/i)
});


