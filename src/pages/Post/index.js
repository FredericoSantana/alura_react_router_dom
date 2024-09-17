import React from 'react';
import {useParams} from "react-router-dom";
import posts from "json/posts.json";
import PostModel from "../../components/PostModel";
import ReactMarkdown from "react-markdown";
import "./Post.css"

const Post = () => {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  })
  return (
    <PostModel fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
      <div className="post-markdown-container">
        <ReactMarkdown>
          {post.texto}
        </ReactMarkdown>
      </div>
    </PostModel>
  );
};

export default Post;