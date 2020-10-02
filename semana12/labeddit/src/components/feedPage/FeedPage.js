import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { url } from '../../App';
import { goToHomePage, goToPostPage } from '../../router/GoTo';
import { useForm } from '../hooksGlobals/Hooks';
import { CardPost, DivFeed } from './StyledFeed'


export default function FeedPage() {
    const history = useHistory();
    const [posts, setPosts] = useState([]);
    const { form, onChange, resetState } = useForm({text: "", title: ""});
    let token = localStorage.getItem("token");

    const timePassed = (createdAt) => {

        const now = new Date().getTime()
        const milisseconds = now - createdAt
        const minutes = milisseconds * 1.6667E-5
        const hours = Math.floor(milisseconds/(1000 * 60 * 60))
        const days = Math.floor(hours/24)
        const months = Math.floor(days/30)

        if (minutes < 1) {
            return `less than one minute ago`
        } else if (hours < 1) {
            return `${Math.ceil(minutes)} minutes ago`
        } else if (hours === 1) {
            return `${hours} hour ago`
        } else if (hours < 24) {
            return `${hours} hours ago`
        } else if (days === 1) {
            return `${days} day ago`
        } else if (days < 30) {
            return `${days} days ago`
        } else if (months === 1) {
            return `${months} month ago`
        } else if (months > 1) {
            return `${months} months ago`
        }
    };


    const requestGetPosts = () =>{
        const headers = {
            headers: {
                Authorization: token
            }
        };
        axios
        .get(`${url}/posts`, headers)
        .then((response) =>{
            setPosts(response.data.posts);
        })
        .catch((error) =>{
            alert(error.message)
        })
    };

    const requestPostPost = () =>{
        const body = {
            text: form.text,
            title: form.title
        };
        const headers = {
            headers: {
                Authorization: token
            }
        };
        axios
        .post(`${url}/posts`, body, headers)
        .then((response) =>{
            requestGetPosts();
            resetState()
        })
        .catch((error) =>{
            alert(error.message);
            resetState()
        })
    };

    const requestPutVote = (idPost, directionVote) =>{
        const headers = {
            headers: {
                Authorization: token
            }
        };
        const body = {
            direction: directionVote
        };
        axios
        .put(`${url}/posts/${idPost}/vote`, body, headers)
        .then((response) =>{
            requestGetPosts()
        })
        .catch((error) =>{
            alert(error.message)
        })
    };

    const onClickButtonVote = (id, direction) =>{
        requestPutVote(id, direction)
    };

    const onClickDetail = (idPost) =>{
        goToPostPage(history, idPost)
    }

    const inputChange = (event) =>{
        const { name, value } = event.target;

        onChange(name, value)
    };

    const clickSubmittion = (event) =>{
        event.preventDefault();
        requestPostPost()
    };

    useEffect(() =>{
        if(!token){
            goToHomePage(history)
        }
        requestGetPosts()
    }, [history, token])

    return(
        <DivFeed>
            <form onSubmit={clickSubmittion}>
                <input type="text"
                pattern="^[.\s\w]{1,300}$"
                value={form.title}
                name="title"
                onChange={inputChange}
                required
                placeholder="Titulo"
                />
                <textarea type="text"
                value={form.text}
                name="text"
                onChange={inputChange}
                placeholder="Texto"
                />
                <button>Postar</button>
            </form>
            {posts.sort((a,b) =>{
                return b.createdAt - a.createdAt
            })
            .map((post) =>{
                return(
                    <CardPost data-testid={"post-content"}>
                        <div>
                            <button onClick={()=>onClickButtonVote(post.id, 1)} data-testid={"button-vote1"}>1</button>
                            {post.votesCount}
                            {/* {post.userVoteDirection} */}
                            <button onClick={()=>onClickButtonVote(post.id, -1)} data-testid={"button-vote"}>-1</button>
                        </div>
                        <div>
                        <p>posted by {post.username}</p> 
                        <span title={new Date(post.createdAt).toString()}>{timePassed(post.createdAt)}</span>
                        </div>
                        <div>
                            <p onClick={()=>onClickDetail(post.id)}>{post.title}</p>
                            <p onClick={()=>onClickDetail(post.id)}>{post.text}</p>
                        </div>
                        <div>
                            <button onClick={()=>onClickDetail(post.id)}>{post.commentsCount}</button>
                        </div>
                    </CardPost>
                );
            })}
        </DivFeed>
    )
}