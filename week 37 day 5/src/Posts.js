import "./styles.css";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [allposts, setAllPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setAllPosts(data);
      });
  });

  const moreDetailsHandler = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setCurrentPost(data);
      });
  };

  const renderPosts = (data) => {
    if (data) {
      return data.map((item, key) => {
        return (
          <div className="card w-100" key={key}>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <button
                className="btn btn-primary"
                onClick={moreDetailsHandler.bind(this, item.id)}
              >
                Get More Details
              </button>
            </div>
          </div>
        );
      });
    }
  };

  const renderMoredetails = (data) => {
    if (data) {
      return (
        <>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.body}</p>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <p>Select a post to see more details</p>
        </>
      );
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-center">Posts List</h1>
            {renderPosts(allposts)}
          </div>
          <div className="col-md-6">
            <h1 className="text-center">Posts Details</h1>
            {renderMoredetails(currentPost)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
