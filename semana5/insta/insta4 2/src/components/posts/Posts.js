import React, { useState } from 'react'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { PostContainer, PostHeader, PostPhoto, PostFooter, UserPhoto } from './Styled.js'
import CommentSection from '../comment-section/CommentSection'

export default function Posts (props) {
  const [liked, setLiked] = useState(false);
  const [likesQuantity, setLikesQuantity] = useState(0);
  const [onTyper, setOnTyper] = useState(false);
  const [commentQuantity, setCommentQuantity] = useState(0);
  let iconLike = liked ? iconeCoracaoPreto : iconeCoracaoBranco;

  const likeButton = () =>{
    if(!liked){
      setLiked(!liked);
      setLikesQuantity(likesQuantity + 1)
    }
    else{
      setLiked(false);
      setLikesQuantity(likesQuantity - 1)
    }
  };
  
  const commentButton = () =>{
    setOnTyper(!onTyper)
  };

  const sendButton = () =>{
    setOnTyper(false);
    setCommentQuantity(commentQuantity + 1)
  }

  return(
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.userPhoto}/>
        <p>{props.user}</p>
      </PostHeader>
      <>
        <PostPhoto src={props.postPhoto}/>
      </>
      <PostFooter>
        <IconeComContador
          icone={iconLike}
          onClickIcone={likeButton}
          valorContador={likesQuantity}
          />
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={commentButton}
          valorContador={commentQuantity}
        />
      </PostFooter>
      {onTyper && <CommentSection functionSend={sendButton}/>}
    </PostContainer>
  )
}