import React, { useRef, useEffect } from "react";
import { Header } from '../components/Header.jsx'
import { useNavigate } from "react-router-dom";
import { 
  Eye, 
  CheckCircle, 
  Cpu, 
  Mic, 
  BarChart, 
  PieChart, 
  TrendingUp, 
  Github, 
  Twitter, 
  Linkedin 
} from 'lucide-react'
import '../styles/Landing.css'
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
    </div>
  )
}


