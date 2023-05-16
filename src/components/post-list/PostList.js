import React from "react";
import Post from "../post/Post";

const PostList = ({ posts, photos }) => {
  return (
    <ul>
      {posts.map((post, index) => (
        <Post key={post.id} post={post} photo={photos[index]} />
      ))}
    </ul>
  );
};

export default PostList;
