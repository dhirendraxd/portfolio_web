import { ChevronLeft, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-20">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center text-gray-300 hover:text-blue-400 transition-colors mb-8"
        >
          <ChevronLeft className="mr-2" size={20} />
          Back to Portfolio
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-white">Resume</h1>
            <div className="flex gap-4">
              <button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="inline-flex items-center px-4 py-2 rounded-lg glass hover:text-blue-400"
              >
                <FileText className="mr-2" size={20} />
                View Full CV
              </button>
              <a
                href="/resume.pdf"
                className="inline-flex items-center px-4 py-2 rounded-lg glass hover:text-blue-400"
                download="Dhirendra_Singh_Dhami_Resume.pdf"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </a>
            </div>
          </div>

          <div className="space-y-8">
            {/* Resume Content */}
            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Summary</h2>
              <p className="text-gray-300 leading-relaxed">
                Passionate about  Cybersecurity, and Web Developemnt , with experience in hackathons, community engagement, and technical leadership. Adept at problem-solving, collaboration, and building user-centered solutions.
              </p>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Campus Representative - AWS Cloud Club Nepal</h3>
                  <p className="text-gray-400 mb-2">April 2025 - Present</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Represented AWS Cloud Club Nepal in academic and tech communities</li>
                    <li>Organized and promoted cloud-related events and workshops</li>
                    <li>Engaged in AWS Skill Builder and certification journey (Cloud Practitioner)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Volunteer - Nepal International Film Festival (NIFF)</h3>
                  <p className="text-gray-400 mb-2">March 2025</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Managed hospitality and guest coordination for an international audience</li>
                    <li>Strengthened communication and event handling skills</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Participant - PublicBodies Datathon 2025</h3>
                  <p className="text-gray-400 mb-2">January 2025</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Explored and validated public sector datasets to promote transparency</li>
                    <li>Collaborated with a team to solve civic tech challenges using data</li>
                  </ul>
                </div>

              </div>
            </section>
            <section className="card">
  <h2 className="text-2xl font-bold mb-4 text-blue-300">Technical Skills</h2>
  <ul className="list-disc list-inside text-gray-300 space-y-2">
    <li>Languages: Python, Java, JavaScript, HTML5, CSS3</li>
    <li>Tools: GitHub, VS Code, Adobe Photoshop, Lightroom</li>
    <li>Cloud & DevOps: AWS (Cloud Practitioner in progress), Vercel</li>
    <li>Marketing: SEO, Content Marketing, Email Marketing, Google Analytics</li>
  </ul>
</section>

            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Education & Certifications</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Bachelor's in Information Management</h3>
                  <p className="text-gray-400">KIST College & SS • 2023 - Present</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Certifications</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Google Cybersecurity Professional Certificate</li>
                    <li>Google Digital Marketing & E-Commerce Professional Certificate</li>
                    <li>Google UI/UX Design Professional Certificate</li>
                    <li>NFRS for SMEs - Mero Job</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Resume;
