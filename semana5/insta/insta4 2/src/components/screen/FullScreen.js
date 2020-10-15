import React, { useState } from 'react'
import { useForm } from '../../custom-hooks/CustomHooks';
import AddNewPost from '../add-new-post/AddNewPost';
import Posts from '../posts/Posts';
import { BigContainer } from './styled'

export default function FullScreen () {
  const { resetState } = useForm()
  const [ post, setPost ] = useState([
    {
      userName: "Paulinha",
      userPhoto: "https://picsum.photos/50/50",
      postPhoto: "https://picsum.photos/200/150",
    },
    {
      userName: "Joana22",
      userPhoto: "https://picsum.photos/50/55",
      postPhoto: "https://picsum.photos/200/159",
    },
    {
      userName: "a_malukinha",
      userPhoto: "https://picsum.photos/50/57",
      postPhoto: "https://picsum.photos/200/189",
    }
  ]);
    
  const addNewPost = (inputDatas) =>{
    setPost([...post, inputDatas]);
    resetState()
  };
    
  return(
    <BigContainer>
      <>
        <AddNewPost functionAdd={addNewPost}/>
      </>
      {post.map((item) =>{
        return(
          <>
            <Posts
              user={item.userName}
              userPhoto={item.userPhoto}
              postPhoto={item.postPhoto}
            />
          </>
        );
      })}
    </BigContainer>
  );
}
