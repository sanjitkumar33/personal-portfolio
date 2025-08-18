import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project 1 */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2">Zomato Clone Website</h3>
                            <p className="text-gray-400 mb-4">Restaurant app for food delivery.</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "MongoDB"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                                View Project
                            </a>
                        </div>

                        {/* Project 2 */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2">Payment Solution Aggregator</h3>
                            <p className="text-gray-400 mb-4">Platform for managing multiple online payment gateways.</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Express", "MongoDB", "JWT"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
