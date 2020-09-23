import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from '../App';

test("Verifica planner", () =>{
    const { getByText, getByPlaceholderText } = render(<App/>);

    screen.getByText(/feira/i);
    
    screen.getByText(/sabado/i);
     
    screen.getByText(/domingo/i);

    const input = screen.getByPlaceholderText("Nova tarefa");

    fireEvent.change(input, {target: {value: "Texto teste"}});

    expect(input).toHaveValue("Texto teste");

    const select = screen.getByDisplayValue("Selecione o dia da semana");

    fireEvent.change(select, {target: {value: "Segunda-feira"}});

    expect(select).toHaveValue("Segunda-feira")

    const button = screen.getByText("Criar");

    fireEvent.click(button);

    //como verificar se a task foi pro dia certo

    const buttonCheck = screen.getByText(/Cumprida/i);

    fireEvent.click(buttonCheck);

    //como verificar se o styled funcionou

    const buttonDelete = screen.getByText(/apagar/i);

    fireEvent.click(buttonDelete);

    expect(buttonDelete, buttonCheck).toBeNull()
});
