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
                download="My_Resume.pdf"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </a>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Resume Content */}
            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Professional Summary</h2>
              <p className="text-gray-300 leading-relaxed">
                Experienced technologist with a proven track record in designing and implementing 
                innovative solutions. Specialized in creating secure, scalable applications and 
                leading technical initiatives that drive business growth.
              </p>
            </section>
            
            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Senior Technical Lead</h3>
                  <p className="text-gray-400 mb-2">Company Name • 2020 - Present</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Led development of enterprise-scale applications</li>
                    <li>Architected cloud-native solutions</li>
                    <li>Mentored junior developers and established best practices</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Technical Architect</h3>
                  <p className="text-gray-400 mb-2">Previous Company • 2018 - 2020</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Designed and implemented scalable system architectures</li>
                    <li>Led technical strategy for major projects</li>
                    <li>Improved system security and performance</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Education & Certifications</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Bachelor's in Information Management</h3>
                  <p className="text-gray-400">KIST College & SS • 2027</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Certifications</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Google Cybersecurity Professional Certificate </li>
                    <li>Google Digital Marketing & E-Commerce Professional Certificate </li>
                    {/* <li>Enterprise Security Specialist</li> */}
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
