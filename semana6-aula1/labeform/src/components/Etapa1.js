import React from 'react';

export class Etapa1 extends React.Component{
  
    render() {
                return (
            <div>
                <h4>ETAPA 1 - DADOS GERAIS</h4>
                <p>1 - Qual o seu nome?</p>
                <input />
                <p>2 - Qual sua idade?</p>
                <input />
                <p>3 - Qual seu email?</p>
                <input />
                <p>4 - Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino medio incompleto</option>
                    <option>Ensino medio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
            </div>
        );
    };
  };

  export default Etapa1