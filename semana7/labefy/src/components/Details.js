import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AddMusic from './AddMusic'

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: auto;
  width: 100vw;
  background-color: #0f0a28;
  padding-top: 27px;
`;

const ContainerMusic = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 80%;
    background-color: #312e45;
    margin-bottom: 7px;
    border-radius: 10px;
    margin-top: 10px;
    box-shadow: 1px 1px 16px 3px orange;

    h4{
        margin: 5px;
        color: white;
        text-align: center;
    };
    ul{
        list-style: none;
        padding-left: 0px;
    };

    @media (min-width: 680px){
        width: auto;
        h4{
            font-size: 1.6rem;
        };
    }
`;

const TrackContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    li{
        color: white;
        text-align: center;
    };
    audio{
        width: 125%;
        padding: 5px;
        height: 45px;

        :focus{
            outline: none;
           box-shadow: 1px 1px 8px #ffc95c;
           border-radius: 25px;
        }
    }

    @media (min-width: 680px){
        width: 30em;
        li{
            font-size: 1.6rem;
            font-weight: lighter;
        };
        audio{
            margin-left: 5px;
        }
    }
`;

const ImageDel = styled.img`
    width: 25px;
    margin-left: 15px;
    margin-top: 6px;
`;

const Button = styled.button`
  margin: 20px;
  width: 55%;
  height: 30px;
  border-radius: 25px;
  border: none;
  font-weight: 700;
  font-size: 120%;

  :hover{
    background-color: #2e042c;
    color: white;
  };
  :focus{
    background-color: #2e042c;
    color: white;
    outline: none;
  };

  @media (min-width: 680px){
      height: 50px;
      width: 45%;
      border-radius: 40px;
      font-size: 197%;
  }
`;

const ContainerAdd = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ButtonDefault = styled.button`
  margin: 20px;
  width: 46%;
  border-radius: 25px;
  border: none;
  font-weight: 700;
  font-size: 110%;

  :hover{
    background-color: #2e042c;
    color: white;
  };
  :focus{
    background-color: #2e042c;
    color: white;
    outline: none;
  };

  @media (min-width: 680px){
      height: 50px;
      width: 35%;
      font-size: 130%;
  }
`;

const ImageH = styled.img`
  width: 40px;
  margin-bottom: 8px;

  @media (min-width: 680px){
      width: 65px;
      margin-top: 13px;
  }
`;


export default class Details extends React.Component{
state={
    tracks:[],
    namePlay: "",
    renderAdd: false,
    idPlaylist: "",
};

    getTracks = (id) =>{
        const request = axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        {
            headers:{
                Authorization: "claudia-trevisan-jackson"
            }
        }
        );
        request
        .then((response)=>{
            this.setState({tracks: response.data.result.tracks})
            this.setState({namePlay: this.props.namePlay})
        })
        .catch((error)=>{
            console.log(error.message)
        })
    };

    deleteTrack = (playlistId, trackId) =>{
        const request = axios.delete (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}`,
            {
                headers:{
                    Authorization: "claudia-trevisan-jackson"
                }
            }
        );
        request
        .then((response)=>{
            alert("Exclusão realizada com sucesso")
            this.getTracks(playlistId)
        })
        .catch((error)=>{
            alert("Ocorreu um erro")
        });
    };

    onClickDelete = (idPlay, idTrack) =>{
        this.deleteTrack(idPlay, idTrack)
    };

    onClickRenderAdd = () =>{
        this.setState({renderAdd: !this.state.renderAdd, idPlaylist: this.props.idDetails})
        this.getTracks(this.props.idDetails)
    };

    componentDidMount(){
        this.getTracks(this.props.idDetails)
    };

    render(){
        const renderize = () =>{
            if(this.state.renderAdd){
                return <AddMusic idDetails={this.state.idPlaylist} render={this.onClickRenderAdd}/>
            }
        };

        return(
            <BigContainer>
                <ContainerMusic>
                    <h4>{this.state.namePlay}</h4>
                    <ul>
                        {this.state.tracks.map((track)=>{
                            return(
                            <TrackContainer>
                                <li key={track.id}>{track.name}</li>
                                <ImageDel src="delete.png" alt="Excluir" onClick={()=>this.onClickDelete(this.props.idDetails, track.id)}></ImageDel>
                                <audio key={track.name} controls >
                                    <source src={track.url} type={"audio/mp3"}></source>
                                </audio>
                            </TrackContainer>
                            )
                        })}
                    </ul>
                </ContainerMusic>
                <Button onClick={this.onClickRenderAdd}>Adicionar musica</Button>
                <ContainerAdd>
                    {renderize()}
                </ContainerAdd>
                <ButtonDefault onClick={this.props.functionView}>Visualizar playlists</ButtonDefault>
                <ImageH src="spotify-sketch.png" onClick={this.props.functionBack} alt="Home"/>
            </BigContainer>
        );
    };
}