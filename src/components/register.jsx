import { useState } from 'react';
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase.js';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    async function handleSubmit(event) {
    event.preventDefault();
    setMessage('');

    if (password !== confirmPassword) {
    setMessage('Passwords do not match.');
    return;
    }

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
    setMessage('Registration failed. Please check your details and try again.');
    }

    }

return (
    <section className="auth-page">
    <div className="register-box">
    <h2>Create an Account</h2>

    <form onSubmit={handleSubmit}>
      <label>Full name</label>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label>Your email</label>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label>Your password</label>
      <input
        type="password"
        placeholder="Password (at least 6 characters)"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        minLength={6}
        required
      />

      <label>Confirm password</label>
      <input
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        minLength={6}
        required
      />

      <button type="submit">Create</button>
    </form>

    <p className="auth-message">{message}</p>

    <p>
      Already have an account? <a href="/login">Login here</a>
    </p>
  </div>
</section>

);
}

export default Register;