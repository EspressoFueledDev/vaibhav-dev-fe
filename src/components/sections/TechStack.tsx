export default function TechStack() {
  const techCategories = [
    {
      name: "Frontend",
      techs: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"]
    },
    {
      name: "Backend",
      techs: ["Java", "Spring Boot", "Python", "REST API", "gRPC"]
    },
    {
      name: "Testing & Performance",
      techs: ["Playwright", "Grafana K6"]
    },
    {
      name: "AI & Data",
      techs: ["Claude API", "ChromaDB", "RAG Systems", "BeautifulSoup", "Jupyter"]
    },
    {
      name: "Tools",
      techs: ["Git", "GitHub"]
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
      <div className="space-y-6">
        {techCategories.map((category) => (
          <div key={category.name}>
            <h3 className="text-sm font-medium text-zinc-500 mb-3">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-md border border-zinc-200"
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
