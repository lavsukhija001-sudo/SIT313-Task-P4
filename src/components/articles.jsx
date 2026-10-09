
const articles = [
  {
    title: 'A Beginner’s Guide to Web Development',
    image: '/webdevelopment.png',
    description:
      'Learn how HTML, CSS and JavaScript work together to create websites.',
    rating: '5',
    author: 'Lav',
  },
  {
    title: 'How Artificial Intelligence Is Changing Technology',
    image: '/artificial intellligence.png',
    description:
      'Explore how AI helps people solve problems, analyse information and automate tasks.',
    rating: '5',
    author: 'Lav',
  },
  {
    title: 'Why JavaScript Is Important for Websites',
    image: '/java script.png',
    description:
      'Discover how JavaScript adds interaction, buttons, forms and dynamic content to web pages.',
    rating: '5',
    author: 'Lav',
  },
];

const tutorials = [
  {
    title: 'JavaScript Fundamentals',
    image: '/javascript fundamentals.png',
    description:
      'Learn the basic concepts of JavaScript, including variables, functions, events and how it makes websites interactive.',
    rating: '5',
    author: 'Lav',
  },
  {
    title: 'React Components',
    image: '/react components.png',
    description:
      'Learn how reusable React components help organise code and build modern websites more easily.',
    rating: '5',
    author: 'Lav',
  },
  {
    title: 'ExpressJS Basics',
    image: '/express js.png',
    description:
      'Understand how ExpressJS handles routes, middleware and APIs to support backend web development.',
    rating: '4.9',
    author: 'Lav',
  },
];

function ArticleCards({ items }) {
  return (
    <div className="card-container">
      {items.map((item) => (
        <div className="article-card" key={item.title}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>⭐ {item.rating}/5</p>
          <p>{item.author}</p>
        </div>
      ))}
    </div>
  );
}

function Articles() {
  return (
    <>
      <section className="featured-section">
        <h2>Featured Articles</h2>
        <ArticleCards items={articles} />
      </section>

      <section className="featured-section tutorials-section">
        <h2>Featured Tutorials</h2>
        <ArticleCards items={tutorials} />
      </section>
    </>
  );
}

export default Articles;