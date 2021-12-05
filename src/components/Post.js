import React, { Component } from "react";

const Post = (props) => {
  let title, thumbnail, permalink, ups, id;

  {
    props.details
      ? ({ title, thumbnail, permalink, ups, id } = props.details)
      : "";
  }

  const { savePost, saved } = props;

  const savedIds = saved.map((post) => post.id);

  return (
    <div className="card">
      <img
        src={
          thumbnail === "self" || thumbnail === "default" ? "" : `${thumbnail}`
        }
      />
      <a
        className="link"
        href={"https://www.reddit.com" + `${permalink}`}
        target="_blank"
      >
        <h3>{title}</h3>
      </a>
      <div className="flexSpace">
        <small>Upvotes: {`${ups}`}</small>
        {savedIds.includes(id) ? (
          ""
        ) : (
          <div
            style={{ textDecoration: "underline" }}
            onClick={() => savePost({ title, thumbnail, permalink, ups, id })}
          >
            Save for Later
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
