import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

const tools = [
  {
    name: "ChatGPT",
    category: "Productivity",
    description:
      "AI assistant for writing, research, coding, and ideas.",
    url: "https://chatgpt.com/",
  },
  {
    name: "Midjourney",
    category: "Creative",
    description:
      "Generate detailed and imaginative images using AI.",
    url: "https://www.midjourney.com/",
  },
  {
    name: "Claude",
    category: "Productivity",
    description:
      "AI assistant focused on reasoning, writing, and analysis.",
    url: "https://claude.ai/",
  },
  {
    name: "Runway",
    category: "Video",
    description:
      "Create and transform videos using generative AI.",
    url: "https://runwayml.com/",
  },
  {
    name: "GitHub Copilot",
    category: "Coding",
    description:
      "AI-powered coding assistance directly inside your editor.",
    url: "https://github.com/features/copilot",
  },
  {
    name: "Perplexity",
    category: "Research",
    description:
      "AI-powered search and research with sourced answers.",
    url: "https://www.perplexity.ai/",
  },
];
function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">AI TOOLS, SIMPLIFIED</span>

          <h1>
            Discover the
            <span> future of AI.</span>
          </h1>

          <p>
            Explore powerful artificial intelligence tools designed to help
            you create, learn, automate, and build faster.
          </p>

          <div className="hero-buttons">
            <NavLink to="/tools" className="primary-button">
              Explore AI Tools
            </NavLink>

            <NavLink to="/about" className="secondary-button">
              Learn More
            </NavLink>
          </div>
        </div>

        <div className="hero-card">
          <div className="glow"></div>

          <div className="ai-symbol">✦</div>

          <h2>DEXTRO AI</h2>

          <p>
            Your gateway to the rapidly evolving world of artificial
            intelligence.
          </p>
        </div>
      </section>
    </main>
  );
}

function Tools({ searchQuery, setSearchQuery }) {
  const filteredTools = tools.filter((tool) => {
    const search = searchQuery.toLowerCase();

    return (
      tool.name.toLowerCase().includes(search) ||
      tool.category.toLowerCase().includes(search) ||
      tool.description.toLowerCase().includes(search)
    );
  });

  return (
    <main className="page">
      <section className="content-section">
        <span className="eyebrow">AI DIRECTORY</span>

        <h1>Explore AI Tools</h1>

        <p className="section-intro">
          Discover powerful AI tools across productivity, creativity,
          coding, research, and video.
        </p>

        <div className="search-wrapper">
          <input
            type="search"
            placeholder="Search AI tools..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="search-input"
          />
        </div>

        <div className="tools-grid">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <article className="tool-card" key={tool.name}>
                <div className="tool-icon">✦</div>

                <span className="tool-category">
                  {tool.category}
                </span>

                <h2>{tool.name}</h2>

                <p>{tool.description}</p>

                <a
  href={tool.url}
  target="_blank"
  rel="noopener noreferrer"
  className="card-button"
>
  Explore Tool
</a>
              </article>
            ))
          ) : (
            <div className="no-results">
              <h2>No tools found</h2>
              <p>
                Try searching for another AI tool or category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function About() {
  return (
    <main className="page">
      <section className="content-section about-section">
        <span className="eyebrow">ABOUT DEXTRO</span>

        <h1>Making AI easier to discover.</h1>

        <p className="section-intro">
          DEXTRO AI is a simple platform concept designed to help people
          discover useful artificial intelligence tools without getting lost
          in an overwhelming ecosystem.
        </p>

        <div className="about-grid">
          <div className="info-card">
            <span>01</span>
            <h2>Discover</h2>
            <p>
              Find AI tools across productivity, creativity, coding,
              research, and video.
            </p>
          </div>

          <div className="info-card">
            <span>02</span>
            <h2>Understand</h2>
            <p>
              Quickly understand what each tool does and where it can
              be useful.
            </p>
          </div>

          <div className="info-card">
            <span>03</span>
            <h2>Create</h2>
            <p>
              Turn the right AI tools into practical workflows for your
              ideas and projects.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <div className="app">
        <header className="navbar">
          <NavLink to="/" className="logo">
            DEXTRO <span>AI</span>
          </NavLink>

          <nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/tools"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Tools
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              About
            </NavLink>
          </nav>

          <NavLink to="/tools" className="nav-button">
            Explore
          </NavLink>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/tools"
            element={
              <Tools
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>

        <footer className="footer">
          <p>© 2026 DEXTRO AI. Built with React.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;