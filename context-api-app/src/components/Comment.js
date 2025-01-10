import React from "react";

export default function Comment({ username, isAdmin }) {
  return (
    <div>
      <p>Logged in as {username}</p>
      {isAdmin && <button>Edit comment</button>}
      <p>Template post comment</p>
    </div>
  );
}
