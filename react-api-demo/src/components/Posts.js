import React, { useState, useEffect } from "react";
import { getPosts, deletPost, updatePost } from "../services/postService";
import PostForm from "./PostForm";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    console.log("Load Posts");
    getPosts()
      .then((result) => {
        setPosts(result.data);
        //console.log(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    deletPost(id)
      .then((result) => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const startEditing = (post) => {
    setEditingPost(post);
  };

  return (
    <div>
      <h1>Posts</h1>
      <PostForm
        posts={posts}
        setPosts={setPosts}
        editingPost={editingPost}
        setEditingPost={setEditingPost}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => startEditing(post)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
