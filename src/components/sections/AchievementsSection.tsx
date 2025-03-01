interface Achievement {
  name: string;
  description: string;
}

const hackathons: Achievement[] = [
  {
    name: "CodeYatra Hackathon 2025",
    description: "Developed an innovative solution addressing real-world challenges in a competitive 36-hour hackathon."
  },
  {
    name: "KEC HackFest 2024",
    description: "Built a volunteer recruitment platform using HTML5, CSS, JavaScript, and deployed it on Vercel."
  },
  {
    name: "KIST HackFest 2024",
    description: "Developed a web app for local farmers to sell fresh produce with verification features and easy product addition."
  }
];

const achievements: Achievement[] = [
  {
    name: "Google UI/UX Design Certificate",
    description: "Completed professional certification in UI/UX Design from Google."
  },
  {
    name: "Google Cybersecurity Certificate",
    description: "Earned cybersecurity certification from Google, covering security architecture, penetration testing, and risk assessment."
  },
  {
    name: "TEDxBaneshwor Volunteer",
    description: "Contributed to event outreach, content creation, and promotion for TEDxBaneshwor 2024."
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