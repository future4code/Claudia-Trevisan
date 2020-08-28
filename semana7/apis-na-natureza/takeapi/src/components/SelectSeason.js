import React from 'react';
import axios from 'axios';
import styled from 'styled-components'


export default class SelectSeason extends React.Component{
    state={
        seasons:[],
        id: ""
    }

    getSeasons = () =>{
        const request = axios.get("http://www.nokeynoshade.party/api/seasons")
        .then((response)=>{
            console.log(response)
          this.setState({seasons: response.data})
        }).catch((error)=>{
            console.log(error)
          alert(error.message)
        })
    };


    componentDidMount(){
        this.getSeasons()
    };

    render(){
        console.log(this.props.functionOnChange)
        const renderPage = this.state.seasons.map((item)=>{
            return(
                <option key={item.id} onChange={()=>this.props.FunctionOnChange(item.id)}>
                Temp. {item.seasonNumber}
                </option>
            );
        });

    return(
        <div>
            <h2>Selecione uma temporada</h2>
            <select>
                <option value={""}></option>
                {renderPage}
            </select>
        </div>
    );
    };
};