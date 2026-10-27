import '../style.css';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase.js';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage('');

    try {
      
        const result = await signInWithEmailAndPassword(auth, email, password);

        await setDoc(
        doc(db, 'users', result.user.uid),
        {
            name: result.user.displayName || '',
            email: result.user.email
        },
        { merge: true }
        );

        window.location.href = '/';
    } catch (error) {
      setMessage('Login failed. Please check your email and password or register for an account.');
    }
  }

  return (

    <section className="auth-page"> <div className="login-box"> <a className="signup-link" href="/signup"> Sign up </a>

    <form onSubmit={handleSubmit}>
        <label>Your email</label>
        <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        />

        <label>Your password</label>
        <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        />

        <button type="submit">Login</button>
    </form>

    <p className="auth-message">{message}</p>
    </div>

    </section> );
}  

export default Login;