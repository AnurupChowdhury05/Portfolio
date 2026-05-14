import React from 'react';

const AllProjectsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Placeholder array. You can easily add more projects here later!
  const allProjects = [
    {
      id: 1,
      title: "F.R.I.D.A.Y. AI Assistant",
      desc: "Iron Man-inspired agentic AI assistant with LangGraph multi-agent orchestration, real-time SSE streaming, and a cinematic HUD interface.",
      image: "projects/friday-assistant.png",
      github: "https://github.com/AnurupChowdhury05"
    },
    {
      id: 2,
      title: "AI Workflow Builder",
      desc: "Enterprise-grade visual AI orchestration platform with DAG-based execution engine and AI Copilot.",
      image: "projects/workflow-builder.png",
      github: "https://github.com/AnurupChowdhury05"
    },
    {
      id: 3,
      title: "AI Interview Simulator",
      desc: "FAANG-level AI interview platform with system design whiteboard, AST-based code profiling, and resume RAG.",
      image: "projects/interview-simulator.png",
      github: "https://github.com/AnurupChowdhury05"
    },
    {
      id: 4,
      title: "Sign Language Translator",
      desc: "Real-time sign language recognition system using computer vision and deep learning.",
      image: "projects/sign-language.png",
      github: "https://github.com/AnurupChowdhury05"
    },
    {
      id: 5,
      title: "Fingerprint Voting System",
      desc: "Secure biometric voting platform with fingerprint authentication and tamper-proof ballot submission.",
      image: "projects/fingerprint-voting.png",
      github: "https://github.com/AnurupChowdhury05"
    }
  ];

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 99990 }}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '1200px', width: '95%' }}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="resume-header">
          <h2>ALL_PROJECTS_DATABASE</h2>
        </div>
        <div className="all-projects-grid">
          {allProjects.map(project => (
            <div key={project.id} className="all-project-card">
              <div className="all-project-img-container">
                <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} className="all-project-img" />
              </div>
              <div className="all-project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '8px 15px', fontSize: '0.8rem', marginTop: '15px' }}>
                  <span className="btn-glow"></span>
                  <span className="btn-text">VIEW GITHUB</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor" style={{ width: '15px', height: '15px' }}><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjectsModal;
