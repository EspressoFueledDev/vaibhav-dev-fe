export default function AIProjects() {
  const projects = [
    {
      title: "RAG System with Claude",
      description: "Built a complete RAG (Retrieval Augmented Generation) system using Claude API and ChromaDB for intelligent document retrieval and question answering",
      tech: ["Python", "Claude API", "ChromaDB", "Vector Embeddings"],
      github: "ClaudeExperiments"
    },
    {
      title: "Web Scraper with AI Analysis",
      description: "Intelligent web scraper that extracts and analyzes content using Claude AI for automated content understanding",
      tech: ["Python", "BeautifulSoup", "Claude API"],
      github: "ClaudeExperiments"
    },
    {
      title: "ChromaDB Explorer",
      description: "Interactive Jupyter notebook for exploring and experimenting with vector databases and semantic search",
      tech: ["Python", "ChromaDB", "Jupyter", "sentence-transformers"],
      github: "ClaudeExperiments"
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">AI & Machine Learning</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-zinc-200 rounded-lg p-6 hover:border-zinc-300 transition-colors">
            <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
            <p className="text-zinc-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-zinc-50 text-zinc-600 rounded border border-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.github && (
              <a
                href="#"
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors inline-flex items-center gap-1"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}

        {/* AI Playground Placeholder */}
        <div className="border border-dashed border-zinc-300 rounded-lg p-8 text-center">
          <h3 className="text-lg font-semibold mb-2">AI Playground</h3>
          <p className="text-zinc-500 text-sm">Coming Soon - Interactive AI demonstrations</p>
        </div>
      </div>
    </section>
  );
}
