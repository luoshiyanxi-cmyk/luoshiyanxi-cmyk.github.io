import {
  ArrowUpRight,
  BookOpen,
  Bot,
  Code2,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  MessageSquareText,
  Sparkles,
  TerminalSquare
} from "lucide-react";

const person = {
  name: "Luo Shiyanxi",
  major: "AI&ET",
  githubUsername: "luoshiyanxi-cmyk",
  githubUrl: "https://github.com/luoshiyanxi-cmyk",
  avatar: "https://avatars.githubusercontent.com/u/292028931?v=4",
  joinedAt: "2026-06-09",
  publicRepos: 0
};

const eportfolioUrl =
  "https://sites.google.com/d/1WCGDCtpv6UhJbpI3iIAl8piH7yaH40qU/p/1hzMAYQY_DQJhoqYMCcrc1MkUJtlfax4q/edit";

const focusAreas = [
  {
    title: "AI and Educational Technology",
    description: "Exploring how AI can support learning, teaching, content organization, and personal productivity.",
    icon: <GraduationCap size={20} />
  },
  {
    title: "Frontend Experience",
    description: "Turning ideas into pages that are easy to open, read, and use, with clear structure and responsive layout.",
    icon: <Sparkles size={20} />
  },
  {
    title: "Project Practice",
    description: "Building small tools, testing ideas, recording results, and growing a portfolio one practical project at a time.",
    icon: <TerminalSquare size={20} />
  }
];

const projectIdeas = [
  {
    title: "Google Sites ePortfolio",
    description:
      "A Google Sites ePortfolio for collecting academic work, learning evidence, project reflections, and professional development materials.",
    href: eportfolioUrl
  },
  {
    title: "University study plan generator",
    description: "A planning tool idea for turning course schedules and study goals into practical weekly learning plans."
  },
  {
    title: "AI&ET learning notes and resource library",
    description: "A future space for organizing AI, educational technology, NLP, and agent-workflow learning materials."
  },
  {
    title: "Personal homepage and project showcase",
    description: "This website, used as a compact public profile and portfolio entry point."
  }
];

const skillHighlights = [
  {
    title: "Agent Workflow",
    description:
      "Experienced with Codex and similar coding agents for research, implementation, debugging, and iterative project development.",
    icon: <Bot size={20} />
  },
  {
    title: "Coding Experience",
    description:
      "Comfortable building small web projects, working with React, TypeScript, Node.js, GitHub workflows, and practical debugging loops.",
    icon: <Code2 size={20} />
  },
  {
    title: "Natural Language Processing",
    description:
      "Familiar with NLP concepts and applications, including text processing, language models, prompt design, and AI-assisted learning tools.",
    icon: <MessageSquareText size={20} />
  }
];

const skills = ["Codex", "AI Agents", "Coding", "NLP", "React", "TypeScript", "Node.js", "GitHub"];

export function App() {
  return (
    <main className="site-shell">
      <nav className="top-nav" aria-label="Homepage navigation">
        <a className="brand" href="#home" aria-label="Back to home">
          <Code2 size={22} />
          <span>{person.name}</span>
        </a>
        <div className="nav-links">
          <a href="#work">Focus</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Personal homepage</p>
          <h1>{person.name}</h1>
          <p className="hero-text">
            I am {person.name}, studying {person.major}. This homepage is a first public version for my GitHub identity,
            learning direction, project ideas, and future portfolio work.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href={person.githubUrl} target="_blank" rel="noreferrer">
              <Github size={19} />
              View GitHub
              <ArrowUpRight size={16} />
            </a>
            <a className="secondary-link" href="#projects">
              <BookOpen size={19} />
              View Projects
            </a>
          </div>
        </div>

        <aside className="profile-card" aria-label="Public profile">
          <img src={person.avatar} alt={`${person.name} GitHub avatar`} />
          <div>
            <span className="profile-label">{person.major}</span>
            <h2>{person.name}</h2>
            <p>GitHub: {person.githubUsername}</p>
            <p>Public repositories: {person.publicRepos}</p>
            <p>Joined: {person.joinedAt}</p>
          </div>
        </aside>
      </section>

      <section className="section-band" id="work">
        <div className="section-heading">
          <p className="eyebrow">Focus</p>
          <h2>Positioning this homepage around AI&ET learning, project practice, and growth records.</h2>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article className="focus-card" key={area.title}>
              <span>{area.icon}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-layout" id="projects">
        <div className="project-copy">
          <p className="eyebrow">Projects</p>
          <h2>The project area is ready for real links, screenshots, and case notes.</h2>
          <p>
            The public GitHub profile currently has no public repositories, so this section stays honest and focuses on
            real directions. Each completed project can later be replaced with a repository link and a short write-up.
          </p>
        </div>
        <div className="project-list">
          {projectIdeas.map((project, index) => (
            <article className="project-row" key={project.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{project.title}</strong>
                <p>{project.description}</p>
                {project.href && (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    Open ePortfolio
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-showcase" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Skills I am building around AI agents, coding, and natural language processing.</h2>
        </div>
        <div className="skill-card-grid">
          {skillHighlights.map((skill) => (
            <article className="skill-card" key={skill.title}>
              <span>{skill.icon}</span>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-band" aria-label="Skill tags">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Contact details and portfolio links can be added here next.</h2>
        </div>
        <div className="contact-actions">
          <a href={person.githubUrl} target="_blank" rel="noreferrer">
            <Github size={19} />
            GitHub
          </a>
          <a href={eportfolioUrl} target="_blank" rel="noreferrer">
            <BookOpen size={19} />
            ePortfolio
          </a>
          <a href="mailto:your-email@example.com">
            <Mail size={19} />
            Email placeholder
          </a>
          <span>
            <MapPin size={19} />
            China
          </span>
        </div>
      </section>
    </main>
  );
}
