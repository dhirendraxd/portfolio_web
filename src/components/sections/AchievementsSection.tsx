
interface Achievement {
  name: string;
  description: string;
}

const hackathons: Achievement[] = [
  {
    name: "Innovation Challenge Winner",
    description: "First place in national hackathon for innovative solution..."
  },
  {
    name: "Tech for Good Hackathon",
    description: "Developed sustainable technology solutions for social impact..."
  },
  {
    name: "Code Sprint Champion",
    description: "Built and deployed a full-stack application in 24 hours..."
  }
];

const achievements: Achievement[] = [
  {
    name: "Technical Excellence",
    description: "Recognized for outstanding contributions in technology innovation..."
  },
  {
    name: "Community Impact",
    description: "Led successful tech community initiatives and workshops..."
  },
  {
    name: "Academic Honors",
    description: "Achieved top honors in computer science and engineering..."
  }
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding opacity-0">
      <div className="container mx-auto">
        <h2 className="section-title">Hackathons & Achievements</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-2xl font-bold mb-6">Hackathon Projects</h3>
            <div className="space-y-6">
              {hackathons.map((project) => (
                <div key={project.name} className="p-6 glass rounded-lg">
                  <h4 className="font-bold mb-2 text-blue-300">{project.name}</h4>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <h3 className="text-2xl font-bold mb-6">Notable Achievements</h3>
            <div className="space-y-6">
              {achievements.map((cert) => (
                <div key={cert.name} className="p-6 glass rounded-lg">
                  <h4 className="font-bold mb-2 text-blue-300">{cert.name}</h4>
                  <p className="text-sm text-gray-300">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
