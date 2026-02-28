import React from "react";
import { useState } from 'react'
import api from "../api";
import '../components/Style.css'

function CreatePost() {
    const [form, setForm] = useState({ title: '', description: '' });
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => { 
        setImage(e.target.files[0]); 
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const data = new FormData(); 
        data.append('title', form.title); 
        data.append('description', form.description); 
        data.append('image', image);

        api.post('/posts', data, { 
            headers: { 'Content-Type': 'multipart/form-data' } 
        })
        .then(res => setMessage(`Post created with ID: ${res.data.id}`)) 
        .catch(err => setMessage('Error: ' + (err.response?.data?.error || 'Unknown error')));
    };

    return (
        <>
            <div className="create-post">
                <h2 className="post-title">Create Blog Post</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Title" 
                        value={form.title} 
                        onChange={handleChange}
                        className="input"
                    />
                    <input 
                        type="file" 
                        name="image" 
                        accept="image/png, image/jpeg"
                        onChange={handleFileChange}
                        className="file-input"
                    />
                    <textarea 
                        name="description" 
                        placeholder="Description" 
                        value={form.description} 
                        onChange={handleChange}
                        className="textarea"
                    />
                    <button className="create-button" type="submit">Create Post</button>
                </form>
                <p className="message">{message}</p>
            </div>
        </>
    )
}

export default CreatePost;