import React from 'react';
import Post from "./Post"

const SavedPosts = ({ saved }) => {
    return(
        <div>
            <h2 className="centerItem">Saved Posts</h2>
            {saved.map(post => {
                return <Post 
                key={post.id} 
                details={post} 
                saved = {saved}
                />;
            })}
        </div>
    )
}

export default SavedPosts