import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [stateInput, setStateInput] = useState(false);

  const onChangeInput = event => {
    setInputValue(event.target.value);

  };

  const addPost = () => {
    if(inputValue === ""){
      setStateInput(!stateInput)
    }
    else{
    // Adiciona um post à lista
    const newPost = {
      id: Date.now(),
      text: inputValue,
      liked: false
    };

    const newPostsList = [newPost, ...postsList];

    setPostsList(newPostsList);

    setInputValue("");

    }
  };

  const deletePost = postId => {
    // Apaga um post da lista
    const newPostsList = postsList.filter(post => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);

  };

  const toggleLike = postId => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button onClick={addPost}>Adicionar</button>
      </div>
      <br />
      {stateInput && <h1>Ação Proibida. Post vazio</h1>}
      {postsList.length === 0 ? (<h2>Nenhum Post</h2>) : (<h2>Quantidade de Posts: {postsList.length}</h2>)}
      {postsList.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
            toggleLike={toggleLike}
            deletePost={deletePost}
          />
        );
      })}
    </div>
  );
};

export default App;
