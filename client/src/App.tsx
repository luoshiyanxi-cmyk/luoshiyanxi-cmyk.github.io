import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
  TerminalSquare
} from "lucide-react";

const person = {
  nameCn: "罗世彦希",
  nameEn: "Bruce Luo",
  major: "AI&ET",
  githubUsername: "luoshiyanxi-cmyk",
  githubUrl: "https://github.com/luoshiyanxi-cmyk",
  avatar: "https://avatars.githubusercontent.com/u/292028931?v=4",
  joinedAt: "2026-06-09",
  publicRepos: 0
};

const focusAreas = [
  {
    title: "AI 与教育技术",
    description: "围绕 AI&ET 专业方向，探索人工智能如何帮助学习、教学、内容组织和个人效率提升。",
    icon: <GraduationCap size={20} />
  },
  {
    title: "前端体验",
    description: "把想法做成可以被打开、阅读和使用的页面，重视结构清晰、响应式布局和中文表达。",
    icon: <Sparkles size={20} />
  },
  {
    title: "项目实践",
    description: "从小工具开始迭代，记录假设、修改、验证结果和下一步实验，让作品慢慢长出来。",
    icon: <TerminalSquare size={20} />
  }
];

const projectIdeas = [
  "大学课程学习计划生成器",
  "AI&ET 学习笔记与资源库",
  "Google Sites ePortfolio 内容包",
  "个人作品主页与项目展示"
];

const skills = ["AI&ET", "React", "TypeScript", "Vite", "Node.js", "GitHub", "中文内容设计"];

export function App() {
  return (
    <main className="site-shell">
      <nav className="top-nav" aria-label="主页导航">
        <a className="brand" href="#home" aria-label="回到首页">
          <Code2 size={22} />
          <span>{person.nameEn}</span>
        </a>
        <div className="nav-links">
          <a href="#work">方向</a>
          <a href="#projects">项目</a>
          <a href="#contact">联系</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Personal homepage</p>
          <h1>
            {person.nameCn}
            <span>{person.nameEn}</span>
          </h1>
          <p className="hero-text">
            我是 {person.nameEn}，专业方向是 {person.major}。这是一个先跑起来的个人主页原型，用来展示我的 GitHub 身份、学习方向、项目想法和后续作品。
          </p>
          <div className="hero-actions">
            <a className="primary-link" href={person.githubUrl} target="_blank" rel="noreferrer">
              <Github size={19} />
              查看 GitHub
              <ArrowUpRight size={16} />
            </a>
            <a className="secondary-link" href="#projects">
              <BookOpen size={19} />
              看项目方向
            </a>
          </div>
        </div>

        <aside className="profile-card" aria-label="个人公开资料">
          <img src={person.avatar} alt={`${person.nameEn} 的 GitHub 头像`} />
          <div>
            <span className="profile-label">{person.major}</span>
            <h2>{person.nameCn}</h2>
            <p>{person.nameEn}</p>
            <p>GitHub：{person.githubUsername}</p>
            <p>公开仓库：{person.publicRepos}</p>
            <p>加入时间：{person.joinedAt}</p>
          </div>
        </aside>
      </section>

      <section className="section-band" id="work">
        <div className="section-heading">
          <p className="eyebrow">Focus</p>
          <h2>主页先定位成“AI&ET 学习 + 项目实践 + 成长记录”。</h2>
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
          <h2>作品区先留好位置，等仓库或案例准备好就能直接替换。</h2>
          <p>
            目前 GitHub 公开仓库还是 0 个，所以这里不假装已经有很多作品。更好的做法是先放真实方向，之后每完成一个项目就补上链接、截图和说明。
          </p>
        </div>
        <div className="project-list">
          {projectIdeas.map((project, index) => (
            <article className="project-row" key={project}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{project}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-band" aria-label="技能标签">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>下一步可以把这里换成你的真实简介、邮箱和作品链接。</h2>
        </div>
        <div className="contact-actions">
          <a href={person.githubUrl} target="_blank" rel="noreferrer">
            <Github size={19} />
            GitHub
          </a>
          <a href="mailto:your-email@example.com">
            <Mail size={19} />
            邮箱占位
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
