import React, { useState } from 'react';
import { playClickSound, playHoverSound } from '../utils/sounds';

const VoiceNavigation = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const handleVoiceCommand = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice navigation is not supported in this browser. Please use Chrome or Edge.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      playHoverSound();
      setTranscript('Listening...');
    };

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript.toLowerCase();
      setTranscript(`"${speechToText}"`);
      playClickSound();

      // Process commands
      if (speechToText.includes('projects') || speechToText.includes('work')) {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      } else if (speechToText.includes('about') || speechToText.includes('who are you')) {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      } else if (speechToText.includes('contact') || speechToText.includes('hire')) {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      } else if (speechToText.includes('skills')) {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      } else if (speechToText.includes('home') || speechToText.includes('top')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (speechToText.includes('resume')) {
        const resumeBtn = document.querySelector('.nav-actions .btn-primary');
        if (resumeBtn) resumeBtn.click();
      } else {
        setTimeout(() => setTranscript('Command not recognized.'), 1000);
      }
      
      setTimeout(() => setTranscript(''), 3000);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
      setTranscript('');
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="voice-nav-container">
      {transcript && <div className="voice-transcript">{transcript}</div>}
      <button 
        className={`voice-btn ${isListening ? 'listening' : ''}`} 
        onClick={handleVoiceCommand}
        title="Voice Navigation (Try saying 'Projects' or 'Resume')"
        aria-label="Activate voice control"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      </button>
    </div>
  );
};

export default VoiceNavigation;
