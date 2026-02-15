export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Samsung",
      period: "2021 - Present (4 years)",
      current: true,
      achievements: [
        "Developed and maintained full-stack applications using modern web technologies",
        "Built scalable backend services with Java, Spring Boot, and microservices architecture",
        "Implemented RESTful and gRPC APIs for high-performance distributed systems",
        "Conducted end-to-end testing using Playwright and performance testing with Grafana K6",
        "Collaborated with cross-functional teams to deliver enterprise-grade solutions"
      ]
    },
    {
      title: "Software Engineer",
      company: "Allegis Group",
      period: "2019 - 2021 (2 years)",
      current: false,
      achievements: [
        "Developed enterprise web applications for staffing and workforce solutions",
        "Worked on full-stack development using Java, Spring Framework, and modern JavaScript frameworks",
        "Collaborated with product teams to deliver features for recruitment and talent management platforms",
        "Participated in code reviews and maintained high code quality standards"
      ]
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="border-l-2 border-zinc-200 pl-6 ml-2">
        {experiences.map((exp, index) => (
          <div key={index} className={`relative ${index < experiences.length - 1 ? 'mb-10' : ''}`}>
            <div className={`absolute -left-[1.6rem] top-1.5 w-3 h-3 rounded-full border-2 border-white ${
              exp.current ? 'bg-zinc-900' : 'bg-zinc-400'
            }`}></div>
            <div className="mb-3">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-zinc-600">{exp.company}</p>
              <span className="text-sm text-zinc-500">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside text-zinc-700 space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
