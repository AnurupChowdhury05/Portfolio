import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const panelRef = useRef(null);

  useEffect(() => {
    // When tab changes, re-trigger the animation for skill bars in the active panel
    if (panelRef.current) {
      const activePanel = panelRef.current.querySelector('.skills-panel.active');
      if (activePanel) {
        const bars = activePanel.querySelectorAll('.skill-bar.active .skill-fill, .skill-bar .skill-fill');
        bars.forEach(fill => {
          const level = fill.closest('.skill-bar').getAttribute('data-level');
          fill.style.width = level + '%';
        });
      }
    }
  }, [activeTab]);

  return (
    <section id="skills" className="skills section">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">TECH STACK</h2>
        <div className="section-line"></div>
      </div>

      <div className="skills-tabs">
        <button 
          className={`skill-tab ${activeTab === 'frontend' ? 'active' : ''}`} 
          onClick={() => setActiveTab('frontend')}
        >
          FRONTEND
        </button>
        <button 
          className={`skill-tab ${activeTab === 'backend' ? 'active' : ''}`} 
          onClick={() => setActiveTab('backend')}
        >
          BACKEND
        </button>
        <button 
          className={`skill-tab ${activeTab === 'ai' ? 'active' : ''}`} 
          onClick={() => setActiveTab('ai')}
        >
          AI / ML
        </button>
        <button 
          className={`skill-tab ${activeTab === 'devops' ? 'active' : ''}`} 
          onClick={() => setActiveTab('devops')}
        >
          DEVOPS
        </button>
      </div>

      <div className="skills-panels" ref={panelRef}>
        <div className={`skills-panel ${activeTab === 'frontend' ? 'active' : ''}`} id="panel-frontend">
          <div className="skill-bars">
            <div className="skill-bar reveal" data-skill="React / Next.js" data-level="95">
              <div className="skill-info"><span>React / Next.js</span><span className="skill-pct">95%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{'--level': '95%'}}></div></div>
            </div>
            <div className="skill-bar reveal" data-skill="TypeScript" data-level="90">
              <div className="skill-info"><span>TypeScript</span><span className="skill-pct">90%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{'--level': '90%'}}></div></div>
            </div>
            <div className="skill-bar reveal" data-skill="Three.js / WebGL" data-level="78">
              <div className="skill-info"><span>Three.js / WebGL</span><span className="skill-pct">78%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{'--level': '78%'}}></div></div>
            </div>
            <div className="skill-bar reveal" data-skill="CSS / Animations" data-level="92">
              <div className="skill-info"><span>CSS / Animations</span><span className="skill-pct">92%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{'--level': '92%'}}></div></div>
            </div>
          </div>
          <div className="tech-icons">
            <div className="tech-icon" title="React"><span>⚛️</span><small>React</small></div>
            <div className="tech-icon" title="Next.js"><span>▲</span><small>Next</small></div>
            <div className="tech-icon" title="TypeScript"><span>TS</span><small>TypeScript</small></div>
            <div className="tech-icon" title="Vue"><span>🟩</span><small>Vue</small></div>
            <div className="tech-icon" title="Sass"><span>💅</span><small>Sass</small></div>
            <div className="tech-icon" title="Framer"><span>🔷</span><small>Framer</small></div>
          </div>
        </div>

        <div className={`skills-panel ${activeTab === 'backend' ? 'active' : ''}`} id="panel-backend">
          <div className="skill-bars">
            <div className="skill-bar reveal" data-skill="Node.js / Express" data-level="93">
              <div className="skill-info"><span>Node.js / Express</span><span className="skill-pct">93%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{'--level': '93%'}}></div></div>
            </div>
            <div className="skill-bar reveal" data-skill="Python / FastAPI" data-level="88">
              <div className="skill-info"><span>Python / FastAPI</span><span className="skill-pct">88%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{'--level': '88%'}}></div></div>
            </div>
            <div className="skill-bar reveal" data-skill="PostgreSQL / Redis" data-level="85">
              <div className="skill-info"><span>PostgreSQL / Redis</span><span className="skill-pct">85%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{'--level': '85%'}}></div></div>
            </div>
            <div className="skill-bar reveal" data-skill="GraphQL / REST" data-level="90">
              <div className="skill-info"><span>GraphQL / REST</span><span className="skill-pct">90%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{'--level': '90%'}}></div></div>
            </div>
          </div>
          <div className="tech-icons">
            <div className="tech-icon" title="Node"><span>🟢</span><small>Node</small></div>
            <div className="tech-icon" title="Python"><span>🐍</span><small>Python</small></div>
            <div className="tech-icon" title="Postgres"><span>🐘</span><small>Postgres</small></div>
            <div className="tech-icon" title="Redis"><span>🔴</span><small>Redis</small></div>
            <div className="tech-icon" title="GraphQL"><span>◈</span><small>GraphQL</small></div>
            <div className="tech-icon" title="Rust"><span>🦀</span><small>Rust</small></div>
          </div>
        </div>

        <div className={`skills-panel ${activeTab === 'ai' ? 'active' : ''}`} id="panel-ai">
          <div className="skill-bars">
            <div className="skill-bar reveal" data-skill="LLM Integration (Gemini/GPT)" data-level="91">
              <div className="skill-info"><span>LLM Integration</span><span className="skill-pct">91%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{'--level': '91%'}}></div></div>
            </div>
            <div className="skill-bar reveal" data-skill="PyTorch / TensorFlow" data-level="80">
              <div className="skill-info"><span>PyTorch / TensorFlow</span><span className="skill-pct">80%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{'--level': '80%'}}></div></div>
            </div>
            <div className="skill-bar reveal" data-skill="Vector DBs / RAG" data-level="86">
              <div className="skill-info"><span>Vector DBs / RAG</span><span className="skill-pct">86%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{'--level': '86%'}}></div></div>
            </div>
            <div className="skill-bar reveal" data-skill="Agents & Pipelines" data-level="88">
              <div className="skill-info"><span>Agents & Pipelines</span><span className="skill-pct">88%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{'--level': '88%'}}></div></div>
            </div>
          </div>
          <div className="tech-icons">
            <div className="tech-icon" title="OpenAI"><span>🤖</span><small>GPT-4</small></div>
            <div className="tech-icon" title="Gemini"><span>✨</span><small>Gemini</small></div>
            <div className="tech-icon" title="PyTorch"><span>🔥</span><small>PyTorch</small></div>
            <div className="tech-icon" title="LangChain"><span>⛓️</span><small>LangChain</small></div>
            <div className="tech-icon" title="Pinecone"><span>🌲</span><small>Pinecone</small></div>
            <div className="tech-icon" title="Hugging Face"><span>🤗</span><small>HF</small></div>
          </div>
        </div>

        <div className={`skills-panel ${activeTab === 'devops' ? 'active' : ''}`} id="panel-devops">
          <div className="skill-bars">
            <div className="skill-bar reveal" data-skill="Docker / Kubernetes" data-level="87">
              <div className="skill-info"><span>Docker / Kubernetes</span><span className="skill-pct">87%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{'--level': '87%'}}></div></div>
            </div>
            <div className="skill-bar reveal" data-skill="GCP / AWS" data-level="84">
              <div className="skill-info"><span>GCP / AWS</span><span className="skill-pct">84%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{'--level': '84%'}}></div></div>
            </div>
            <div className="skill-bar reveal" data-skill="CI/CD Pipelines" data-level="90">
              <div className="skill-info"><span>CI/CD Pipelines</span><span className="skill-pct">90%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{'--level': '90%'}}></div></div>
            </div>
            <div className="skill-bar reveal" data-skill="Terraform / IaC" data-level="76">
              <div className="skill-info"><span>Terraform / IaC</span><span className="skill-pct">76%</span></div>
              <div className="skill-track"><div className="skill-fill" style={{'--level': '76%'}}></div></div>
            </div>
          </div>
          <div className="tech-icons">
            <div className="tech-icon" title="Docker"><span>🐳</span><small>Docker</small></div>
            <div className="tech-icon" title="K8s"><span>☸️</span><small>K8s</small></div>
            <div className="tech-icon" title="GCP"><span>☁️</span><small>GCP</small></div>
            <div className="tech-icon" title="GitHub Actions"><span>⚙️</span><small>Actions</small></div>
            <div className="tech-icon" title="Terraform"><span>🔩</span><small>Terraform</small></div>
            <div className="tech-icon" title="Linux"><span>🐧</span><small>Linux</small></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
