import React from 'react';
import {Routes, Route, useParams} from "react-router-dom";
import posts from "json/posts.json";
import PostModel from "../../components/PostModel";
import ReactMarkdown from "react-markdown";
import "./Post.css"
import NotFound from "../NotFound";
import MainPage from "../../components/MainPage";
import styles from "./Post.module.css";
import PostCard from "../../components/PostCard";

const Post = () => {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  })

  if (!post) {
    return <NotFound/>
  }

  const recommendedPosts = posts
    .filter((post) => post.id !== Number(params.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4)

  return (
    <MainPage>
      <PostModel fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
        <div className="post-markdown-container">
          <ReactMarkdown>
            {post.texto}
          </ReactMarkdown>
        </div>
        <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
        <ul className={styles.postsRecomendados}>
          {recommendedPosts.map((post) => (
            <li key={post.id}>
              <PostCard post={post}/>
            </li>
          ))}
        </ul>
      </PostModel>
    </MainPage>
  );
};



export default Post;