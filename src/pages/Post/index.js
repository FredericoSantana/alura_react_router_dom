import React from 'react';
import {Routes, Route, useParams} from "react-router-dom";
import posts from "json/posts.json";
import PostModel from "../../components/PostModel";
import ReactMarkdown from "react-markdown";
import "./Post.css"
import NotFound from "../NotFound";
import MainPage from "../../components/MainPage";

const Post = () => {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  })

  if (!post) {
    return <NotFound/>
  }
  return (
    <MainPage>
      <PostModel fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
        <div className="post-markdown-container">
          <ReactMarkdown>
            {post.texto}
          </ReactMarkdown>
        </div>
      </PostModel>
    </MainPage>
  );
};



export default Post;