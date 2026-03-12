import React, { useRef, useEffect } from "react";
import { Header } from '../components/Header.jsx'
import { useNavigate } from "react-router-dom";
import {  
  Zap, 
  Video, 
  MessageSquare, 
  BarChart3, 
  ShieldCheck, 
  Globe,
  Linkedin } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import '../styles/Landing.css';
import blackHole2 from '../assets/videoplayback.webm';
import logo from '../assets/logo1.png';
import Candidate from '../assets/candidate.png';

export const Landing = () => {

  const navigate = useNavigate(); 
  return (
    <div>
      <Header />

      <section className="hero">
        <div className="video-background">
        <video
          autoPlay
          muted
          loop
        >
          <source src={blackHole2} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        </div>

        <div className="hero-contents">
          <div className="hero-cover">
            <h1 className="hero-title">Revolutionize Your Interview Process</h1>
            <p className="hero-subtitle">Automated interview minutes for guided interviewing </p>
            <button className="btn-primary hero-btn" onClick={()=> navigate('/register')}>Get Started</button>
          </div>
          <div className="hero-display">
            <div className="hero-dash">
              <div className="hero-dash-top">
                <div className="hero-dash-top-logo"><img src={logo} alt="logo"></img></div>
                <div className="hero-dash-top-window"><p>AI-Powered Interview Coach Live</p></div>
                <div className="hero-dash-top-cells">
                  <div className="hero-dash-top-cell1"></div>
                  <div className="hero-dash-top-cell2"></div>
                  <div className="hero-dash-top-cell3"></div>
                </div>
              </div>
              <div className="hero-dash-main">
                <div className="hero-dash-main-left"></div>
                <div className="hero-dash-main-right">
                  <div className="hero-dash-main-right-top">
                    <img src={Candidate} alt="candidate"></img>
                  </div>
                  <div className="hero-dash-main-right-bottom">
                    <p>Camera Presence:</p>
                    <p className="bar-value">Confident</p>
                    <p>Communication Skills:</p>
                    <p className="bar-value">Fluent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </section> 

      <section className="features">
        <div className="section-content">
          <h2 className="section-title">Why Choose AI Interview Coach?</h2>
          <div className="features-grid" id="features-grid">
            <div className="feature-card">
              <Zap className="feature-icon" />
              <h3>Real-Time Analysis</h3>
              <p>Get instant feedback on your performance, technical accuracy, and pace while you speak.</p>
            </div>
            <div className="feature-card">
              <Video className="feature-icon" />
              <h3>Live Monitoring</h3>
              <p>Advanced AI tracks your camera presence and confidence levels to ensure a professional impression.</p>
            </div>
            <div className="feature-card">
              <MessageSquare className="feature-icon" />
              <h3>Answer Analysis</h3>
              <p>Detailed assessment of your communication skills and vocabulary usage in real-time.</p>
            </div>
            <div className="feature-card">
              <BarChart3 className="feature-icon" />
              <h3>Resume JD Scoring</h3>
              <p>Receive detailed resume scores and summaries to check your eligibility for different positions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="section-content footer-content">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src={logo} alt="logo" className="footer-logo" />
              <p className="footer-tagline">Revolutionizing the way you prepare for your future.</p>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">
                  <SiGithub size={24} color="black" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
                  <Linkedin size={24} color='blue' />
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li onClick={() => navigate('/dashboard')}>Dashboard</li>
                <li onClick={() => navigate('/about')}>About Us</li>
                <li onClick={() => navigate('/contact')}>Contact Us</li>
              </ul>
            </div>

            <div className="footer-info">
              <h4>Project Info</h4>
              <p><strong>Internship Project:</strong> Infosys Springboard</p>
              <p><strong>Open Source:</strong> MIT License</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} AI Powered Interview Coach. Deepak Kumar Soni.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


