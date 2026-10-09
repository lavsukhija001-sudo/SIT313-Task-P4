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
    <section>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>{message}</p>
      <p>
        Don't have an account? <a href="/signup">Register here</a>
      </p>
    </section>
  );
}

export default Login;