import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { url } from '../../App';
import { goToHomePage } from '../../router/GoTo';
import { useForm } from '../hooksGlobals/Hooks';


export default function PostPage () {
    const history = useHistory();
    const pathParams = useParams();
    const [postDetail, setPostDetail] = useState({});
    const [comments, setComments] = useState([])
    const { form, onChange, resetState } = useForm({text: ""});
    let token = localStorage.getItem("token");
    let user = localStorage.getItem("user");

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

    const requestGetPostDetail = (idPost) =>{
        const headers = {
            headers: {
                Authorization: token
            }
        };
        axios
        .get(`${url}/posts/${idPost}`, headers)
        .then((response) =>{
            setPostDetail(response.data.post);
            setComments(response.data.post.comments)
        })
        .catch((error) =>{
            alert(error.message)
        })
    };

    const requestPostComment = (postId) =>{
        const headers = {
            headers: {
                Authorization: token
            }
        };
        const body = {
            text: form.text
        };
        axios
        .post(`${url}/posts/${postId}/comment`, body, headers)
        .then((response) =>{
            requestGetPostDetail(postId);
            resetState()
        })
        .catch((error) =>{
            alert(error.message);
            resetState()
        })
    };

    const requestPutVoteComment = (idPost, idComment, directionVote) =>{
        const headers = {
            headers: {
                Authorization: token
            }
        };
        const body = {
            direction: directionVote
        };
        axios
        .put(`${url}/posts/${idPost}/comment/${idComment}/vote`, body, headers)
        .then((response) =>{
            requestGetPostDetail(idPost)
        })
        .catch((error) =>{
            alert(error.message)
        })
    };

    const requestPutVote = (idPost, directionVotePost) =>{
        const headers = {
            headers: {
                Authorization: token
            }
        };
        const body = {
            direction: directionVotePost
        };
        axios
        .put(`${url}/posts/${idPost}/vote`, body, headers)
        .then((response) =>{
            requestGetPostDetail(idPost)
        })
        .catch((error) =>{
            alert(error.message)
        })
    };


    const inputChange = (event) =>{
        const { name, value } = event.target;

        onChange(name, value)
    };

    const clickSubmittion = (postId) =>{
        requestPostComment(postId)
    };

    const buttonVoteComment = (idComment, direction) =>{
        requestPutVoteComment(pathParams.idPost, idComment, direction)
    };
    
    const buttonVotePost = (idPost, directtion) =>{
        requestPutVote(idPost, directtion)
    };

    useEffect(()=>{
        if(!token){
            goToHomePage(history)
        }
        requestGetPostDetail(pathParams.idPost)
    }, [history, pathParams.idPost, token])

    return(
        <div>
            <div>
                <button onClick={()=>buttonVotePost(postDetail.id, 1)}>1</button>
                {postDetail.votesCount}
                <button onClick={()=>buttonVotePost(postDetail.id, -1)}>-1</button>
                <p>posted by {postDetail.username}</p> 
                <span title={new Date(postDetail.createdAt).toString()}>{timePassed(postDetail.createdAt)}</span>
                <br/>{postDetail.title}
                {postDetail.text}
                <p>Comentar como {user}</p>
            </div>
            <div>
                <input value={form.text}
                name="text"
                type="text"
                required
                onChange={inputChange}
                placeholder="O que você está pensando?"
                />
                <button onClick={()=>clickSubmittion(postDetail.id)}>Comentar</button>
            </div>
            {comments.map((comment) =>{
                return(
                    <div>
                        <button onClick={()=>buttonVoteComment(comment.id, 1)}>1</button>
                        {comment.votesCount}
                        <button onClick={()=>buttonVoteComment(comment.id, -1)}>-1</button>
                        <p>posted by {comment.username}</p> 
                        <span title={new Date(comment.createdAt).toString()}>{timePassed(comment.createdAt)}</span>
                        <br/>{comment.text}
                    </div>
                );
            })}

        </div>
    );
}