function Navbar() {
return (
<nav>
<a href="/">DEV@Deakin</a>
<input type="text" placeholder="Search..." />

  <div className="nav-right">
    <button type="button">Post</button>
    <a href="/login">Login</a>
  </div>
</nav>

);
}

export default Navbar;