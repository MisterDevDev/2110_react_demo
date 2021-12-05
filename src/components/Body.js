import React, { Component } from "react";
import Post from "./Post";
import SavedPosts from "./SavedPosts";

const Body = ({ posts, saved, selectedCategory, showSaved, toggleShowSaved, savePost }) => {
    return (
    <div>
      <button onClick={toggleShowSaved}>
          {showSaved ? 'Go back to Main Posts...':'Go to Saved Posts...'}
      </button>
      {showSaved ? (
        <SavedPosts saved = {saved} />
      ) : (
        <div>
          <h2 className="centerItem">{selectedCategory}</h2>
          {posts[0] ? (
            posts.map((post) => {
              return <Post 
              key={post.data.id} 
              details={post.data}
              savePost = {savePost} 
              saved = {saved}
              />;
            })
          ) : (
            <div className="centerItem">
              <h3>Loading...</h3>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
