import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

// Sub-page Components
function HomePage() {
  const whatsappLink = "https://wa.me/15551234567?text=Hello%20I%20want%20to%20join%20your%20gym";
  const [videoPlaying, setVideoPlaying] = useState(false);

  const stats = [
    { number: "10,000+", label: "Transformations" },
    { number: "50+", label: "Certified Trainers" },
    { number: "24/7", label: "Access" },
    { number: "5", label: "Locations" }
  ];

  const features = [
    { icon: "🏋️", title: "Modern Equipment", desc: "Latest Technogym equipment" },
    { icon: "👨‍🏫", title: "Expert Trainers", desc: "Certified professionals" },
    { icon: "⏰", title: "24/7 Access", desc: "Train anytime" },
    { icon: "💪", title: "Proven Results", desc: "10,000+ transformations" },
    { icon: "🏆", title: "Community", desc: "Supportive environment" },
    { icon: "🔄", title: "Flexible Plans", desc: "No contracts" }
  ];

  const classes = [
    { name: "HIIT Training", time: "45 mins", level: "Advanced", image: "https://images.pexels.com/photos/3768918/pexels-photo-3768918.jpeg" },
    { name: "Strength Training", time: "60 mins", level: "All Levels", image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg" },
    { name: "Yoga & Mobility", time: "60 mins", level: "Beginner", image: "https://images.pexels.com/photos/4662341/pexels-photo-4662341.jpeg" }
  ];

  return (
    <div className="home-page">
      {/* Hero Section with Video */}
      <section className="hero-section">
        <div className="hero-video-container">
          {videoPlaying ? (
            <video autoPlay muted loop className="hero-video">
              <source src="https://assets.mixkit.co/videos/preview/mixkit-young-woman-training-in-the-gym-4990-large.mp4" type="video/mp4" />
            </video>
          ) : (
            <div className="video-placeholder">
              <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg" alt="Gym" />
              <button className="play-button" onClick={() => setVideoPlaying(true)}>
                <i className="fas fa-play"></i>
              </button>
            </div>
          )}
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <span>🏆 PREMIUM FITNESS EXPERIENCE</span>
          </div>
          <h1 className="hero-title">
            <span className="text-gradient">Transform Your Body</span>
            <br />
            <span className="text-gradient">Transform Your Life</span>
          </h1>
          <p className="hero-description">
            Join America's most elite fitness community. State-of-the-art equipment, 
            world-class trainers, and results-driven programs designed for your success.
          </p>
          <div className="hero-buttons">
            <Link to="/free-trial" className="btn btn-primary">
              <i className="fas fa-calendar-check"></i> FREE 7-DAY TRIAL
            </Link>
            <a href={whatsappLink} className="btn btn-whatsapp">
              <i className="fab fa-whatsapp"></i> JOIN NOW
            </a>
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

      {/* Features Grid */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose <span className="text-gradient">USA Elite Fitness</span></h2>
            <p>Experience the difference with our premium facilities and services</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <span>{feature.icon}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Classes */}
      <section className="classes-preview">
        <div className="container">
          <div className="section-header">
            <h2>Popular <span className="text-gradient">Classes</span></h2>
            <p>Join our most sought-after fitness classes</p>
          </div>
          <div className="classes-grid">
            {classes.map((cls, index) => (
              <div key={index} className="class-card">
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
                  </div>
                  <Link to="/classes" className="btn btn-outline">
                    View Details
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
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <h2>Start Your Transformation <span className="text-gradient">Today</span></h2>
            <p>Get your first week free. No commitment required.</p>
            <div className="cta-buttons">
              <Link to="/membership" className="btn btn-primary btn-large">
                <i className="fas fa-crown"></i> VIEW PLANS
              </Link>
              <a href={whatsappLink} className="btn btn-whatsapp btn-large">
                <i className="fab fa-whatsapp"></i> CHAT WITH US
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  const team = [
    { name: "John Smith", role: "Founder & CEO", image: "https://randomuser.me/api/portraits/men/32.jpg", bio: "20+ years in fitness industry" },
    { name: "Sarah Johnson", role: "Head Trainer", image: "https://randomuser.me/api/portraits/women/44.jpg", bio: "NASM Certified, 15 years experience" },
    { name: "Mike Davis", role: "Nutrition Director", image: "https://randomuser.me/api/portraits/men/22.jpg", bio: "Registered Dietitian" },
    { name: "Emma Wilson", role: "Yoga Director", image: "https://randomuser.me/api/portraits/women/22.jpg", bio: "RYT 500 Certified" }
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>About <span className="text-gradient">USA Elite Fitness</span></h1>
          <p>Redefining fitness excellence since 2010</p>
        </div>
      </section>

      {/* Story */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, USA Elite Fitness began with a simple mission: to create 
                a fitness experience that combines world-class facilities with expert 
                guidance and a supportive community.
              </p>
              <p>
                What started as a single location in New York City has grown into a premier 
                fitness destination with multiple locations, serving thousands of members 
                who have transformed their lives through our programs.
              </p>
              <div className="milestones">
                <div className="milestone">
                  <div className="year">2010</div>
                  <div className="event">First gym opens in NYC</div>
                </div>
                <div className="milestone">
                  <div className="year">2015</div>
                  <div className="event">Expanded to 3 locations</div>
                </div>
                <div className="milestone">
                  <div className="year">2020</div>
                  <div className="event">10,000th member joins</div>
                </div>
                <div className="milestone">
                  <div className="year">2024</div>
                  <div className="event">5 locations nationwide</div>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg" alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our <span className="text-gradient">Leadership Team</span></h2>
            <p>The experts behind your success</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
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

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our <span className="text-gradient">Values</span></h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💪</div>
              <h3>Excellence</h3>
              <p>Striving for the highest standards in everything we do</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Community</h3>
              <p>Building supportive relationships that inspire growth</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Results</h3>
              <p>Focusing on delivering measurable, sustainable results</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Innovation</h3>
              <p>Continuously improving with cutting-edge approaches</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ClassesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Classes' },
    { id: 'hiit', name: 'HIIT & Cardio' },
    { id: 'strength', name: 'Strength' },
    { id: 'yoga', name: 'Yoga & Mobility' },
    { id: 'boxing', name: 'Boxing' },
    { id: 'specialty', name: 'Specialty' }
  ];

  const allClasses = [
    {
      id: 1,
      name: "HIIT Blast",
      category: "hiit",
      description: "High-intensity interval training for maximum fat burn",
      duration: "45 mins",
      level: "Advanced",
      instructor: "Alex Johnson",
      schedule: "Mon/Wed/Fri 6:00 AM & 6:00 PM",
      price: "$25",
      image: "https://images.pexels.com/photos/3768918/pexels-photo-3768918.jpeg",
      features: ["Fat Burning", "Cardio", "Full Body"]
    },
    {
      id: 2,
      name: "Strength Training",
      category: "strength",
      description: "Build muscle mass and increase strength",
      duration: "60 mins",
      level: "All Levels",
      instructor: "David Kim",
      schedule: "Tue/Thu/Sat 7:00 AM & 7:00 PM",
      price: "$30",
      image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg",
      features: ["Muscle Growth", "Strength", "Body Toning"]
    },
    {
      id: 3,
      name: "Power Yoga",
      category: "yoga",
      description: "Dynamic yoga for strength and flexibility",
      duration: "60 mins",
      level: "Intermediate",
      instructor: "Sarah Miller",
      schedule: "Daily 8:00 AM & 5:00 PM",
      price: "$20",
      image: "https://images.pexels.com/photos/4662341/pexels-photo-4662341.jpeg",
      features: ["Flexibility", "Strength", "Mindfulness"]
    },
    {
      id: 4,
      name: "Boxing Fitness",
      category: "boxing",
      description: "Learn boxing techniques with intense workouts",
      duration: "50 mins",
      level: "Intermediate",
      instructor: "Mike Tyson",
      schedule: "Mon/Wed/Fri 5:00 PM & 7:00 PM",
      price: "$35",
      image: "https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg",
      features: ["Full Body", "Cardio", "Self Defense"]
    },
    {
      id: 5,
      name: "Spin & Sculpt",
      category: "hiit",
      description: "Indoor cycling with strength intervals",
      duration: "45 mins",
      level: "All Levels",
      instructor: "Lisa Chang",
      schedule: "Tue/Thu 6:30 PM, Sat 9:00 AM",
      price: "$25",
      image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
      features: ["Cardio", "Leg Strength", "Endurance"]
    },
    {
      id: 6,
      name: "Pilates Reformer",
      category: "yoga",
      description: "Core strengthening on reformer machines",
      duration: "50 mins",
      level: "Beginner",
      instructor: "Emma Wilson",
      schedule: "Mon/Wed/Fri 10:00 AM & 4:00 PM",
      price: "$30",
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
      features: ["Core Strength", "Posture", "Flexibility"]
    }
  ];

  const filteredClasses = selectedCategory === 'all' 
    ? allClasses 
    : allClasses.filter(cls => cls.category === selectedCategory);

  return (
    <div className="classes-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Our <span className="text-gradient">Classes</span></h1>
          <p>Find your perfect workout from our diverse selection</p>
        </div>
      </section>

      {/* Class Filter */}
      <section className="class-filter-section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-tab ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="classes-grid-section">
        <div className="container">
          <div className="classes-grid-detailed">
            {filteredClasses.map(cls => (
              <div key={cls.id} className="class-card-detailed">
                <div className="class-image-detailed">
                  <img src={cls.image} alt={cls.name} />
                  <div className="class-badges">
                    <span className="class-level">{cls.level}</span>
                    <span className="class-price">{cls.price}</span>
                  </div>
                </div>
                <div className="class-content-detailed">
                  <div className="class-header">
                    <h3>{cls.name}</h3>
                    <div className="class-meta">
                      <span><i className="far fa-clock"></i> {cls.duration}</span>
                      <span><i className="fas fa-user"></i> {cls.instructor}</span>
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
                    <Link to={`/class/${cls.id}`} className="btn btn-outline">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="schedule-section">
        <div className="container">
          <div className="section-header">
            <h2>Weekly <span className="text-gradient">Schedule</span></h2>
            <p>Plan your workouts with our comprehensive timetable</p>
          </div>
          <div className="schedule-table">
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
                </tr>
              </thead>
              <tbody>
                {[
                  { time: '6:00 AM', classes: ['HIIT Blast', 'Strength', 'HIIT Blast', 'Strength', 'HIIT Blast', 'Bootcamp'] },
                  { time: '7:00 AM', classes: ['Yoga', 'Spin', 'Yoga', 'Spin', 'Yoga', 'Yoga'] },
                  { time: '6:00 PM', classes: ['Strength', 'Boxing', 'Strength', 'Boxing', 'Strength', '-'] },
                  { time: '7:00 PM', classes: ['Boxing', 'Yoga', 'Boxing', 'Yoga', 'Boxing', '-'] }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="time-cell">{row.time}</td>
                    {row.classes.map((cls, cIdx) => (
                      <td key={cIdx} className={cls === '-' ? 'empty' : ''}>
                        {cls !== '-' && <span className="class-name">{cls}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

function MembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  
  const plans = [
    {
      id: 'basic',
      name: 'BASIC',
      price: '$49',
      period: 'per month',
      features: [
        'Access to cardio area',
        'Locker room access',
        'Free fitness assessment',
        'Basic equipment usage',
        'Wi-Fi access',
        'Open gym hours'
      ],
      buttonText: 'GET STARTED',
      popular: false
    },
    {
      id: 'pro',
      name: 'PRO',
      price: '$79',
      period: 'per month',
      features: [
        'All Basic features',
        'All group classes included',
        '24/7 gym access',
        'Guest passes (2/month)',
        'Sauna & steam room',
        'Towel service',
        'Priority booking'
      ],
      buttonText: 'MOST POPULAR',
      popular: true
    },
    {
      id: 'elite',
      name: 'ELITE',
      price: '$129',
      period: 'per month',
      features: [
        'All Pro features',
        '4 Personal training sessions',
        'Custom nutrition plan',
        'Guest passes (4/month)',
        'Recovery area access',
        'Priority class booking',
        'Nutrition coaching',
        'Progress tracking'
      ],
      buttonText: 'GO ELITE',
      popular: false
    }
  ];

  const faqs = [
    { question: 'Can I cancel anytime?', answer: 'Yes, all plans are month-to-month with no cancellation fees.' },
    { question: 'Is there a free trial?', answer: 'Yes, we offer a 7-day free trial for all new members.' },
    { question: 'Are classes included?', answer: 'All group classes are included in Pro and Elite plans.' },
    { question: 'Can I freeze my membership?', answer: 'Yes, you can freeze your membership for up to 3 months per year.' },
    { question: 'Do you offer student discounts?', answer: 'Yes, we offer 15% discount for students with valid ID.' },
    { question: 'Is there an initiation fee?', answer: 'No initiation fees for any of our plans.' }
  ];

  return (
    <div className="membership-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Membership <span className="text-gradient">Plans</span></h1>
          <p>Simple, transparent pricing with no hidden fees</p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map(plan => (
              <div 
                key={plan.id} 
                className={`pricing-card ${plan.popular ? 'popular' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <i className="fas fa-crown"></i> MOST POPULAR
                  </div>
                )}
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="amount">{plan.price}</span>
                    <span className="period">/{plan.period}</span>
                  </div>
                </div>
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i> {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary btn-block">
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
          
          <div className="pricing-note">
            <p><i className="fas fa-info-circle"></i> All plans include a 7-day free trial. No credit card required.</p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-header">
            <h2>Plan <span className="text-gradient">Comparison</span></h2>
          </div>
          <div className="comparison-table">
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
                  ['Group Classes', '❌', '✅', '✅'],
                  ['Personal Training', '❌', '❌', '4 sessions'],
                  ['Guest Passes', '❌', '2/month', '4/month'],
                  ['Nutrition Plan', '❌', '❌', '✅'],
                  ['Recovery Area', '❌', '✅', '✅'],
                  ['Towel Service', '❌', '✅', '✅'],
                  ['Priority Booking', '❌', '✅', '✅']
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

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked <span className="text-gradient">Questions</span></h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <div className="faq-question">
                  <h4>{faq.question}</h4>
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

      {/* CTA */}
      <section className="membership-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your <span className="text-gradient">Journey</span>?</h2>
            <p>Get your free trial today and experience the difference</p>
            <div className="cta-buttons">
              <Link to="/free-trial" className="btn btn-primary btn-large">
                <i className="fas fa-calendar-check"></i> GET FREE TRIAL
              </Link>
              <a href="tel:5551234567" className="btn btn-secondary btn-large">
                <i className="fas fa-phone"></i> CALL NOW
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TrainersPage() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  
  const trainers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Head Strength Coach",
      experience: "12 years",
      specialty: ["Strength Training", "Bodybuilding", "Nutrition"],
      certifications: ["NASM", "ACE", "CrossFit L3"],
      bio: "Former professional athlete with multiple certifications. Specializes in strength and conditioning.",
      image: "https://images.pexels.com/photos/2204536/pexels-photo-2204536.jpeg",
      schedule: "Mon-Fri: 6AM-8PM",
      social: { instagram: "@alexjohnson", youtube: "AlexJohnsonFitness" }
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "HIIT & Cardio Specialist",
      experience: "8 years",
      specialty: ["HIIT", "Fat Loss", "Functional Training"],
      certifications: ["ACE", "ISSA", "Precision Nutrition"],
      bio: "Passionate about helping clients achieve their weight loss goals through effective HIIT programs.",
      image: "https://images.pexels.com/photos/4498238/pexels-photo-4498238.jpeg",
      schedule: "Mon-Sat: 7AM-9PM",
      social: { instagram: "@mariagarciafit", tiktok: "mariagarciafitness" }
    },
    {
      id: 3,
      name: "David Kim",
      role: "Olympic Weightlifting Coach",
      experience: "10 years",
      specialty: ["Weightlifting", "Powerlifting", "Mobility"],
      certifications: ["USAW", "NSCA", "FMS"],
      bio: "Competitive weightlifter with national level experience. Focuses on proper technique and form.",
      image: "https://images.pexels.com/photos/842567/pexels-photo-842567.jpeg",
      schedule: "Tue-Thu: 5AM-7PM, Sat: 8AM-12PM",
      social: { instagram: "@davidkimstrength" }
    },
    {
      id: 4,
      name: "Sarah Miller",
      role: "Yoga & Wellness Director",
      experience: "6 years",
      specialty: ["Yoga", "Meditation", "Holistic Health"],
      certifications: ["RYT 500", "Yoga Therapy", "Mindfulness"],
      bio: "Believes in the power of mind-body connection. Specializes in therapeutic yoga practices.",
      image: "https://images.pexels.com/photos/3765177/pexels-photo-3765177.jpeg",
      schedule: "Daily: 6AM-8PM",
      social: { instagram: "@sarahmilleryoga" }
    }
  ];

  return (
    <div className="trainers-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Meet Our <span className="text-gradient">Trainers</span></h1>
          <p>Learn from certified professionals with years of experience</p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="trainers-grid-section">
        <div className="container">
          <div className="trainers-grid">
            {trainers.map(trainer => (
              <div 
                key={trainer.id} 
                className="trainer-card"
                onClick={() => setSelectedTrainer(trainer)}
              >
                <div className="trainer-image">
                  <img src={trainer.image} alt={trainer.name} />
                  <div className="trainer-experience">
                    <i className="fas fa-medal"></i> {trainer.experience}
                  </div>
                </div>
                <div className="trainer-info">
                  <h3>{trainer.name}</h3>
                  <p className="trainer-role">{trainer.role}</p>
                  <div className="trainer-specialties">
                    {trainer.specialty.map((spec, idx) => (
                      <span key={idx} className="specialty-tag">{spec}</span>
                    ))}
                  </div>
                  <div className="trainer-actions">
                    <button className="btn btn-outline btn-small">
                      View Profile
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
        <div className="trainer-modal">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setSelectedTrainer(null)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedTrainer.image} alt={selectedTrainer.name} />
              </div>
              <div className="modal-info">
                <h2>{selectedTrainer.name}</h2>
                <p className="modal-role">{selectedTrainer.role}</p>
                <div className="modal-experience">
                  <i className="fas fa-medal"></i> {selectedTrainer.experience} Experience
                </div>
                <p className="modal-bio">{selectedTrainer.bio}</p>
                
                <div className="modal-specialties">
                  <h4>Specialties</h4>
                  <div className="specialties-list">
                    {selectedTrainer.specialty.map((spec, idx) => (
                      <span key={idx} className="specialty-tag">{spec}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-certifications">
                  <h4>Certifications</h4>
                  <div className="certs-list">
                    {selectedTrainer.certifications.map((cert, idx) => (
                      <span key={idx} className="cert-tag">{cert}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-schedule">
                  <h4>Schedule</h4>
                  <p>{selectedTrainer.schedule}</p>
                </div>
                
                <div className="modal-actions">
                  <button className="btn btn-primary">
                    <i className="far fa-calendar-check"></i> Book Session
                  </button>
                  <div className="social-links">
                    {Object.entries(selectedTrainer.social).map(([platform, handle]) => (
                      <a key={platform} href="#" className="social-link">
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

      {/* CTA */}
      <section className="trainers-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Personal <span className="text-gradient">Training</span> Available</h2>
            <p>Get one-on-one coaching from our expert trainers</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">
                <i className="fas fa-dumbbell"></i> BOOK TRAINING
              </button>
              <Link to="/contact" className="btn btn-secondary btn-large">
                <i className="fas fa-question-circle"></i> ASK QUESTIONS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', title: 'Visit Us', details: ['123 Fitness Avenue', 'New York, NY 10001'] },
    { icon: 'fas fa-phone', title: 'Call Us', details: ['(555) 123-4567', 'Mon-Fri: 5AM-11PM'] },
    { icon: 'fas fa-envelope', title: 'Email Us', details: ['info@usaelitefitness.com', '24/7 Support'] },
    { icon: 'fab fa-whatsapp', title: 'WhatsApp', details: ['Instant Response', 'Chat with us 24/7'] }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Contact <span className="text-gradient">Us</span></h1>
          <p>Get in touch to start your fitness journey</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="contact-info-card">
                <div className="contact-icon">
                  <i className={info.icon}></i>
                </div>
                <h3>{info.title}</h3>
                {info.details.map((detail, dIdx) => (
                  <p key={dIdx}>{detail}</p>
                ))}
                {info.title === 'WhatsApp' && (
                  <a href="https://wa.me/15551234567" className="btn btn-whatsapp btn-small">
                    <i className="fab fa-whatsapp"></i> Message Now
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-form-container">
              <h2>Send Us a <span className="text-gradient">Message</span></h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>

            <div className="map-container">
              <div className="map-placeholder">
                <i className="fas fa-map-marked-alt"></i>
                <h3>Our Location</h3>
                <p>123 Fitness Avenue, New York, NY 10001</p>
                <div className="map-features">
                  <div className="map-feature">
                    <i className="fas fa-car"></i>
                    <span>Parking Available</span>
                  </div>
                  <div className="map-feature">
                    <i className="fas fa-subway"></i>
                    <span>Near Subway</span>
                  </div>
                  <div className="map-feature">
                    <i className="fas fa-wheelchair"></i>
                    <span>Wheelchair Accessible</span>
                  </div>
                </div>
                <a 
                  href="https://maps.google.com/?q=123+Fitness+Avenue+New+York+NY+10001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <i className="fas fa-directions"></i> Get Directions
                </a>
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
          </div>
          <div className="hours-table">
            <table>
              <tbody>
                {[
                  ['Monday', '5:00 AM - 11:00 PM'],
                  ['Tuesday', '5:00 AM - 11:00 PM'],
                  ['Wednesday', '5:00 AM - 11:00 PM'],
                  ['Thursday', '5:00 AM - 11:00 PM'],
                  ['Friday', '5:00 AM - 10:00 PM'],
                  ['Saturday', '7:00 AM - 9:00 PM'],
                  ['Sunday', '8:00 AM - 8:00 PM']
                ].map(([day, hours], idx) => (
                  <tr key={idx}>
                    <td>{day}</td>
                    <td>{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="hours-note">
              <p><i className="fas fa-info-circle"></i> 24/7 access available for Pro and Elite members</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Additional Sub-pages
function GalleryPage() {
  const galleryImages = [
    { src: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg", category: "facility" },
    { src: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg", category: "classes" },
    { src: "https://images.pexels.com/photos/3768918/pexels-photo-3768918.jpeg", category: "training" },
    { src: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg", category: "equipment" },
    { src: "https://images.pexels.com/photos/4662341/pexels-photo-4662341.jpeg", category: "yoga" },
    { src: "https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg", category: "community" },
    { src: "https://images.pexels.com/photos/4720236/pexels-photo-4720236.jpeg", category: "facility" },
    { src: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg", category: "training" },
    { src: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg", category: "classes" }
  ];

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our <span className="text-gradient">Gallery</span></h1>
          <p>Take a tour of our premium facilities</p>
        </div>
      </section>
      <div className="gallery-grid">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img src={img.src} alt={`Gallery ${idx + 1}`} />
            <div className="gallery-overlay">
              <i className="fas fa-search-plus"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FreeTrialPage() {
  return (
    <div className="free-trial-page">
      <section className="page-hero">
        <div className="container">
          <h1>Free <span className="text-gradient">7-Day Trial</span></h1>
          <p>Experience premium fitness with no commitment</p>
        </div>
      </section>
      <div className="trial-form">
        <h2>Claim Your Free Trial</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <select required>
            <option value="">Select Preferred Location</option>
            <option value="nyc">New York City</option>
            <option value="la">Los Angeles</option>
            <option value="chicago">Chicago</option>
            <option value="miami">Miami</option>
          </select>
          <button type="submit" className="btn btn-primary">GET FREE TRIAL</button>
        </form>
      </div>
    </div>
  );
}

function ClassDetailPage({ match }) {
  return (
    <div className="class-detail-page">
      <section className="page-hero">
        <div className="container">
          <h1>Class <span className="text-gradient">Details</span></h1>
        </div>
      </section>
      {/* Add class details here */}
    </div>
  );
}

// Main App Component
function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: 'fas fa-home' },
    { path: '/about', label: 'About', icon: 'fas fa-info-circle' },
    { path: '/classes', label: 'Classes', icon: 'fas fa-dumbbell' },
    { path: '/trainers', label: 'Trainers', icon: 'fas fa-users' },
    { path: '/membership', label: 'Membership', icon: 'fas fa-crown' },
    { path: '/gallery', label: 'Gallery', icon: 'fas fa-images' },
    { path: '/contact', label: 'Contact', icon: 'fas fa-phone' }
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent');
    if (hasConsent) {
      setShowCookieBanner(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowCookieBanner(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookie-consent', 'false');
    setShowCookieBanner(false);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <div className="logo-icon">🏋️</div>
              <div className="logo-text">
                <span className="logo-main">USA ELITE</span>
                <span className="logo-sub">FITNESS</span>
              </div>
            </Link>

            <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <i className={item.icon}></i>
                  <span>{item.label}</span>
                </Link>
              ))}
              {/* <a 
                href="https://wa.me/15551234567"
                className="btn btn-whatsapp"
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="fab fa-whatsapp"></i> JOIN NOW
              </a> */}
            </nav>

            <div className="header-actions">
              <a 
                href="https://wa.me/15551234567"
                className="btn btn-whatsapp btn-small desktop-only"
              >
                <i className="fab fa-whatsapp"></i> JOIN
              </a>
              <button 
                className="menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? '✕' : '☰'}
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
              <p>Transform your body and life at America's premier fitness destination.</p>
              <div className="social-links">
                {['facebook', 'instagram', 'twitter', 'youtube', 'tiktok'].map(platform => (
                  <a key={platform} href="#" className="social-link">
                    <i className={`fab fa-${platform}`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <div className="footer-links">
                {navItems.map(item => (
                  <Link key={item.path} to={item.path} className="footer-link">
                    {item.label}
                  </Link>
                ))}
                <Link to="/free-trial" className="footer-link">Free Trial</Link>
                <a href="#" className="footer-link">Careers</a>
                <a href="#" className="footer-link">FAQ</a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Contact Info</h3>
              <div className="contact-info">
                <p><i className="fas fa-map-marker-alt"></i> 123 Fitness Ave, NYC</p>
                <p><i className="fas fa-phone"></i> (555) 123-4567</p>
                <p><i className="fas fa-envelope"></i> info@usaelitefitness.com</p>
                <p><i className="fas fa-clock"></i> Open 24/7</p>
              </div>
            </div>

            <div className="footer-section">
              <h3>Newsletter</h3>
              <p>Subscribe for fitness tips and special offers</p>
              <div className="newsletter">
                <input type="email" placeholder="Enter your email" />
                <button className="btn btn-primary btn-small">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 USA Elite Fitness. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/15551234567" className="floating-whatsapp">
        <i className="fab fa-whatsapp"></i>
        <span className="tooltip">Chat with us!</span>
      </a>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="cookie-banner">
          <div className="cookie-content">
            <i className="fas fa-cookie-bite"></i>
            <div>
              <h4>We Use Cookies</h4>
              <p>We use cookies to enhance your experience on our website.</p>
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