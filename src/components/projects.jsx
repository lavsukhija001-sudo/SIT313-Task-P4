
const projects = [
  {
    title: 'Urban Twin AI',
    image: '/twin_ai.png',
    description:
      'A project focused on urban cities, analysing and solving basic problems in cities.',
  },
  {
    title: 'Google Ambassador Program',
    image: '/pitchnight.png',
    description:
      'Made a chatbot in the Pitch Night edition under the Google Ambassador Program.',
  },
  {
    title: "India's Biggest AI Quiz",
    image: '/QuizOff .png',
    description:
      "Completed QuizOff 2026, India's Biggest AI Quiz, with students from many institutions.",
  },
];

function Projects() {
  return (
    <section id="work" className="work">
      <h2>My Projects</h2>

      <div className="projects">
        {projects.map((project) => (
          <div className="project" key={project.title}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;