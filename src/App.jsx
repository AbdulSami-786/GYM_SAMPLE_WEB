import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import './App.css';

// Fonts component for Google Fonts
const Fonts = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
  </>
);

// Home Page Component
function HomePage() {
  const whatsappLink = "https://wa.me/15551234567?text=Hello%20I%20want%20to%20join%20your%20gym";
  const [videoPlaying, setVideoPlaying] = useState(false);
  const featuresRef = useRef(null);
  const classesRef = useRef(null);
  const ctaRef = useRef(null);

  const stats = [
    { number: "10+", label: "Trans" },
    { number: "50+", label: "Certified Trainers" },
    { number: "24/7", label: "Access" },
    { number: "5", label: "Locations" }
  ];

  const features = [
    { icon: "🏋️", title: "Modern Equipment", desc: "Latest Technogym equipment with smart technology integration" },
    { icon: "👨‍🏫", title: "Expert Trainers", desc: "Certified professionals with 10+ years average experience" },
    { icon: "⏰", title: "24/7 Access", desc: "Train anytime that fits your schedule" },
    { icon: "💪", title: "Proven Results", desc: "10,000+ successful member transformations" },
    { icon: "🏆", title: "Community", desc: "Supportive environment with group challenges" },
    { icon: "🔄", title: "Flexible Plans", desc: "No contracts, cancel anytime policy" }
  ];

  const classes = [
    { name: "HIIT Training", time: "45 mins", level: "Advanced", image: "https://images.pexels.com/photos/3768918/pexels-photo-3768918.jpeg" },
    { name: "Strength Training", time: "60 mins", level: "All Levels", image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg" },
    { name: "Yoga & Mobility", time: "60 mins", level: "Beginner", image: "https://images.pexels.com/photos/4662341/pexels-photo-4662341.jpeg" }
  ];

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const navigateWithHash = (path) => {
    const navigate = useNavigate();
    navigate(path);
  };

  return (
    <div className="home-page">
      {/* Hero Section with Classic Gym Picture */}
      <section className="hero-section">
        <div className="hero-image-container">
          <img 
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg" 
            alt="Classic Gym Interior with Equipment"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <span>🏆 PREMIUM FITNESS EXPERIENCE SINCE 2010</span>
          </div>
          <h1 className="hero-title">
            <span className="text-gradient">Transform Your Body</span>
            <br />
            <span className="text-gradient">Transform Your Life</span>
          </h1>
          <p className="hero-description">
            Join America's most elite fitness community. State-of-the-art equipment, 
            world-class trainers, and results-driven programs designed for your success. 
            Where determination meets transformation.
          </p>
          <div className="hero-buttons">
            <Link to="/free-trial" className="btn btn-primary">
              <i className="fas fa-calendar-check"></i> FREE 7-DAY TRIAL
            </Link>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <i className="fab fa-whatsapp"></i> JOIN NOW
            </a>
            <button onClick={() => scrollToSection(featuresRef)} className="btn btn-secondary">
              <i className="fas fa-arrow-down"></i> EXPLORE FEATURES
            </button>
          </div>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number animate-count" data-target={stat.number}>
                  {stat.number}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid with Glassmorphism */}
      <section className="features-section" ref={featuresRef} id="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose <span className="text-gradient">USA Elite Fitness</span></h2>
            <p className="section-subtitle">Experience the difference with our premium facilities and services</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card glassmorphism-card">
                <div className="feature-icon">
                  <span>{feature.icon}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <div className="feature-hover-effect"></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button onClick={() => scrollToSection(classesRef)} className="btn btn-outline">
              <i className="fas fa-dumbbell"></i> VIEW OUR CLASSES
            </button>
          </div>
        </div>
      </section>

      {/* Popular Classes Preview */}
      <section className="classes-preview" ref={classesRef} id="classes-preview">
        <div className="container">
          <div className="section-header">
            <h2>Popular <span className="text-gradient">Classes</span></h2>
            <p className="section-subtitle">Join our most sought-after fitness classes</p>
          </div>
          <div className="classes-grid">
            {classes.map((cls, index) => (
              <div key={index} className="class-card glassmorphism-card">
                <div className="class-image">
                  <img src={cls.image} alt={cls.name} />
                  <span className={`class-level ${cls.level.toLowerCase().replace(' ', '-')}`}>
                    {cls.level}
                  </span>
                </div>
                <div className="class-content">
                  <h3>{cls.name}</h3>
                  <div className="class-meta">
                    <span><i className="far fa-clock"></i> {cls.time}</span>
                    <span><i className="fas fa-fire"></i> High Intensity</span>
                  </div>
                  <Link to="/classes#class-schedule" className="btn btn-outline">
                    <i className="far fa-calendar-alt"></i> View Schedule
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/classes" className="btn btn-secondary">
              View All Classes <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" ref={ctaRef}>
        <div className="container">
          <div className="cta-content">
            <h2>Start Your Transformation <span className="text-gradient">Today</span></h2>
            <p>Get your first week free. No commitment required. Experience the USA Elite difference.</p>
            <div className="cta-buttons">
              <Link to="/membership#pricing" className="btn btn-primary btn-large">
                <i className="fas fa-crown"></i> VIEW MEMBERSHIP PLANS
              </Link>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-large">
                <i className="fab fa-whatsapp"></i> CHAT WITH US
              </a>
              <Link to="/trainers#trainer-profiles" className="btn btn-secondary btn-large">
                <i className="fas fa-users"></i> MEET OUR TRAINERS
              </Link>
            </div>
            <div className="cta-note">
              <p><i className="fas fa-shield-alt"></i> 100% Satisfaction Guarantee | <i className="fas fa-clock"></i> 24/7 Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// About Page Component
function AboutPage() {
  const team = [
    { name: "John Smith", role: "Founder & CEO", image: "https://randomuser.me/api/portraits/men/32.jpg", bio: "20+ years in fitness industry, former professional athlete" },
    { name: "Sarah Johnson", role: "Head Trainer", image: "https://randomuser.me/api/portraits/women/44.jpg", bio: "NASM Certified, 15 years experience, specializes in strength training" },
    { name: "Mike Davis", role: "Nutrition Director", image: "https://randomuser.me/api/portraits/men/22.jpg", bio: "Registered Dietitian with masters in Sports Nutrition" },
    { name: "Emma Wilson", role: "Yoga Director", image: "https://randomuser.me/api/portraits/women/22.jpg", bio: "RYT 500 Certified, 12 years teaching experience" }
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>About <span className="text-gradient">USA Elite Fitness</span></h1>
          <p>Redefining fitness excellence since 2010 with passion and dedication</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Journey to Excellence</h2>
              <p>
                Founded in 2010, USA Elite Fitness began with a simple but powerful mission: to create 
                a fitness experience that combines world-class facilities with expert guidance and a 
                supportive community that inspires growth.
              </p>
              <p>
                What started as a single location in New York City has grown into a premier fitness 
                destination with multiple locations nationwide, serving thousands of members who have 
                transformed their lives through our carefully crafted programs.
              </p>
              <div className="milestones">
                <div className="milestone glassmorphism-card">
                  <div className="year">2010</div>
                  <div className="event">First gym opens in NYC</div>
                </div>
                <div className="milestone glassmorphism-card">
                  <div className="year">2015</div>
                  <div className="event">Expanded to 3 locations</div>
                </div>
                <div className="milestone glassmorphism-card">
                  <div className="year">2020</div>
                  <div className="event">10th member joins</div>
                </div>
                <div className="milestone glassmorphism-card">
                  <div className="year">2024</div>
                  <div className="event">5 locations nationwide</div>
                </div>
              </div>
            </div>
            <div className="story-image glassmorphism-card">
              <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg" alt="Our Gym Facility" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our <span className="text-gradient">Leadership Team</span></h2>
            <p className="section-subtitle">The experts behind your success</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card glassmorphism-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core <span className="text-gradient">Values</span></h2>
            <p className="section-subtitle">The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-card glassmorphism-card">
              <div className="value-icon">💪</div>
              <h3>Excellence</h3>
              <p>Striving for the highest standards in everything we do, from equipment to coaching</p>
            </div>
            <div className="value-card glassmorphism-card">
              <div className="value-icon">❤️</div>
              <h3>Community</h3>
              <p>Building supportive relationships that inspire growth and accountability</p>
            </div>
            <div className="value-card glassmorphism-card">
              <div className="value-icon">🎯</div>
              <h3>Results</h3>
              <p>Focusing on delivering measurable, sustainable results for every member</p>
            </div>
            <div className="value-card glassmorphism-card">
              <div className="value-icon">🌟</div>
              <h3>Innovation</h3>
              <p>Continuously improving with cutting-edge approaches and technology</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Classes Page Component
function ClassesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSchedule, setActiveSchedule] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Classes', icon: 'fas fa-th' },
    { id: 'hiit', name: 'HIIT & Cardio', icon: 'fas fa-fire' },
    { id: 'strength', name: 'Strength', icon: 'fas fa-dumbbell' },
    { id: 'yoga', name: 'Yoga & Mobility', icon: 'fas fa-spa' },
    { id: 'boxing', name: 'Boxing', icon: 'fas fa-boxing-glove' },
    { id: 'specialty', name: 'Specialty', icon: 'fas fa-star' }
  ];

  const allClasses = [
    {
      id: 1,
      name: "HIIT Blast",
      category: "hiit",
      description: "High-intensity interval training for maximum fat burn and cardiovascular improvement",
      duration: "45 mins",
      level: "Advanced",
      instructor: "Alex Johnson",
      schedule: "Mon/Wed/Fri 6:00 AM & 6:00 PM",
      price: "$25",
      image: "https://images.pexels.com/photos/3768918/pexels-photo-3768918.jpeg",
      features: ["Fat Burning", "Cardio Boost", "Full Body", "High Intensity"],
      intensity: "High"
    },
    {
      id: 2,
      name: "Strength Training Pro",
      category: "strength",
      description: "Build muscle mass and increase strength with progressive overload techniques",
      duration: "60 mins",
      level: "All Levels",
      instructor: "David Kim",
      schedule: "Tue/Thu/Sat 7:00 AM & 7:00 PM",
      price: "$30",
      image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg",
      features: ["Muscle Growth", "Strength", "Body Toning", "Power"],
      intensity: "Medium-High"
    },
    {
      id: 3,
      name: "Power Yoga Flow",
      category: "yoga",
      description: "Dynamic yoga sequences for strength, flexibility, and mindfulness",
      duration: "60 mins",
      level: "Intermediate",
      instructor: "Sarah Miller",
      schedule: "Daily 8:00 AM & 5:00 PM",
      price: "$20",
      image: "https://images.pexels.com/photos/4662341/pexels-photo-4662341.jpeg",
      features: ["Flexibility", "Strength", "Mindfulness", "Balance"],
      intensity: "Medium"
    },
    {
      id: 4,
      name: "Boxing Fitness",
      category: "boxing",
      description: "Learn boxing techniques combined with intense cardio workouts",
      duration: "50 mins",
      level: "Intermediate",
      instructor: "Mike Tyson",
      schedule: "Mon/Wed/Fri 5:00 PM & 7:00 PM",
      price: "$35",
      image: "https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg",
      features: ["Full Body", "Cardio", "Self Defense", "Coordination"],
      intensity: "High"
    },
    {
      id: 5,
      name: "Spin & Sculpt",
      category: "hiit",
      description: "Indoor cycling with strength intervals for ultimate calorie burn",
      duration: "45 mins",
      level: "All Levels",
      instructor: "Lisa Chang",
      schedule: "Tue/Thu 6:30 PM, Sat 9:00 AM",
      price: "$25",
      image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
      features: ["Cardio", "Leg Strength", "Endurance", "Fat Burn"],
      intensity: "Medium-High"
    },
    {
      id: 6,
      name: "Pilates Reformer",
      category: "yoga",
      description: "Core strengthening on reformer machines for posture and alignment",
      duration: "50 mins",
      level: "Beginner",
      instructor: "Emma Wilson",
      schedule: "Mon/Wed/Fri 10:00 AM & 4:00 PM",
      price: "$30",
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
      features: ["Core Strength", "Posture", "Flexibility", "Control"],
      intensity: "Low-Medium"
    }
  ];

  const filteredClasses = selectedCategory === 'all' 
    ? allClasses 
    : allClasses.filter(cls => cls.category === selectedCategory);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#class-schedule') {
      const element = document.getElementById('class-schedule');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, []);

  return (
    <div className="classes-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Our <span className="text-gradient">Classes</span></h1>
          <p>Find your perfect workout from our diverse selection of fitness classes</p>
          <div className="hero-actions">
            <a href="#class-schedule" className="btn btn-primary">
              <i className="far fa-calendar-alt"></i> View Weekly Schedule
            </a>
          </div>
        </div>
      </section>

      {/* Class Filter Section */}
      <section className="class-filter-section">
        <div className="container">
          <div className="section-header">
            <h2>Browse by <span className="text-gradient">Category</span></h2>
            <p className="section-subtitle">Filter classes based on your fitness preferences</p>
          </div>
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-tab glassmorphism-card ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <i className={cat.icon}></i>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Grid Section */}
      <section className="classes-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Available <span className="text-gradient">Classes</span></h2>
            <p className="section-subtitle">{filteredClasses.length} classes found in {selectedCategory === 'all' ? 'all categories' : categories.find(c => c.id === selectedCategory)?.name}</p>
          </div>
          <div className="classes-grid-detailed">
            {filteredClasses.map(cls => (
              <div key={cls.id} className="class-card-detailed glassmorphism-card">
                <div className="class-image-detailed">
                  <img src={cls.image} alt={cls.name} />
                  <div className="class-badges">
                    <span className="class-level">{cls.level}</span>
                    <span className="class-price">{cls.price}</span>
                    <span className="class-intensity">{cls.intensity}</span>
                  </div>
                </div>
                <div className="class-content-detailed">
                  <div className="class-header">
                    <h3>{cls.name}</h3>
                    <div className="class-meta">
                      <span><i className="far fa-clock"></i> {cls.duration}</span>
                      <span><i className="fas fa-user"></i> {cls.instructor}</span>
                      <span><i className="fas fa-calendar"></i> {cls.schedule.split(' ')[0]}</span>
                    </div>
                  </div>
                  <p className="class-description">{cls.description}</p>
                  <div className="class-features">
                    {cls.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <div className="class-schedule">
                    <i className="far fa-calendar-alt"></i>
                    <span>{cls.schedule}</span>
                  </div>
                  <div className="class-actions">
                    <button className="btn btn-primary">
                      <i className="far fa-calendar-check"></i> Book Now
                    </button>
                    <a href="#class-schedule" className="btn btn-outline">
                      <i className="fas fa-list"></i> Full Schedule
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section with ID for hash navigation */}
      <section className="schedule-section" id="class-schedule">
        <div className="container">
          <div className="section-header">
            <h2>Weekly <span className="text-gradient">Schedule</span></h2>
            <p className="section-subtitle">Plan your workouts with our comprehensive timetable</p>
          </div>
          
          <div className="schedule-filter">
            <div className="filter-options">
              {['all', 'morning', 'afternoon', 'evening'].map(time => (
                <button
                  key={time}
                  className={`time-filter ${activeSchedule === time ? 'active' : ''}`}
                  onClick={() => setActiveSchedule(time)}
                >
                  {time === 'all' && <><i className="fas fa-th"></i> All Times</>}
                  {time === 'morning' && <><i className="fas fa-sun"></i> Morning</>}
                  {time === 'afternoon' && <><i className="fas fa-cloud-sun"></i> Afternoon</>}
                  {time === 'evening' && <><i className="fas fa-moon"></i> Evening</>}
                </button>
              ))}
            </div>
          </div>

          <div className="schedule-table glassmorphism-card">
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { time: '6:00 AM', classes: ['HIIT Blast', 'Strength', 'HIIT Blast', 'Strength', 'HIIT Blast', 'Bootcamp', 'Yoga'] },
                  { time: '7:00 AM', classes: ['Yoga', 'Spin', 'Yoga', 'Spin', 'Yoga', 'Yoga', 'Meditation'] },
                  { time: '8:00 AM', classes: ['Pilates', 'Strength', 'Pilates', 'Strength', 'Pilates', 'HIIT', 'Open Gym'] },
                  { time: '9:00 AM', classes: ['Senior Fit', 'Yoga', 'Senior Fit', 'Yoga', 'Senior Fit', 'Zumba', 'Family Fit'] },
                  { time: '5:00 PM', classes: ['Boxing', 'Spin', 'Boxing', 'Spin', 'Boxing', '-', '-'] },
                  { time: '6:00 PM', classes: ['Strength', 'Boxing', 'Strength', 'Boxing', 'Strength', '-', '-'] },
                  { time: '7:00 PM', classes: ['Yoga', 'HIIT', 'Yoga', 'HIIT', 'Yoga', '-', '-'] }
                ].map((row, idx) => (
                  <tr key={idx} className={activeSchedule !== 'all' && !row.time.includes(activeSchedule === 'morning' ? 'AM' : activeSchedule === 'evening' ? 'PM' : '') ? 'hidden' : ''}>
                    <td className="time-cell">{row.time}</td>
                    {row.classes.map((cls, cIdx) => (
                      <td key={cIdx} className={cls === '-' ? 'empty' : ''}>
                        {cls !== '-' && (
                          <div className="schedule-class">
                            <span className="class-name">{cls}</span>
                            <span className="class-instructor">
                              {cls === 'HIIT Blast' ? 'Alex' : 
                               cls === 'Strength' ? 'David' : 
                               cls === 'Yoga' ? 'Sarah' : 
                               cls === 'Boxing' ? 'Mike' : 
                               cls === 'Spin' ? 'Lisa' : 
                               cls === 'Pilates' ? 'Emma' : 'Coach'}
                            </span>
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="schedule-notes">
            <div className="note glassmorphism-card">
              <i className="fas fa-info-circle"></i>
              <p>All classes are 60 minutes unless otherwise noted. Please arrive 10 minutes early.</p>
            </div>
            <div className="note glassmorphism-card">
              <i className="fas fa-dumbbell"></i>
              <p>Advanced booking recommended for popular classes. Members get priority booking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Class Booking CTA */}
      <section className="booking-cta">
        <div className="container">
          <div className="cta-content glassmorphism-card">
            <h2>Ready to <span className="text-gradient">Sweat</span>?</h2>
            <p>Book your first class today and experience the USA Elite difference</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">
                <i className="far fa-calendar-check"></i> Book Your First Class
              </button>
              <Link to="/membership#pricing" className="btn btn-secondary btn-large">
                <i className="fas fa-crown"></i> View Membership Options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Trainers Page Component
function TrainersPage() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [filterSpecialty, setFilterSpecialty] = useState('all');
  
  const specialties = [
    { id: 'all', name: 'All Specialties' },
    { id: 'strength', name: 'Strength Training' },
    { id: 'hiit', name: 'HIIT & Cardio' },
    { id: 'yoga', name: 'Yoga & Mobility' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'rehab', name: 'Rehabilitation' }
  ];

  const trainers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Head Strength Coach",
      experience: "12 years",
      specialty: ["strength", "hiit"],
      certifications: ["NASM CPT", "ACE Advanced", "CrossFit L3", "Precision Nutrition L1"],
      bio: "Former professional athlete with multiple certifications. Specializes in strength and conditioning, helping clients build functional strength and achieve peak performance.",
      image: "https://images.pexels.com/photos/2204536/pexels-photo-2204536.jpeg",
      schedule: "Mon-Fri: 6AM-8PM | Sat: 8AM-2PM",
      social: { instagram: "@alexjohnson", youtube: "AlexJohnsonFitness" },
      rating: 4.9,
      clients: 250
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "HIIT & Cardio Specialist",
      experience: "8 years",
      specialty: ["hiit"],
      certifications: ["ACE CPT", "ISSA Specialist", "Precision Nutrition", "TRX Certified"],
      bio: "Passionate about helping clients achieve their weight loss goals through effective HIIT programs and metabolic conditioning. Focuses on sustainable results.",
      image: "https://images.pexels.com/photos/4498238/pexels-photo-4498238.jpeg",
      schedule: "Mon-Sat: 7AM-9PM",
      social: { instagram: "@mariagarciafit", tiktok: "mariagarciafitness" },
      rating: 4.8,
      clients: 180
    },
    {
      id: 3,
      name: "David Kim",
      role: "Olympic Weightlifting Coach",
      experience: "10 years",
      specialty: ["strength", "rehab"],
      certifications: ["USAW Sports Performance", "NSCA CSCS", "FMS Level 1", "EXOS Performance"],
      bio: "Competitive weightlifter with national level experience. Focuses on proper technique, form, and movement patterns for optimal performance and injury prevention.",
      image: "https://images.pexels.com/photos/842567/pexels-photo-842567.jpeg",
      schedule: "Tue-Thu: 5AM-7PM, Sat: 8AM-12PM",
      social: { instagram: "@davidkimstrength" },
      rating: 4.9,
      clients: 120
    },
    {
      id: 4,
      name: "Sarah Miller",
      role: "Yoga & Wellness Director",
      experience: "6 years",
      specialty: ["yoga", "rehab"],
      certifications: ["RYT 500", "Yoga Therapy", "Mindfulness", "Meditation Teacher"],
      bio: "Believes in the power of mind-body connection. Specializes in therapeutic yoga practices, helping clients reduce stress, improve flexibility, and enhance mindfulness.",
      image: "https://images.pexels.com/photos/3765177/pexels-photo-3765177.jpeg",
      schedule: "Daily: 6AM-8PM",
      social: { instagram: "@sarahmilleryoga" },
      rating: 4.7,
      clients: 200
    },
    {
      id: 5,
      name: "Michael Chen",
      role: "Senior Fitness & Rehab Specialist",
      experience: "15 years",
      specialty: ["rehab", "strength"],
      certifications: ["ACE Senior Fitness", "NASM Corrective Exercise", "Physical Therapy Aide", "Post-Rehab Specialist"],
      bio: "Specializes in senior fitness and rehabilitation programs for all age groups. Focuses on functional movement, pain reduction, and improving quality of life.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      schedule: "Mon-Fri: 8AM-6PM",
      social: { instagram: "@michaelchenfit" },
      rating: 4.9,
      clients: 150
    },
    {
      id: 6,
      name: "Jessica Williams",
      role: "Nutrition & Wellness Coach",
      experience: "9 years",
      specialty: ["nutrition"],
      certifications: ["Registered Dietitian", "Precision Nutrition L2", "Wellness Coaching", "Sports Nutrition"],
      bio: "Registered dietitian with expertise in sports nutrition and weight management. Creates personalized nutrition plans that complement fitness goals.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      schedule: "Mon-Sat: 9AM-5PM",
      social: { instagram: "@jessicawellness" },
      rating: 4.8,
      clients: 220
    }
  ];

  const filteredTrainers = filterSpecialty === 'all' 
    ? trainers 
    : trainers.filter(trainer => trainer.specialty.includes(filterSpecialty));

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#trainer-profiles') {
      const element = document.getElementById('trainer-profiles');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, []);

  return (
    <div className="trainers-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Meet Our <span className="text-gradient">Expert Trainers</span></h1>
          <p>Learn from certified professionals dedicated to helping you achieve your fitness goals</p>
          <div className="hero-actions">
            <a href="#trainer-profiles" className="btn btn-primary">
              <i className="fas fa-users"></i> View All Trainers
            </a>
          </div>
        </div>
      </section>

      {/* Trainer Filter Section */}
      <section className="trainer-filter-section">
        <div className="container">
          <div className="section-header">
            <h2>Find Your <span className="text-gradient">Perfect Coach</span></h2>
            <p className="section-subtitle">Filter trainers by specialty to find the right match for your goals</p>
          </div>
          <div className="specialty-filter">
            {specialties.map(spec => (
              <button
                key={spec.id}
                className={`specialty-tab glassmorphism-card ${filterSpecialty === spec.id ? 'active' : ''}`}
                onClick={() => setFilterSpecialty(spec.id)}
              >
                {spec.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Grid Section with ID for hash navigation */}
      <section className="trainers-grid-section" id="trainer-profiles">
        <div className="container">
          <div className="section-header">
            <h2>Our <span className="text-gradient">Training Team</span></h2>
            <p className="section-subtitle">{filteredTrainers.length} trainers available in {filterSpecialty === 'all' ? 'all specialties' : specialties.find(s => s.id === filterSpecialty)?.name}</p>
          </div>
          <div className="trainers-grid">
            {filteredTrainers.map(trainer => (
              <div 
                key={trainer.id} 
                className="trainer-card glassmorphism-card"
                onClick={() => setSelectedTrainer(trainer)}
              >
                <div className="trainer-image">
                  <img src={trainer.image} alt={trainer.name} />
                  <div className="trainer-experience">
                    <i className="fas fa-medal"></i> {trainer.experience}
                  </div>
                  <div className="trainer-rating">
                    <i className="fas fa-star"></i> {trainer.rating} ({trainer.clients}+ clients)
                  </div>
                </div>
                <div className="trainer-info">
                  <h3>{trainer.name}</h3>
                  <p className="trainer-role">{trainer.role}</p>
                  <div className="trainer-specialties">
                    {trainer.specialty.map((spec, idx) => (
                      <span key={idx} className="specialty-tag">
                        {spec === 'strength' && '💪 Strength'}
                        {spec === 'hiit' && '🔥 HIIT'}
                        {spec === 'yoga' && '🧘 Yoga'}
                        {spec === 'nutrition' && '🥗 Nutrition'}
                        {spec === 'rehab' && '🏥 Rehab'}
                      </span>
                    ))}
                  </div>
                  <p className="trainer-bio-short">{trainer.bio.substring(0, 100)}...</p>
                  <div className="trainer-actions">
                    <button className="btn btn-outline btn-small" onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTrainer(trainer);
                    }}>
                      <i className="fas fa-user-circle"></i> View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Modal */}
      {selectedTrainer && (
        <div className="trainer-modal" onClick={() => setSelectedTrainer(null)}>
          <div className="modal-content glassmorphism-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedTrainer(null)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedTrainer.image} alt={selectedTrainer.name} />
                <div className="modal-stats">
                  <div className="stat">
                    <i className="fas fa-medal"></i>
                    <span>{selectedTrainer.experience} Experience</span>
                  </div>
                  <div className="stat">
                    <i className="fas fa-star"></i>
                    <span>{selectedTrainer.rating} Rating</span>
                  </div>
                  <div className="stat">
                    <i className="fas fa-users"></i>
                    <span>{selectedTrainer.clients}+ Clients</span>
                  </div>
                </div>
              </div>
              <div className="modal-info">
                <h2>{selectedTrainer.name}</h2>
                <p className="modal-role">{selectedTrainer.role}</p>
                <p className="modal-bio">{selectedTrainer.bio}</p>
                
                <div className="modal-specialties">
                  <h4><i className="fas fa-bullseye"></i> Specialties</h4>
                  <div className="specialties-list">
                    {selectedTrainer.specialty.map((spec, idx) => (
                      <span key={idx} className="specialty-tag-large">
                        {spec === 'strength' && '💪 Strength Training'}
                        {spec === 'hiit' && '🔥 HIIT & Cardio'}
                        {spec === 'yoga' && '🧘 Yoga & Mobility'}
                        {spec === 'nutrition' && '🥗 Nutrition Coaching'}
                        {spec === 'rehab' && '🏥 Rehabilitation'}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-certifications">
                  <h4><i className="fas fa-certificate"></i> Certifications</h4>
                  <div className="certs-list">
                    {selectedTrainer.certifications.map((cert, idx) => (
                      <span key={idx} className="cert-tag">{cert}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-schedule">
                  <h4><i className="far fa-calendar-alt"></i> Availability</h4>
                  <p>{selectedTrainer.schedule}</p>
                </div>
                
                <div className="modal-actions">
                  <button className="btn btn-primary">
                    <i className="far fa-calendar-check"></i> Book Session
                  </button>
                  <div className="social-links">
                    {Object.entries(selectedTrainer.social).map(([platform, handle]) => (
                      <a key={platform} href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                        <i className={`fab fa-${platform}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Training CTA */}
      <section className="trainers-cta">
        <div className="container">
          <div className="cta-content glassmorphism-card">
            <h2>Personal <span className="text-gradient">Training</span> Available</h2>
            <p>Get one-on-one coaching from our expert trainers. Personalized programs for your specific goals.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">
                <i className="fas fa-dumbbell"></i> BOOK PERSONAL TRAINING
              </button>
              <Link to="/contact#contact-form" className="btn btn-secondary btn-large">
                <i className="fas fa-question-circle"></i> ASK QUESTIONS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Membership Page Component
function MembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const plans = [
    {
      id: 'basic',
      name: 'BASIC',
      price: { monthly: '$49', annual: '$528' },
      period: { monthly: 'per month', annual: 'per year' },
      savings: { annual: 'Save $60' },
      features: [
        'Access to cardio area',
        'Locker room access',
        'Free fitness assessment',
        'Basic equipment usage',
        'Wi-Fi access',
        'Open gym hours',
        '1 guest pass per month'
      ],
      buttonText: 'GET STARTED',
      popular: false,
      icon: 'fas fa-dumbbell'
    },
    {
      id: 'pro',
      name: 'PRO',
      price: { monthly: '$79', annual: '$828' },
      period: { monthly: 'per month', annual: 'per year' },
      savings: { annual: 'Save $120' },
      features: [
        'All Basic features',
        'All group classes included',
        '24/7 gym access',
        'Guest passes (2/month)',
        'Sauna & steam room',
        'Towel service',
        'Priority booking',
        'Monthly body composition'
      ],
      buttonText: 'MOST POPULAR',
      popular: true,
      icon: 'fas fa-crown'
    },
    {
      id: 'elite',
      name: 'ELITE',
      price: { monthly: '$129', annual: '$1,368' },
      period: { monthly: 'per month', annual: 'per year' },
      savings: { annual: 'Save $180' },
      features: [
        'All Pro features',
        '4 Personal training sessions',
        'Custom nutrition plan',
        'Guest passes (4/month)',
        'Recovery area access',
        'Priority class booking',
        'Nutrition coaching',
        'Progress tracking',
        'Advanced equipment access'
      ],
      buttonText: 'GO ELITE',
      popular: false,
      icon: 'fas fa-trophy'
    }
  ];

  const faqs = [
    { 
      question: 'Can I cancel my membership anytime?', 
      answer: 'Yes, all plans are month-to-month with no cancellation fees. You can cancel anytime with 30 days notice.' 
    },
    { 
      question: 'Is there a free trial available?', 
      answer: 'Yes, we offer a 7-day free trial for all new members. No credit card required for the trial period.' 
    },
    { 
      question: 'Are all classes included in my membership?', 
      answer: 'All group classes are included in Pro and Elite plans. Basic members can purchase classes individually.' 
    },
    { 
      question: 'Can I freeze my membership?', 
      answer: 'Yes, you can freeze your membership for up to 3 months per year for medical or travel reasons.' 
    },
    { 
      question: 'Do you offer student or military discounts?', 
      answer: 'Yes, we offer 15% discount for students with valid ID and 20% discount for active military personnel.' 
    },
    { 
      question: 'Is there an initiation or enrollment fee?', 
      answer: 'No initiation fees for any of our plans. What you see is what you pay, no hidden costs.' 
    }
  ];

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#pricing') {
      const element = document.getElementById('pricing');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, []);

  return (
    <div className="membership-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Membership <span className="text-gradient">Plans</span></h1>
          <p>Simple, transparent pricing with no hidden fees. Choose what works for you.</p>
          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary">
              <i className="fas fa-crown"></i> View Pricing Plans
            </a>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="billing-toggle-section">
        <div className="container">
          <div className="billing-toggle glassmorphism-card">
            <span className={`toggle-option ${billingCycle === 'monthly' ? 'active' : ''}`}>
              Monthly Billing
            </span>
            <div className="toggle-switch" onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}>
              <div className={`toggle-handle ${billingCycle === 'annual' ? 'annual' : ''}`}></div>
            </div>
            <span className={`toggle-option ${billingCycle === 'annual' ? 'active' : ''}`}>
              Annual Billing <span className="savings-badge">Save up to 15%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Plans with ID for hash navigation */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your <span className="text-gradient">Plan</span></h2>
            <p className="section-subtitle">Select the perfect membership for your fitness journey</p>
          </div>
          <div className="pricing-grid">
            {plans.map(plan => (
              <div 
                key={plan.id} 
                className={`pricing-card glassmorphism-card ${plan.popular ? 'popular' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    MOST POPULAR
                  </div>
                )}
                <div className="pricing-header">
                  <div className="plan-icon">
                    <i className={plan.icon}></i>
                  </div>
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="amount">{plan.price[billingCycle]}</span>
                    <span className="period">/{plan.period[billingCycle]}</span>
                  </div>
                  {billingCycle === 'annual' && plan.savings.annual && (
                    <div className="savings">
                      <i className="fas fa-piggy-bank"></i> {plan.savings.annual}
                    </div>
                  )}
                </div>
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i> {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary btn-block">
                  {plan.buttonText} <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            ))}
          </div>
          
          <div className="pricing-note glassmorphism-card">
            <i className="fas fa-info-circle"></i>
            <p>All plans include a 7-day free trial. No credit card required. Month-to-month flexibility with no long-term contracts.</p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-header">
            <h2>Plan <span className="text-gradient">Comparison</span></h2>
            <p className="section-subtitle">See how our plans stack up against each other</p>
          </div>
          <div className="comparison-table glassmorphism-card">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Basic</th>
                  <th>Pro</th>
                  <th>Elite</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['24/7 Access', '❌', '✅', '✅'],
                  ['All Group Classes', '❌', '✅', '✅'],
                  ['Personal Training', '❌', 'Add-on', '4 sessions'],
                  ['Guest Passes', '1/month', '2/month', '4/month'],
                  ['Nutrition Plan', '❌', '❌', '✅'],
                  ['Recovery Area', '❌', '✅', '✅'],
                  ['Towel Service', '❌', '✅', '✅'],
                  ['Priority Booking', '❌', '✅', '✅'],
                  ['Progress Tracking', '❌', 'Basic', 'Advanced'],
                  ['Equipment Access', 'Basic', 'Premium', 'All Access']
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked <span className="text-gradient">Questions</span></h2>
            <p className="section-subtitle">Get answers to common membership questions</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item glassmorphism-card">
                <div className="faq-question">
                  <h4><i className="far fa-question-circle"></i> {faq.question}</h4>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="membership-cta">
        <div className="container">
          <div className="cta-content glassmorphism-card">
            <h2>Ready to Start Your <span className="text-gradient">Journey</span>?</h2>
            <p>Get your free trial today and experience the USA Elite Fitness difference</p>
            <div className="cta-buttons">
              <Link to="/free-trial" className="btn btn-primary btn-large">
                <i className="fas fa-calendar-check"></i> GET 7-DAY FREE TRIAL
              </Link>
              <a href="tel:5551234567" className="btn btn-secondary btn-large">
                <i className="fas fa-phone"></i> CALL TO JOIN NOW
              </a>
            </div>
            <div className="cta-note">
              <p><i className="fas fa-shield-alt"></i> No commitment required | <i className="fas fa-clock"></i> Join anytime</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Contact Page Component
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const contactInfo = [
    { 
      icon: 'fas fa-map-marker-alt', 
      title: 'Visit Us', 
      details: ['123 Fitness Avenue', 'New York, NY 10001'],
      link: 'https://maps.google.com/?q=123+Fitness+Avenue+New+York+NY+10001',
      linkText: 'Get Directions'
    },
    { 
      icon: 'fas fa-phone', 
      title: 'Call Us', 
      details: ['(555) 123-4567', 'Mon-Fri: 5AM-11PM, Sat-Sun: 7AM-9PM'],
      link: 'tel:5551234567',
      linkText: 'Call Now'
    },
    { 
      icon: 'fas fa-envelope', 
      title: 'Email Us', 
      details: ['info@usaelitefitness.com', 'support@usaelitefitness.com'],
      link: 'mailto:info@usaelitefitness.com',
      linkText: 'Send Email'
    },
    { 
      icon: 'fab fa-whatsapp', 
      title: 'WhatsApp', 
      details: ['Instant Response', 'Available 24/7 for members'],
      link: 'https://wa.me/15551234567',
      linkText: 'Chat Now'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact-form') {
      const element = document.getElementById('contact-form');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, []);

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Contact <span className="text-gradient">Us</span></h1>
          <p>Get in touch to start your fitness journey. We're here to help!</p>
          <div className="hero-actions">
            <a href="#contact-form" className="btn btn-primary">
              <i className="fas fa-envelope"></i> Send Message
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="contact-info-section">
        <div className="container">
          <div className="section-header">
            <h2>Get in <span className="text-gradient">Touch</span></h2>
            <p className="section-subtitle">Multiple ways to reach us. Choose what's most convenient for you.</p>
          </div>
          <div className="contact-info-grid">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="contact-info-card glassmorphism-card">
                <div className="contact-icon">
                  <i className={info.icon}></i>
                </div>
                <h3>{info.title}</h3>
                {info.details.map((detail, dIdx) => (
                  <p key={dIdx} className="contact-detail">{detail}</p>
                ))}
                <a href={info.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  {info.linkText} <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form with ID for hash navigation */}
      <section className="contact-form-section" id="contact-form">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-form-container glassmorphism-card">
              <div className="form-header">
                <h2>Send Us a <span className="text-gradient">Message</span></h2>
                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              
              {formSubmitted && (
                <div className="form-success glassmorphism-card">
                  <i className="fas fa-check-circle"></i>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting USA Elite Fitness. We'll get back to you within 24 hours.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="fas fa-user"></i> Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="fas fa-envelope"></i> Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      <i className="fas fa-phone"></i> Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">
                      <i className="fas fa-tag"></i> Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Membership">Membership Information</option>
                      <option value="Personal Training">Personal Training</option>
                      <option value="Group Classes">Group Classes</option>
                      <option value="Feedback">Feedback & Suggestions</option>
                      <option value="Partnership">Business Partnership</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">
                    <i className="fas fa-comment"></i> Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-paper-plane"></i> Send Message
                  </button>
                  <button type="reset" className="btn btn-outline" onClick={() => setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' })}>
                    <i className="fas fa-redo"></i> Clear Form
                  </button>
                </div>
              </form>
            </div>

            <div className="map-container glassmorphism-card">
              <div className="map-header">
                <h3><i className="fas fa-map-marked-alt"></i> Our Location</h3>
                <p>Visit our flagship location in New York City</p>
              </div>
              <div className="map-placeholder">
                <div className="map-image">
                  <i className="fas fa-map"></i>
                </div>
                <div className="location-details">
                  <h4>USA Elite Fitness - NYC</h4>
                  <p><i className="fas fa-map-marker-alt"></i> 123 Fitness Avenue, New York, NY 10001</p>
                  
                  <div className="location-features">
                    <div className="feature">
                      <i className="fas fa-car"></i>
                      <span>Free Parking Available</span>
                    </div>
                    <div className="feature">
                      <i className="fas fa-subway"></i>
                      <span>Near 5 Subway Lines</span>
                    </div>
                    <div className="feature">
                      <i className="fas fa-wheelchair"></i>
                      <span>Wheelchair Accessible</span>
                    </div>
                    <div className="feature">
                      <i className="fas fa-lock"></i>
                      <span>Secure Lockers</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://maps.google.com/?q=123+Fitness+Avenue+New+York+NY+10001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="fas fa-directions"></i> Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="hours-section">
        <div className="container">
          <div className="section-header">
            <h2>Business <span className="text-gradient">Hours</span></h2>
            <p className="section-subtitle">Our regular operating hours for your convenience</p>
          </div>
          <div className="hours-table glassmorphism-card">
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Hours</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Monday', '5:00 AM - 11:00 PM', 'Peak: 5-9AM & 5-8PM'],
                  ['Tuesday', '5:00 AM - 11:00 PM', 'Peak: 5-9AM & 5-8PM'],
                  ['Wednesday', '5:00 AM - 11:00 PM', 'Peak: 5-9AM & 5-8PM'],
                  ['Thursday', '5:00 AM - 11:00 PM', 'Peak: 5-9AM & 5-8PM'],
                  ['Friday', '5:00 AM - 10:00 PM', 'Weekend special classes'],
                  ['Saturday', '7:00 AM - 9:00 PM', 'Family day - kids welcome'],
                  ['Sunday', '8:00 AM - 8:00 PM', 'Recovery & yoga focus']
                ].map(([day, hours, notes], idx) => (
                  <tr key={idx}>
                    <td className="day-cell">{day}</td>
                    <td className="hours-cell">{hours}</td>
                    <td className="notes-cell">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="hours-note">
              <p><i className="fas fa-info-circle"></i> 24/7 access available for Pro and Elite members with key fob access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content glassmorphism-card">
            <h2>Still Have <span className="text-gradient">Questions</span>?</h2>
            <p>We're here to help you start your fitness journey. Reach out anytime!</p>
            <div className="cta-buttons">
              <a href="tel:5551234567" className="btn btn-primary btn-large">
                <i className="fas fa-phone"></i> CALL US NOW
              </a>
              <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-large">
                <i className="fab fa-whatsapp"></i> WHATSAPP CHAT
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Gallery Page Component
function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'facility', name: 'Facility' },
    { id: 'classes', name: 'Classes' },
    { id: 'equipment', name: 'Equipment' },
    { id: 'community', name: 'Community' }
  ];

  const galleryImages = [
    { src: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg", category: "facility", title: "Main Gym Floor" },
    { src: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg", category: "facility", title: "Cardio Area" },
    { src: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg", category: "classes", title: "Spin Class" },
    { src: "https://images.pexels.com/photos/3768918/pexels-photo-3768918.jpeg", category: "classes", title: "HIIT Training" },
    { src: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg", category: "equipment", title: "Strength Zone" },
    { src: "https://images.pexels.com/photos/4662341/pexels-photo-4662341.jpeg", category: "classes", title: "Yoga Studio" },
    { src: "https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg", category: "community", title: "Group Training" },
    { src: "https://images.pexels.com/photos/4720236/pexels-photo-4720236.jpeg", category: "facility", title: "Locker Rooms" },
    { src: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg", category: "community", title: "Personal Training" },
    { src: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg", category: "classes", title: "Boxing Class" },
    { src: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg", category: "classes", title: "Pilates Reformer" },
    { src: "https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg", category: "classes", title: "Boxing Training" }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Our <span className="text-gradient">Gallery</span></h1>
          <p>Take a virtual tour of our premium facilities and vibrant community</p>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="gallery-filter-section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`gallery-tab glassmorphism-card ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredImages.map((img, idx) => (
              <div key={idx} className="gallery-item glassmorphism-card">
                <div className="gallery-image">
                  <img src={img.src} alt={img.title} />
                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <h3>{img.title}</h3>
                      <p>{img.category.charAt(0).toUpperCase() + img.category.slice(1)} Area</p>
                    </div>
                    <button className="gallery-view">
                      <i className="fas fa-expand"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery CTA */}
      <section className="gallery-cta">
        <div className="container">
          <div className="cta-content glassmorphism-card">
            <h2>See It <span className="text-gradient">In Person</span></h2>
            <p>Schedule a tour to experience our facilities firsthand</p>
            <div className="cta-buttons">
              <Link to="/contact#contact-form" className="btn btn-primary btn-large">
                <i className="fas fa-calendar"></i> SCHEDULE A TOUR
              </Link>
              <Link to="/free-trial" className="btn btn-secondary btn-large">
                <i className="fas fa-dumbbell"></i> FREE TRIAL
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Free Trial Page Component
function FreeTrialPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    goals: '',
    experience: 'beginner'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const locations = [
    { value: '', label: 'Select Preferred Location' },
    { value: 'nyc', label: 'New York City - Flagship' },
    { value: 'la', label: 'Los Angeles - West Coast' },
    { value: 'chicago', label: 'Chicago - Midwest' },
    { value: 'miami', label: 'Miami - South Florida' },
    { value: 'boston', label: 'Boston - New England' }
  ];

  const fitnessGoals = [
    { value: 'weight-loss', label: 'Weight Loss' },
    { value: 'muscle-gain', label: 'Muscle Building' },
    { value: 'strength', label: 'Strength Training' },
    { value: 'fitness', label: 'General Fitness' },
    { value: 'sports', label: 'Sports Performance' },
    { value: 'rehab', label: 'Rehabilitation' }
  ];

  const experienceLevels = [
    { value: 'beginner', label: 'Beginner - New to fitness' },
    { value: 'intermediate', label: 'Intermediate - Some experience' },
    { value: 'advanced', label: 'Advanced - Regular exerciser' },
    { value: 'athlete', label: 'Athlete - Competitive training' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Trial form submitted:', formData);
    setFormSubmitted(true);
    
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        goals: '',
        experience: 'beginner'
      });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="free-trial-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Free <span className="text-gradient">7-Day Trial</span></h1>
          <p>Experience premium fitness with no commitment. See why thousands choose USA Elite.</p>
        </div>
      </section>

      {/* Trial Benefits */}
      <section className="trial-benefits">
        <div className="container">
          <div className="section-header">
            <h2>What's <span className="text-gradient">Included</span></h2>
            <p className="section-subtitle">Your free trial includes everything you need to experience the USA Elite difference</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card glassmorphism-card">
              <div className="benefit-icon">
                <i className="fas fa-dumbbell"></i>
              </div>
              <h3>Full Gym Access</h3>
              <p>Access to all cardio and strength equipment during trial period</p>
            </div>
            <div className="benefit-card glassmorphism-card">
              <div className="benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Group Classes</h3>
              <p>Join unlimited group classes - HIIT, Yoga, Spin, and more</p>
            </div>
            <div className="benefit-card glassmorphism-card">
              <div className="benefit-icon">
                <i className="fas fa-user-check"></i>
              </div>
              <h3>Fitness Assessment</h3>
              <p>Free body composition analysis and fitness assessment</p>
            </div>
            <div className="benefit-card glassmorphism-card">
              <div className="benefit-icon">
                <i className="fas fa-crown"></i>
              </div>
              <h3>No Obligation</h3>
              <p>No contract, no credit card required. Cancel anytime during trial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Form */}
      <section className="trial-form-section">
        <div className="container">
          <div className="trial-form-wrapper">
            <div className="trial-form-container glassmorphism-card">
              <div className="form-header">
                <h2>Claim Your <span className="text-gradient">Free Trial</span></h2>
                <p>Fill out the form below to get started. Limited spots available.</p>
              </div>
              
              {formSubmitted && (
                <div className="form-success glassmorphism-card">
                  <i className="fas fa-check-circle"></i>
                  <h3>Trial Request Submitted!</h3>
                  <p>We'll contact you within 24 hours to schedule your free trial. Check your email for confirmation.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="fas fa-user"></i> Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="fas fa-envelope"></i> Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      <i className="fas fa-phone"></i> Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="location">
                    <i className="fas fa-map-marker-alt"></i> Preferred Location *
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  >
                    {locations.map((loc, idx) => (
                      <option key={idx} value={loc.value}>{loc.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="goals">
                    <i className="fas fa-bullseye"></i> Primary Fitness Goal
                  </label>
                  <select
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                  >
                    <option value="">Select your main goal</option>
                    {fitnessGoals.map((goal, idx) => (
                      <option key={idx} value={goal.value}>{goal.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="experience">
                    <i className="fas fa-chart-line"></i> Fitness Experience Level
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                  >
                    {experienceLevels.map((level, idx) => (
                      <option key={idx} value={level.value}>{level.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-terms">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms">
                    I agree to receive communications from USA Elite Fitness and understand I can cancel my trial anytime.
                  </label>
                </div>
                
                <button type="submit" className="btn btn-primary btn-block">
                  <i className="fas fa-running"></i> GET MY FREE 7-DAY TRIAL
                </button>
              </form>
              
              <div className="form-note">
                <p><i className="fas fa-shield-alt"></i> Your information is secure. We never share your data with third parties.</p>
              </div>
            </div>
            
            <div className="trial-info glassmorphism-card">
              <h3><i className="fas fa-info-circle"></i> Trial Details</h3>
              <ul className="info-list">
                <li><i className="fas fa-check"></i> 7 full days of unlimited access</li>
                <li><i className="fas fa-check"></i> No credit card required to start</li>
                <li><i className="fas fa-check"></i> Free fitness assessment included</li>
                <li><i className="fas fa-check"></i> All group classes available</li>
                <li><i className="fas fa-check"></i> Expert trainer consultation</li>
                <li><i className="fas fa-check"></i> No obligation to join</li>
              </ul>
              
              <div className="trial-cta">
                <h4>Have Questions?</h4>
                <p>Contact us directly for more information about the trial.</p>
                <div className="contact-options">
                  <a href="tel:5551234567" className="btn btn-outline">
                    <i className="fas fa-phone"></i> Call Now
                  </a>
                  <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                    <i className="fab fa-whatsapp"></i> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Class Detail Page Component
function ClassDetailPage() {
  const location = useLocation();
  const classId = location.pathname.split('/').pop();
  
  // This would normally come from an API based on classId
  const classDetails = {
    id: 1,
    name: "HIIT Blast",
    category: "hiit",
    description: "High-intensity interval training designed for maximum fat burn and cardiovascular improvement. This class combines explosive movements with short rest periods to keep your heart rate elevated and metabolism boosted for hours after your workout.",
    duration: "45 mins",
    level: "Advanced",
    instructor: "Alex Johnson",
    instructorImage: "https://images.pexels.com/photos/2204536/pexels-photo-2204536.jpeg",
    schedule: "Mon/Wed/Fri 6:00 AM & 6:00 PM",
    price: "$25 per class or included in membership",
    image: "https://images.pexels.com/photos/3768918/pexels-photo-3768918.jpeg",
    features: ["Fat Burning", "Cardio Boost", "Full Body", "High Intensity", "Metabolic Conditioning"],
    intensity: "High",
    calories: "500-700",
    equipment: ["Mat", "Dumbbells", "Kettlebells", "Resistance Bands"],
    benefits: [
      "Improves cardiovascular endurance",
      "Increases metabolism for up to 48 hours",
      "Builds lean muscle mass",
      "Enhances athletic performance",
      "Time-efficient workouts"
    ]
  };

  return (
    <div className="class-detail-page">
      {/* Hero Section */}
      <section className="page-hero class-detail-hero">
        <div className="container">
          <div className="hero-content">
            <div className="class-category">
              <span className="category-tag">HIIT & CARDIO</span>
              <span className="intensity-tag">HIGH INTENSITY</span>
            </div>
            <h1>{classDetails.name}</h1>
            <div className="class-meta-large">
              <span><i className="far fa-clock"></i> {classDetails.duration}</span>
              <span><i className="fas fa-fire"></i> {classDetails.calories} calories</span>
              <span><i className="fas fa-signal"></i> {classDetails.level} Level</span>
            </div>
          </div>
        </div>
      </section>

      {/* Class Details */}
      <section className="class-details-section">
        <div className="container">
          <div className="class-details-wrapper">
            <div className="class-main-content glassmorphism-card">
              <div className="class-image-large">
                <img src={classDetails.image} alt={classDetails.name} />
              </div>
              
              <div className="class-description-section">
                <h2>About This Class</h2>
                <p>{classDetails.description}</p>
                
                <div className="class-benefits">
                  <h3><i className="fas fa-check-circle"></i> Key Benefits</h3>
                  <ul>
                    {classDetails.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="class-features-section">
                <h3><i className="fas fa-cogs"></i> Class Features</h3>
                <div className="features-grid">
                  {classDetails.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="class-sidebar">
              <div className="instructor-card glassmorphism-card">
                <div className="instructor-header">
                  <img src={classDetails.instructorImage} alt={classDetails.instructor} />
                  <div>
                    <h3>{classDetails.instructor}</h3>
                    <p className="instructor-title">Certified HIIT Specialist</p>
                  </div>
                </div>
                <p className="instructor-bio">12 years experience helping clients achieve peak performance through high-intensity training.</p>
                <button className="btn btn-outline">
                  <i className="fas fa-user-circle"></i> View Profile
                </button>
              </div>
              
              <div className="schedule-card glassmorphism-card">
                <h3><i className="far fa-calendar-alt"></i> Schedule</h3>
                <div className="schedule-times">
                  <div className="time-slot">
                    <span className="day">Mon, Wed, Fri</span>
                    <span className="time">6:00 AM</span>
                  </div>
                  <div className="time-slot">
                    <span className="day">Mon, Wed, Fri</span>
                    <span className="time">6:00 PM</span>
                  </div>
                </div>
                <button className="btn btn-primary btn-block">
                  <i className="far fa-calendar-check"></i> Book This Class
                </button>
              </div>
              
              <div className="equipment-card glassmorphism-card">
                <h3><i className="fas fa-dumbbell"></i> Equipment Needed</h3>
                <div className="equipment-list">
                  {classDetails.equipment.map((item, idx) => (
                    <span key={idx} className="equipment-item">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Classes */}
      <section className="related-classes">
        <div className="container">
          <div className="section-header">
            <h2>Related <span className="text-gradient">Classes</span></h2>
            <p className="section-subtitle">You might also enjoy these classes</p>
          </div>
          <div className="classes-grid">
            {/* Similar classes would be displayed here */}
          </div>
        </div>
      </section>
    </div>
  );
}

// Main App Component
function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Home', icon: 'fas fa-home' },
    { path: '/about', label: 'About', icon: 'fas fa-info-circle' },
    { path: '/classes#class-schedule', label: 'Classes', icon: 'fas fa-dumbbell' },
    { path: '/trainers#trainer-profiles', label: 'Trainers', icon: 'fas fa-users' },
    { path: '/membership#pricing', label: 'Membership', icon: 'fas fa-crown' },
    { path: '/gallery', label: 'Gallery', icon: 'fas fa-images' },
    { path: '/contact#contact-form', label: 'Contact', icon: 'fas fa-phone' }
  ];

  const isActive = (path) => {
    const basePath = path.split('#')[0];
    return location.pathname === basePath;
  };

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent');
    if (hasConsent) {
      setShowCookieBanner(false);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowCookieBanner(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookie-consent', 'false');
    setShowCookieBanner(false);
  };

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="app">
      {/* Add Fonts */}
      <Fonts />
      
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
              <div className="logo-icon">🏋️</div>
              <div className="logo-text">
                <span className="logo-main">USA </span>
                <span className="logo-sub">FITNESS</span>
              </div>
            </Link>

            <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
              {navItems.map(item => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                >
                  <i className={item.icon}></i>
                  <span>{item.label}</span>
                </button>
              ))}
              <a 
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp mobile-onlys"
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="fab fa-whatsapp"></i> JOIN NOW
              </a>
            </nav>

            <div className="header-actions">
              <a 
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-small desktop-only"
              >
                <i className="fab fa-whatsapp"></i> JOIN
              </a>
              <Link to="/free-trial" className="btn btn-primary btn-small desktop-only">
                FREE TRIAL
              </Link>
              <button 
                className="menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-bars"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/trainers" element={<TrainersPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/free-trial" element={<FreeTrialPage />} />
          <Route path="/class/:id" element={<ClassDetailPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="logo-icon">🏋️</div>
                <div className="logo-text">
                  <span className="logo-main">USA ELITE</span>
                  <span className="logo-sub">FITNESS</span>
                </div>
              </div>
              <p className="footer-description">
                Transform your body and life at America's premier fitness destination. 
                Where excellence meets community.
              </p>
              <div className="social-links">
                {['facebook', 'instagram', 'twitter', 'youtube', 'tiktok'].map(platform => (
                  <a 
                    key={platform} 
                    href="#" 
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`fab fa-${platform}`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <div className="footer-links">
                {navItems.map(item => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className="footer-link"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <i className={item.icon}></i> {item.label}
                  </Link>
                ))}
                <Link to="/free-trial" className="footer-link">
                  <i className="fas fa-running"></i> Free Trial
                </Link>
                <a href="#" className="footer-link">
                  <i className="fas fa-briefcase"></i> Careers
                </a>
                <a href="#faq" className="footer-link">
                  <i className="far fa-question-circle"></i> FAQ
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Contact Info</h3>
              <div className="contact-info">
                <p><i className="fas fa-map-marker-alt"></i> 123 Fitness Ave, NYC 10001</p>
                <p><i className="fas fa-phone"></i> (555) 123-4567</p>
                <p><i className="fas fa-envelope"></i> info@usaelitefitness.com</p>
                <p><i className="fas fa-clock"></i> Open 24/7 for members</p>
              </div>
            </div>

            <div className="footer-section">
              <h3>Newsletter</h3>
              <p>Subscribe for fitness tips, special offers, and updates</p>
              <div className="newsletter">
                <input type="email" placeholder="Enter your email" />
                <button className="btn btn-primary btn-small">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              <p className="newsletter-note">
                <i className="fas fa-lock"></i> We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 USA Elite Fitness. All rights reserved. | Premium Fitness Experience</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/15551234567" 
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="tooltip">Chat with us!</span>
      </a>

      {/* Back to Top */}
      <button 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="cookie-banner">
          <div className="cookie-content">
            <i className="fas fa-cookie-bite"></i>
            <div>
              <h4>We Use Cookies</h4>
              <p>We use cookies to enhance your experience on our website and analyze site traffic.</p>
            </div>
          </div>
          <div className="cookie-actions">
            <button className="btn btn-outline" onClick={handleDeclineCookies}>
              Decline
            </button>
            <button className="btn btn-primary" onClick={handleAcceptCookies}>
              Accept All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Wrapper with Router
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}