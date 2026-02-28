import React, { useState, useEffect } from 'react';
import api from "../api";
import './Style.css'

const NewsList = () => {
    const [posts, setPosts] = useState([]); 
    
    useEffect(() => { 
        api.get('/posts') 
            .then(res => setPosts(res.data)) 
            .catch(err => console.error(err)); 
    }, []);

    return (
        <>
            <div className="grid-Newslist">
                {posts.data?.map(post => (
                    <div className="grid-item" key={post.id}>
                        <h3>{post.title}</h3>
                        {post.image && <img src={post.image} alt={post.title} style={{ width: '200px' }} />}
                        <p>{post.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default NewsList