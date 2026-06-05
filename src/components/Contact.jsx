import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        setShowSuccess(true);
        form.reset();
      } else {
        alert('Something went wrong. Please try again or email directly.');
      }
    })
    .catch(() => {
      alert('Network error. Please try again or email directly.');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    });
  };

  return (
    <section id="contact" className="contact section">
      <div className="section-header">
        <span className="section-num">04</span>
        <h2 className="section-title">GET IN TOUCH</h2>
        <div className="section-line"></div>
      </div>

      <div className="contact-grid">
        <div className="contact-info reveal">
          <h3 className="contact-heading">Let's build something <span className="accent">extraordinary</span>.</h3>
          <p className="contact-sub">
            Whether you have a project in mind, want to collaborate, or just want to talk tech —
            I'm always open. Drop a message and I'll respond within 24 hours.
          </p>
          <div className="contact-links">
            <a href="mailto:anurupchowdhury05@gmail.com" className="contact-link" id="contact-email">
              <div className="contact-link-icon">✉️</div>
              <div>
                <div className="contact-link-label">EMAIL</div>
                <div className="contact-link-val">anurupchowdhury05@gmail.com</div>
              </div>
            </a>
            <a href="https://github.com/AnurupChowdhury05" target="_blank" rel="noreferrer" className="contact-link" id="contact-github">
              <div className="contact-link-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{width: '20px', height: '20px'}}><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </div>
              <div>
                <div className="contact-link-label">GITHUB</div>
                <div className="contact-link-val">github.com/AnurupChowdhury05</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/anurup-chowdhury-402852279/" target="_blank" rel="noreferrer" className="contact-link" id="contact-linkedin">
              <div className="contact-link-icon">💼</div>
              <div>
                <div className="contact-link-label">LINKEDIN</div>
                <div className="contact-link-val">linkedin.com/in/anurup-chowdhury</div>
              </div>
            </a>
          </div>
        </div>

        <form className="contact-form glass-card reveal" id="contact-form" action="https://formsubmit.co/anurupchowdhury05@gmail.com" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New Portfolio Message!" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" style={{display: 'none'}} />
          <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} id="form-next-url" />

          <div className="form-group">
            <label htmlFor="cf-name" className="form-label">YOUR NAME</label>
            <input type="text" id="cf-name" name="name" className="form-input" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="cf-email" className="form-label">EMAIL ADDRESS</label>
            <input type="email" id="cf-email" name="email" className="form-input" placeholder="you@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="cf-subject" className="form-label">SUBJECT</label>
            <input type="text" id="cf-subject" name="_subject" className="form-input" placeholder="Project Collaboration" />
          </div>
          <div className="form-group">
            <label htmlFor="cf-message" className="form-label">MESSAGE</label>
            <textarea id="cf-message" name="message" className="form-input form-textarea" placeholder="Tell me about your project..." rows="5" required></textarea>
          </div>
          <button 
            type="submit" 
            className="btn btn-primary full-width" 
            id="form-submit-btn"
            disabled={isSubmitting}
            style={{ opacity: isSubmitting ? 0.7 : 1, pointerEvents: isSubmitting ? 'none' : 'auto' }}
          >
            <span className="btn-glow"></span>
            <span className="btn-text">{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
          </button>
          <div id="form-success" className={`form-success ${showSuccess ? '' : 'hidden'}`}>
            <span>✅ Message sent! I'll respond within 24h.</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
