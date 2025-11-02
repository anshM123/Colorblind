const stats = [
  { value: "8%", label: "of males affected" },
  { value: "300M", label: "people worldwide" },
  { value: "3", label: "main types" },
  { value: "100%", label: "free to use" },
];

export function StatsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2"
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
