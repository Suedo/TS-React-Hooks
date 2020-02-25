import React, { useState, useEffect } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Result {
  loading: boolean;
  status: string;
  payload: string;
}

const DataFetchingV2 = () => {
  const blankPost: Post = {
    userId: 0,
    id: 0,
    title: "",
    body: ""
  };

  const [post, setPost] = useState<Post>(blankPost);
  const [id, setId] = useState(1);
  const [buttonId, setButtonId] = useState(1);

  const handleClick = () => {
    setButtonId(id);
    console.log(`handleClick: id: ${id}, buttonId: ${buttonId}`);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setPost(res);
      });
  }, [buttonId]);

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(+e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>
        <ul>
          <li key={post.id}>{post.body}</li>
        </ul>
      </div>
    </div>
  );
};

export default DataFetchingV2;
