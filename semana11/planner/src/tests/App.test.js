import React from 'react';
import { render, fireEvent, screen, wait, findByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from '../App';
import axios from 'axios';
import userEvent from '@testing-library/user-event'
import { url } from '../components/base/Base';

describe("Planner", () =>{
    const createTask = async (taskText) =>{
        const input = screen.getByPlaceholderText("Nova tarefa");

        await userEvent.type(input, taskText);

        expect(input).toHaveValue(taskText);
     
        const select = screen.getByText(/selecione/i)
        
        userEvent.selectOptions(select, "terca");

        
        expect(screen.findByDisplayValue("terca").selected).toBe(true);
        
        const buttonCreate = screen.getByText("Criar");

        fireEvent.click(buttonCreate)
    };

    const createTaskAndRender = async () =>{
        const utils = render(<App/>);

        await createTask("Teste");

        return utils
    };

    test("verifica metodo get - useEffect", async() =>{
        axios.get = jest.fn().mockResolvedValue({data: [ {day: "terca", id: "123", text: "Teste" } ]});
        const { findByText } = render(<App/>);

        const task = await findByText("Teste");

        expect(task).toBeInTheDocument()

        await wait()
    });

    test("verifica metodo post e get após nova tarefa", async() =>{
        axios.post = jest.fn().mockResolvedValue();
        axios.get = jest.fn().mockResolvedValue([{}]);

        await createTaskAndRender();

        expect(axios.post).toHaveBeenCalledWith(`${url}`, {text: "Teste", day: "terca"});

        await wait(() =>{
            expect(axios.get).toHaveBeenCalledTimes(2)
        })
    });

    test("verifica metodo put e styled", async() =>{
        axios.get = jest.fn().mockResolvedValue({data: [
            {day: "terca", id: "123", text: "Teste"}
        ]})
        axios.put = jest.fn().mockResolvedValue();
        render(<App/>);

        const buttonCheck = await screen.findByText(/marcar/i);

        fireEvent.click(buttonCheck);

        expect(axios.put).toHaveBeenCalledWith(`${url}/`)
    
    });

    test("verifica metodo delete", async() =>{
        axios.get = jest.fn().mockResolvedValue({data: [{day: "terca", id: "123", text: "Teste"}, {day: "quarta", id: "321", text: "Teste1"}]});
        axios.delete = jest.fn().mockResolvedValue();
        render(<App/>);

        const buttonDelete = screen.findByText("Apagar");

        fireEvent.click(buttonDelete);

        expect(buttonDelete).tobeNull();
        expect(axios.delete).toHaveBeenCalledWith(`${url}/123`)
    });

    test("Verifica planner", () =>{
        render(<App/>);
    
        screen.getAllByText(/feira/i);
        
        screen.getByText(/sabado/i);
         
        screen.getByText(/domingo/i);
    
        //como verificar se a task foi pro dia certo
    
        const buttonCheck = screen.findByText(/Marcar/i);
    
        fireEvent.click(buttonCheck);
    
        //como verificar se o styled funcionou
    
        const buttonDelete = screen.findByText(/apagar/i);
    
        fireEvent.click(buttonDelete);
    
        expect(buttonDelete, buttonCheck).toBeNull()
    });
})

