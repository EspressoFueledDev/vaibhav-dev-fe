export default function Interests() {
  const interests = [
    {
      emoji: "🖨️",
      title: "3D Printing",
      description: "Designing and printing functional prototypes and custom parts"
    },
    {
      emoji: "☕",
      title: "Espresso",
      description: "Perfecting espresso shots and exploring home barista techniques"
    },
    {
      emoji: "🏊",
      title: "Swimming",
      description: "Staying active and maintaining fitness through regular swimming"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Beyond Code</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {interests.map((interest) => (
          <div
            key={interest.title}
            className="border border-zinc-200 rounded-lg p-5 hover:border-zinc-300 transition-colors"
          >
            <div className="text-2xl mb-2">{interest.emoji}</div>
            <h3 className="font-semibold text-zinc-900 mb-1">{interest.title}</h3>
            <p className="text-sm text-zinc-600">{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
