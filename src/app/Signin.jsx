import { useState } from 'react'
import api from '../api';
import '../components/Style.css'

function Signin() {
    const [form, setForm] = useState({ username: '', email: '', password: '' }); 
    const [message, setMessage] = useState(''); 
  
    const handleChange = (e) => { 
        setForm({ ...form, [e.target.name]: e.target.value }); 
  }; 
  
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        api.post('/signin', form) 
        .then(res => setMessage(res.data.message)) 
        .catch(err => setMessage('Error: ' + err.response.data.error)); 
  };

    return (
        <>
        <div className='signin-page'>
            <h2>Sign In</h2> 
            <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <input 
                type="text" 
                name="username" 
                placeholder="Username" 
                value={form.username} 
                onChange={handleChange} 
                /> 
            </div>
            <div className='form-group'>          
                <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={form.email} 
                onChange={handleChange} 
                /> 
            </div> 
            <div className='form-group'>
                <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={form.password} 
                onChange={handleChange} 
                /> 
            </div>
                <button type="submit">Sign In</button> 
            </form> 
            <p>{message}</p>
        </div>
        </>
    )
}

export default Signin