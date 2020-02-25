import React, { useState, useEffect } from "react";

// https://jsonplaceholder.typicode.com/
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

const DataFetching = () => {
  const initialPostsState: Array<Post> = [];
  const initialResultState: Result = {
    loading: true,
    status: "success",
    payload: ""
  };

  const [posts, setPosts] = useState(initialPostsState);
  const [result, setResult] = useState(initialResultState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(response => {
        setResult({ loading: false, status: "success", payload: response });
        setPosts([...posts, ...response]); // response is an array[100] itself
        console.log(response)
      })
      .catch(error => {
        console.log("ERROR: " + error);
        setResult({
          loading: false,
          status: "error",
          payload: error
        });
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;