import React from "react";
import "./post.css";

const Post = ({ post, photo }) => {
  return (
    <li className="row">
      <div className="col-md-1">
        <img className="img-fluid" src={photo.url}></img>
      </div>
      <div className="col-md-11">
        <h2>{post.title}</h2>
        <p className="post-p">{post.body}</p>
      </div>
    </li>
  );
};

export default Post;
