import React from 'react';
import axios from 'axios';
import styled from 'styled-components'


export default class Infos extends React.Component{
    state={
        seasons:[]
    };

    details = (idSeason) =>{
        const request = axios.get(`http://www.nokeynoshade.party/api/seasons/${idSeason}`)
        .then((response)=>{
            this.setState({seasons: response.data})
        }).catch((error)=>{
            alert(error.message)
        })
    };

    componentDidMount(){
        this.details(this.props.idSeason)
    };

    render(){
        const renderPage = this.state.seasons.map((itemSeason)=>{
            return(
                <div>
                    <img key={itemSeason.id}>{itemSeason.image_url}</img>
                    <h4 key={itemSeason.id}>Queens</h4>
                    <div>
                        <ul key={itemSeason.id}>
                            {itemSeason.queens.map((queen)=>{
                                return(
                                    <li onClick={()=>this.props.functionOnClickSearch(queen.id)}>Nome: {queen.name} 
                                    Colocação: {queen.place}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            );
        });

        
        return(
            <div>
                {renderPage}
                <button onClick={this.props.functionOnClick}>voltar</button>
            </div>

        )
    }
};