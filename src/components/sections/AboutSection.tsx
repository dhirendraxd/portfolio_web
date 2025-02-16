
import { FileText, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const skillCategories = {
  'Web Development': [
    'React.js',
    'TypeScript',
    'Node.js',
    'Next.js',
    'Tailwind CSS',
    'RESTful APIs'
  ],
  'Security': [
    'Security Architecture',
    'Penetration Testing',
    'OAuth/OIDC',
    'DevSecOps'
  ],
  'Cloud & DevOps': [
    'AWS Services',
    'Docker',
    'CI/CD Pipelines',
    'Infrastructure as Code'
  ],
  'Backend': [
    'Database Design',
    'API Development',
    'System Design',
    'Microservices'
  ]
};

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023"
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: "2023"
  },
  {
    name: "Professional Cloud Developer",
    issuer: "Google Cloud",
    year: "2022"
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding opacity-0">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="section-title">About Me</h2>
              <div className="card backdrop-blur-sm bg-slate-800/30">
                <h3 className="text-2xl font-bold mb-4">Background</h3>
                <p className="text-gray-300 leading-relaxed">
                  A passionate technologist with expertise in building secure and scalable digital solutions. 
                  I combine technical knowledge with creative problem-solving to deliver exceptional results.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="mr-2 text-blue-400" size={24} />
                Skills & Technologies
              </h3>
              <div className="space-y-6">
                {Object.entries(skillCategories).map(([category, skills]) => (
                  <div 
                    key={category} 
                    className="card backdrop-blur-sm bg-slate-800/30 p-6"
                  >
                    <h4 className="text-lg font-semibold text-blue-400 mb-4">{category}</h4>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-4 py-2 rounded-full text-sm font-medium text-blue-300 bg-slate-700/50 hover:bg-slate-600/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col items-start">
              <h2 className="section-title">Resume</h2>
              <Link 
                to="/resume" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors text-white mt-6"
              >
                <FileText className="mr-2" size={20} />
                View Full Resume
              </Link>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="mr-2 text-blue-400" size={24} />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div 
                    key={cert.name} 
                    className="card backdrop-blur-sm bg-slate-800/30 p-6 hover:border-blue-500/50 transition-all"
                  >
                    <h4 className="font-bold text-blue-300">{cert.name}</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
