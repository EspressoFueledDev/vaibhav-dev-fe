export default function FrontendProjects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern portfolio built with Next.js 16, React 19, and Tailwind CSS 4",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      status: "In Development"
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Frontend Development</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-zinc-200 rounded-lg p-6 hover:border-zinc-300 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              {project.status && (
                <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded border border-blue-200">
                  {project.status}
                </span>
              )}
            </div>
            <p className="text-zinc-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-zinc-50 text-zinc-600 rounded border border-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
