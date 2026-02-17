export function Stats() {
    const stats = [
        { label: "Experience", value: "5.0+", suffix: "Years" },
        { label: "Satisfied Clients", value: "10k", suffix: "+" },
        { label: "Expert Crew", value: "50", suffix: "+" },
        { label: "Quality", value: "100", suffix: "%" },
    ];

    return (
        <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                    {stats.map((stat, i) => (
                        <div key={i} className="p-4">
                            <div className="font-heading text-4xl md:text-6xl font-bold text-primary mb-2">
                                {stat.value}<span className="text-2xl text-white">{stat.suffix}</span>
                            </div>
                            <div className="font-sans text-sm md:text-base text-gray-400 uppercase tracking-wider font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
