
import { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage('Please enter your email address.');
      return;
    }

    setMessage('Thank you for subscribing!');
    setEmail('');
  }

  return (
    <section className="signup">
      <h2>Subscribe to My Newsletter</h2>
      <p>Enter your email to receive updates about my projects.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          required
        />

        <button type="submit">Subscribe</button>
      </form>

      <p>{message}</p>
    </section>
  );
}

export default Signup;