import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

export default class Queen extends React.Component{
    state={
        name:"",
        quote: "",
        img: ""
    };

    getQueen = (queenId) =>{
        const request = axios.get(`http://www.nokeynoshade.party/api/queens/${queenId}`)
        .then((response)=>{
            this.setState({
                name: response.name,
                quote: response.quote,
                img: response.image_url
             })
        }).catch((error)=>{
            alert(error.message)
        });
    }

    componentDidMount(){
        this.getQueen(this.props.idQueen)
    };

    render(){

        return(
            <div>
                
            </div>
        )
    };
};

