
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase.js';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage('');

    try {
      const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
      await updateProfile(result.user, {
        displayName: name
      });

      await setDoc(doc(db, 'users', result.user.uid), {
        name: name,
        email: email
      });

      window.location.href = '/login';
    } catch (error) {
      setMessage('Registration failed: ' + error.message);
    }
  }

  return (
    <section>
      <h2>Create an Account</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password (at least 6 characters)"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          minLength={6}
          required
        />

        <button type="submit">Register</button>
      </form>

      <p>{message}</p>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </section>
  );
}

export default Register;

